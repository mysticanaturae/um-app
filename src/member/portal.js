import { supabase } from "../supabase/client.js";
import { getTzolkinData } from "../time/tzolkin.js";



export async function showPortal(memberFromDashboard){



const content =
document.getElementById("content");




// ==========================
// GOST - DOBRODOŠLICA
// ==========================


if(!memberFromDashboard){


console.log(
"🌌 Guest portal preview"
);



content.innerHTML = `


<section class="dashboard-section">



<h1>
✨ Dobrodošli v Blinkita Multiverse
</h1>



<p>

Tukaj se začne tvoje potovanje skozi

<strong>
Živi Čas
</strong>

</p>





<div class="dashboard-grid">





<div class="dashboard-card">


<div class="download-icon">
🌞
</div>



<h2>
Današnji Portal Časa
</h2>



<p>

Današnja energija tradicionalnega Tzolk'in koledarja se pripravlja...

</p>



<p>

Pridruži se Blinkita Multiverse in odpri svoj osebni portal.

</p>



</div>







<div class="dashboard-card">


<div class="download-icon">
🎁
</div>



<h2>
Današnje presenečenje
</h2>



<p>

Tvoja skrivnost čaka, da se odpre.

</p>



</div>





</div>





</section>


`;



return;


}








// ==========================
// ČLAN
// ==========================


const { data: member, error } =
await supabase
.from("members")
.select(`
    first_name,
    personal_tzolkin_code,
    avatar_symbol_id
`)
.eq("id", memberFromDashboard.id)
.single();






if(error){


console.error(
"PORTAL MEMBER ERROR:",
error
);


content.innerHTML =
"Napaka pri nalaganju portala.";


return;


}







// ==========================
// DNEVNA KODA ČASA
// ==========================


const today =
new Date()
.toISOString()
.split("T")[0];



const todayTzolkin =
getTzolkinData(today);



console.log(
"DNEVNA KODA ČASA:",
todayTzolkin
);






// slike

const numberImage =
`/images/maya-simboli/stevilo${todayTzolkin.number}.jpg`;



const signImage =
`/images/maya-simboli/${todayTzolkin.signImage}`;








content.innerHTML = `


<section class="dashboard-section">



<h1>
🌌 Dobrodošla, ${member.first_name || "Ustvarjalec"}
</h1>





<p>

Tvoj čas ponovno teče skozi

<strong>
BLINKITA MULTIVERSE
</strong>

</p>







<div class="dashboard-grid">







<div class="dashboard-card">


<div class="download-icon">
🌞
</div>



<h2>
Današnji Portal Časa
</h2>




<p>

Današnja energija tradicionalnega Tzolk'in koledarja.

</p>







<div class="dashboard-card">


<h3>
✨ Današnja Koda Časa
</h3>







<p>
🌞 KIN:

<strong>
${todayTzolkin.kin}
</strong>

</p>






<h2>
🌿 ${todayTzolkin.number} ${todayTzolkin.signSlovenian}
</h2>







<img
src="${numberImage}"
class="tzolkin-symbol"
alt="Število ${todayTzolkin.number}"
>





<p>

🔢 Število ${todayTzolkin.number}

<br>

${todayTzolkin.numberMeaning}

</p>







<img
src="${signImage}"
class="tzolkin-symbol"
alt="${todayTzolkin.signSlovenian}"
>






<p>

🌿 ${todayTzolkin.signSlovenian}
(${todayTzolkin.signMaya})

<br>

${todayTzolkin.meaning}

</p>








<p>

✨ Sporočilo Današnje Kode Časa se pripravlja...

</p>





</div>



</div>









<div class="dashboard-card">


<div class="download-icon">
🎁
</div>



<h2>
Današnje presenečenje
</h2>



<p>

Tvoja skrivnost čaka, da se odpre.

</p>



</div>







</div>





</section>



`;









const rewardMode =
sessionStorage.getItem("openRewardPortal");



if(rewardMode){


sessionStorage.removeItem(
"openRewardPortal"
);


}



}