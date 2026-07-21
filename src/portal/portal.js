import {
    createStars,
    createParticles,
    mouseGalaxy
} from "./scene.js";


import { getPortalMessages } from "./messages.js";


import { memberData } from "./member.js";


import {
    setMessage,
    showButton
} from "./ui.js";


import {
    awakenPortal,
    pulsePortal
} from "./animations.js";

import {
    openTimeWheel
} from "./wheel.js";

import { revealNumber } from "./number.js";


// 🌌 Zaženi vesolje

createStars();

createParticles();

mouseGalaxy();



// 🌀 Aktiviraj portal

awakenPortal();



function sleep(ms){

    return new Promise(resolve =>
        setTimeout(resolve, ms)
    );

}





async function intro(){


    const portalMessages =
    getPortalMessages(memberData);


    console.log(memberData);



    // Prvi del zgodbe

    for(const item of portalMessages){


        await sleep(item.delay);


        setMessage(item.text);


    }



    // ✨ Razkritje številke

    revealNumber(
        memberData.seatNumber
    );



    await sleep(3000);



    // 🌀 Sporočilo po razkritju

    setMessage(
        "Čas je pripravljen."
    );



    await sleep(2000);



    // 🔘 Prikaži gumb

    showButton();


}





intro();






document
.getElementById("portalButton")
.onclick = async () => {

    console.log("🌀 GUMB DELA");

    pulsePortal();

    await sleep(2000);

    openTimeWheel();

};