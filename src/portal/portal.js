import {
    createStars,
    createParticles,
    mouseGalaxy
} from "./scene.js";


import { getPortalMessages } from "./messages.js";


import {
    memberData,
    setMemberData
} from "./member.js";


import { supabase } from "../supabase/client.js";


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





// ==========================
// NALOŽI ČLANA PORTALA
// ==========================


const params =
new URLSearchParams(window.location.search);



const memberId =
params.get("member");



if(memberId){


    const { data: member, error } =

    await supabase
    .from("members")
    .select(`
        first_name,
        seat_number
    `)
    .eq("id", memberId)
    .single();



    if(error){


        console.error(
            "❌ Portal member error:",
            error
        );


    }
    else{


        console.log(
            "🌌 Portal member:",
            member
        );



        setMemberData({

            name: member.first_name,

            seatNumber: member.seat_number

        });



        console.log(
            "🌀 PORTAL DATA SET:",
            member.seat_number
        );


    }



}





// ==========================
// 🌌 Zaženi vesolje
// ==========================


createStars();

createParticles();

mouseGalaxy();





// ==========================
// 🌀 Aktiviraj portal
// ==========================


awakenPortal();





function sleep(ms){

    return new Promise(resolve =>
        setTimeout(resolve, ms)
    );

}








async function intro(){



    console.log(
        "🌌 CURRENT MEMBER DATA:",
        memberData
    );



    const portalMessages =

    getPortalMessages(memberData);




    for(const item of portalMessages){


        await sleep(item.delay);


        setMessage(item.text);


    }






    // ✨ Razkritje številke


    revealNumber(

        memberData.seatNumber

    );





    await sleep(3000);






    setMessage(

        "Čas je pripravljen."

    );






    await sleep(2000);






    showButton();



}







// ==========================
// ZAŽENI UVOD
// ==========================


// počakamo, da Supabase naloži člana

setTimeout(()=>{


    intro();


},500);









// ==========================
// GUMB ZA KOLO ČASA
// ==========================



document
.getElementById("portalButton")
.onclick = async () => {


    console.log(
        "🌀 GUMB DELA"
    );


    pulsePortal();



    await sleep(2000);



    openTimeWheel();



};