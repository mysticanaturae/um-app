export function showRewards(memberFromDashboard){



const content =
document.getElementById("content");




// ==========================
// GOST - PREVIEW
// ==========================


if(!memberFromDashboard){


console.log(
"🎁 Guest rewards preview"
);



content.innerHTML = `


<section class="dashboard-section">


<h1>
🎁 Moje nagrade
</h1>



<p>
Tvoje možnosti in presenečenja v Blinkita Multiverse.
</p>




<div class="dashboard-card">


<div class="download-icon">
🔒
</div>



<h2>
Spirala Časa čaka nate
</h2>



<p>

Ko postaneš del Blinkita Multiverse,
se odprejo tvoje možnosti za nagrade,
presenečenja in Kolo Časa.

</p>




<a
class="dashboard-button"
href="/index.html">

✨ Izberi svoje članstvo

</a>



</div>



</section>


`;



return;


}







console.log(
"REWARDS MEMBER:",
memberFromDashboard
);




// ==========================
// BASIC
// ==========================


if(
memberFromDashboard.package === "BASIC"
){


content.innerHTML = `


<section class="dashboard-section">


<h1>
🎁 Moje nagrade
</h1>



<p>
Tvoje možnosti in presenečenja v Blinkita Multiverse.
</p>




<div class="dashboard-card">


<div class="download-icon">
🔒
</div>



<h2>
Spirala Časa je zaklenjena
</h2>




<p>

Nadgradi svoje članstvo v ADVANCED,
PREMIUM ali VIP in odpri možnost
vrtenja Kolesa Časa.

</p>




<button 
class="dashboard-button">

✨ Nadgradi članstvo

</button>



</div>



</section>


`;



return;


}






// ==========================
// OSTALI ČLANI
// ==========================


content.innerHTML = `


<section class="dashboard-section">


<h1>
🎁 Moje nagrade
</h1>



<p>
Tvoje srečne možnosti čakajo nate.
</p>




<div class="dashboard-card">


<div class="download-icon">
🌀
</div>



<h2>
Spirala Časa
</h2>




<p>

Tvoja srečna številka je odprla vrata možnosti.

</p>




<button 
id="openPortal"
class="dashboard-button">

🌀 ZAVRTI SPIRALO ČASA

</button>



</div>



</section>


`;







document
.getElementById("openPortal")
.onclick = () => {



sessionStorage.setItem(
"openRewardPortal",
"true"
);



window.location.href="/portal.html";



};



}