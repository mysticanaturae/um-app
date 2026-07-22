console.log("🚀 MEMBER DASHBOARD LOADED");


import { showPortal } from "./portal.js";
import { showProfile } from "./profile.js";
import { showMembership } from "./membership.js";
import { showRewards } from "./rewards.js";
import { showMultiverse } from "./multiverse.js";
import { showLibrary } from "./library.js";
import { getCurrentMember } from "../auth/session.js";
import { showTimePortals } from "./timePortals.js";



// ==========================
// DOBRODOŠLICA
// ==========================


function showWelcome(currentMember){


const content =
document.getElementById("content");



if(!currentMember){


content.innerHTML = `


<section class="dashboard-section">


<h1>
✨ Dobrodošli v BLINKITA MULTIVERSE
</h1>



<p>

Kjer Čas postane živ,
zavest postane ustvarjalna sila
in možnosti dobijo novo obliko.

</p>





<div class="dashboard-card">



<div class="download-icon">
🌌
</div>



<h2>
Tvoj prostor Mogočega te čaka
</h2>



<p>

Odpri vrata svojega osebnega portala,
izberi svoj članski paket in ustvari svojo
številko v Blinkita Multiverse.

</p>





<a
href="/index.html"
class="dashboard-button">

✨ Izberi svoj paket in vstopi v Multiverse

</a>



</div>





</section>



`;



}
else{


content.innerHTML = `


<section class="dashboard-section">



<h1>
🌌 Dobrodošla nazaj,
${currentMember.first_name || "Ustvarjalec"}
</h1>

<p>

Dobrodošla v svojem osebnem prostoru
<strong>BLINKITA MULTIVERSE</strong>.

Čas te je ponovno pripeljal sem.

Nekateri odpirajo aplikacije.

Ti odpiraš portale.

Tukaj vsaka številka nosi pomen.
Vsak simbol pripoveduje zgodbo.
Vsak obisk je nova možnost ustvarjanja.

Dobrodošla v prostoru, kjer Čas postane živ in Mogoče postane resnično.
</p>


<div class="dashboard-card">

<div class="download-icon">
✨
</div>

<h2>
Danes je nov začetek.
</h2>

<p>

Odpri svoj Portal.
Poslušaj svojo Kodo Časa.
Izberi svoj simbol.
Zbiraj darila.
Ustvarjaj prihodnost.

Vsak korak šteje.

</p>

</div>


</section>



`;



}



}









async function initDashboard(){



const currentMember =
await getCurrentMember();



console.log(
"CURRENT MEMBER:",
currentMember
);






if(currentMember){

    console.log(
    "LOGGED MEMBER:",
    currentMember
    );

}
else{

    console.log(
    "👋 Guest visitor - showing full preview"
    );

}







// ==========================
// ZAČETNA DOBRODOŠLICA
// ==========================


showWelcome(currentMember);








// ==========================
// NAVIGACIJA
// ==========================



document
.getElementById("portalTab")
.onclick = () => {


showPortal(currentMember);


};




document
.getElementById("timePortalTab")
.onclick = () => {

showTimePortals(currentMember);

};




document
.getElementById("profileTab")
.onclick = () => {


showProfile(currentMember);


};









document
.getElementById("packageTab")
.onclick = () => {


showMembership(currentMember);


};









document
.getElementById("multiverseTab")
.onclick = () => {


showMultiverse(currentMember);


};









document
.getElementById("rewardsTab")
.onclick = () => {


showRewards(currentMember);


};









document
.getElementById("libraryTab")
.onclick = () => {


showLibrary(currentMember);


};





}








initDashboard();