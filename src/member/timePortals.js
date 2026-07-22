import { supabase } from "../supabase/client.js";



export async function showTimePortals(member){


const content =
document.getElementById("content");





// ==========================
// GOST
// ==========================


if(!member){


content.innerHTML = `


<section class="dashboard-section">


<h1>
🌌 Šepetanje Časa
</h1>


<p>

Šepetanje Časa je na voljo članom Blinkita Multiverse.

</p>



<a
href="/index.html"
class="dashboard-button">

✨ Odkrij članske pakete

</a>



</section>


`;



return;


}







// ==========================
// POIŠČI ZADNJI AKTIVIRAN PORTAL
// ==========================



const { data: progress, error:progressError } =

await supabase
.from("member_time_portals")
.select("*")
.eq(
"member_id",
member.id
)
.order(
"portal_number",
{
ascending:false
}
)
.limit(1);






if(progressError){


console.error(
"TIME PORTAL PROGRESS ERROR:",
progressError
);



content.innerHTML =
"Napaka pri nalaganju poti Časa.";



return;


}







let nextPortal = 1;





if(
progress &&
progress.length > 0
){


nextPortal =
progress[0].portal_number + 1;


}







// ==========================
// PREVERI 99
// ==========================



if(nextPortal > 99){



content.innerHTML = `


<section class="dashboard-section">


<h1>
🌌 Portal 100
</h1>


<div class="dashboard-card">


<h2>
Jaz sem Čas.
</h2>


<p>

Ne iščeš več vrat.

Ti si postala vrata.

</p>


<h2>
✨ Poseben dar čaka nate.
</h2>



</div>


</section>


`;



return;


}








// ==========================
// NALOŽI PORTAL
// ==========================

console.log(
"LOOKING FOR PORTAL NUMBER:",
nextPortal
);

const { data:portal, error:portalError } =

await supabase
.from("time_portals")
.select("*")
.eq(
"portal_number",
nextPortal
)
.maybeSingle();







if(portalError){


console.error(
"TIME PORTAL LOAD ERROR:",
portalError
);



content.innerHTML =
"Napaka pri odpiranju Šepetanja Časa.";


return;


}







console.log(
"CURRENT TIME PORTAL:",
portal
);








// ==========================
// PRIKAZ
// ==========================



content.innerHTML = `



<section class="dashboard-section">



<h1>
🌌 Šepetanje Časa
</h1>




<h2>

Portal ${portal.portal_number} / 99

</h2>





<div class="dashboard-card">



<h2>

Jaz sem Čas.

</h2>




<p>

${portal.message.replace(/\n/g,"<br>")}

</p>



</div>







<h2>

Kako danes odgovarjaš Času?

</h2>





<div
class="answer-buttons">



<button data-answer="VIDIM">

👁 VIDIM

</button>



<button data-answer="SLIŠIM">

👂 SLIŠIM

</button>



<button data-answer="ČUTIM">

💙 ČUTIM

</button>



<button data-answer="AKTIVIRAM">

✨ AKTIVIRAM

</button>



<button data-answer="LJUBIM">

❤️ LJUBIM

</button>



<button data-answer="ZAVEDAM">

🌌 ZAVEDAM

</button>



<button data-answer="SPREJEMAM">

🙏 SPREJEMAM

</button>



</div>







<button

id="activatePortalButton"

class="dashboard-button">


✨ Sprejmem šepet


</button>






</section>



`;







}