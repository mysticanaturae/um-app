import { drawReward } from "./drawReward.js";
import { memberData } from "./member.js";

export async function openTimeWheel() {

    const portalArea =
        document.getElementById("portalArea");

    portalArea.innerHTML = `

        <div id="wheelScreen">

            <h2>KOLO ČASA</h2>

            <div id="wheel">

                🌀

            </div>

            <button id="spinButton">

                ZAVRTI KOLO

            </button>

        </div>

    `;

    document
        .getElementById("spinButton")
        .onclick = spinWheel;

}

async function spinWheel(){

    const wheel =
        document.getElementById("wheel");

    wheel.classList.add("spinning");

    await new Promise(r=>setTimeout(r,4000));

    const reward =
        await drawReward(
            memberData.id,
            memberData.seatNumber
        );

    showReward(reward);

}

function showReward(reward){

    const portalArea =
        document.getElementById("portalArea");

    portalArea.innerHTML = `

        <div id="rewardCard">

            <h2>

                🎁 Portal ti je razkril darilo.

            </h2>

            <h3>

                ${reward.reward_name}

            </h3>

            <p>

                ${reward.description}

            </p>

            <button id="claimReward">

                PREVZEMI DARILO

            </button>

            <small>

                To presenečenje je bilo odstranjeno
                iz Kolesa Časa.

                Nihče drug ga ne bo prejel.

            </small>

        </div>

    `;

}