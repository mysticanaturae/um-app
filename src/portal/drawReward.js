import { supabase } from "../supabase/client.js";

export async function drawReward(memberId, seatNumber) {

    // preveri ali je član že dobil nagrado

    const { data: existingClaim } = await supabase
        .from("reward_claims")
        .select(`
            *,
            rewards(*)
        `)
        .eq("member_id", memberId)
        .maybeSingle();

    if (existingClaim) {

        return existingClaim.rewards;

    }

    // poišči vse razpoložljive nagrade

    const { data: rewards, error } = await supabase
        .from("rewards")
        .select("*")
        .eq("available", true);

    if (error) {

        console.error(error);

        return null;

    }

    if (!rewards.length) {

        alert("Vse nagrade so bile že razdeljene.");

        return null;

    }

    // izberi naključno

    const randomReward =
        rewards[
            Math.floor(
                Math.random() * rewards.length
            )
        ];

    // shrani claim

    const { error: claimError } =
        await supabase
            .from("reward_claims")
            .insert({

                member_id: memberId,

                seat_number: seatNumber,

                reward_id: randomReward.id

            });

    if (claimError) {

        console.error(claimError);

        return null;

    }

    // odstrani nagrado iz nabora

    await supabase
        .from("rewards")
        .update({

            available: false

        })
        .eq("id", randomReward.id);

    return randomReward;

}