import { supabase } from "../supabase/client.js";


export async function showMembership(memberFromDashboard){


const content =
document.getElementById("content");




// ==========================
// GOST - OGLED PAKETOV
// ==========================


if(!memberFromDashboard){


content.innerHTML = `


<section class="dashboard-section">


<h1>
📦 Tvoj prostor v Blinkita Multiverse
</h1>



<p>
Izberi svoj članski paket in odpri vrata svojega osebnega portala Časa.
</p>




<div class="dashboard-card">


<div class="download-icon">
✨
</div>



<h2>
Ustvari svoj Blinkita prostor
</h2>



<p>
Vsak paket odpira nove možnosti,
digitalne zaklade in osebne portale v Blinkita Multiverse.
</p>




<a
href="/index.html"
class="dashboard-button">

🌌 Oglej si članske pakete

</a>



</div>



</section>


`;


return;


}





// ==========================
// NALOŽI ČLANSTVO
// ==========================


const { data: membership, error } =
await supabase
.from("memberships")
.select("*")
.eq(
"member_id",
memberFromDashboard.id
)
.eq(
"status",
"active"
)
.maybeSingle();





if(error){


console.error(
"MEMBERSHIP LOAD ERROR:",
error
);



content.innerHTML = `


<section class="dashboard-section">


<h1>
📦 Moj paket
</h1>



<div class="dashboard-card">

Napaka pri nalaganju članstva.

</div>



</section>


`;


return;


}






// ==========================
// PRIKAŽI AKTIVNI PAKET
// ==========================


content.innerHTML = `


<section class="dashboard-section">


<h1>
📦 Moj paket
</h1>



<p>
Tvoje aktivno članstvo v Blinkita Multiverse.
</p>




<div class="dashboard-grid">





<div class="dashboard-card">


<h3>
🌟 Trenutni paket
</h3>



<h1>
${membership?.package || "Brez paketa"}
</h1>



</div>






<div class="dashboard-card">


<h3>
🔓 Dostop
</h3>



<p>
Tvoji odprti portali in digitalni zakladi se pripravljajo.
</p>



</div>





</div>





<div class="dashboard-card">


<h3>
🔢 Tvoja številka
</h3>



<p>
${memberFromDashboard.seat_number || "Še ni izbrana"}
</p>



</div>






</section>


`;



}