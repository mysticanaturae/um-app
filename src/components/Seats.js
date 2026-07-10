import { supabase } from "../supabase/client.js";

export async function loadSeats() {
    console.log("🪑 Seats portal activated");

    const { data, error } = await supabase
        .from("seats")
        .select("*");

    if (error) {
        console.error("❌ Error loading seats:", error);
        return;
    }

    console.log("🌈 Seats from Supabase:", data);
}