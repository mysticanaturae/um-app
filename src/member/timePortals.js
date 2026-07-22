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
// PREVERI ZADNJO AKTIVACIJO
// ==========================


const {

data:lastActivation,

error:lastError

} = await supabase

.from("member_time_portals")

.select("*")

.eq(
"member_id",
member.id
)

.order(
"activated_at",
{
ascending:false
}
)

.limit(1);



console.log(
"LAST ACTIVATION:",
lastActivation
);

console.log(
"MEMBER USED FOR CHECK:",
member.id
);


console.log(
"FULL LAST ACTIVATION JSON:",
JSON.stringify(lastActivation, null, 2)
);

if(lastError){


console.error(
"LAST ACTIVATION ERROR:",
lastError
);


}





// ==========================
// ČE JE DANES ŽE AKTIVIRAL
// ==========================


if(
lastActivation &&
lastActivation.length > 0
){


const activatedAt =
new Date(
lastActivation[0].activated_at
);



const now =
new Date();



const sameDay =

activatedAt.getFullYear()
===
now.getFullYear()

&&

activatedAt.getMonth()
===
now.getMonth()

&&

activatedAt.getDate()
===
now.getDate();




if(sameDay){



content.innerHTML = `


<section class="dashboard-section">



<h1>
🌌 Današnji šepet je že sprejet.
</h1>



<div class="dashboard-card">



<h2>
Jaz sem Čas.
</h2>



<p>

Današnjega šepeta ne odpiram dvakrat.

</p>



<p>

Tvoj odgovor je že zapisan
v tvoji poti.

</p>



<p class="highlight-text">

Vrni se jutri.

Nov dan prinaša nov šepet.

</p>



<h2>

✨ Šepet ${lastActivation[0].portal_number} / 99

</h2>



</div>



</section>


`;



return;


}


}





// ==========================
// DOLOČI NASLEDNJI PORTAL
// ==========================



let nextPortal = 1;



if(
lastActivation &&
lastActivation.length > 0
){


nextPortal =
lastActivation[0].portal_number + 1;


}







// ==========================
// PORTAL 100
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

<br><br>

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
"LOADING PORTAL:",
nextPortal
);



const {

data:portal,

error:portalError

} = await supabase

.from("time_portals")

.select("*")

.eq(
"portal_number",
nextPortal
)

.maybeSingle();





if(portalError){


console.error(
"PORTAL ERROR:",
portalError
);


content.innerHTML =
"Napaka pri odpiranju portala.";


return;


}




if(!portal){


content.innerHTML = `


<section class="dashboard-section">


<h1>
🌌 Šepetanje Časa
</h1>


<div class="dashboard-card">


<h2>
Čas danes še tiho čaka.
</h2>


</div>


</section>


`;


return;


}







// ==========================
// PRIKAZ PORTALA
// ==========================


content.innerHTML = `


<section class="dashboard-section">


<h1>
🌌 Šepetanje Časa
</h1>



<h2>
Šepet Časa ${portal.portal_number} / 99
</h2>




<div class="dashboard-card">


<p>

${portal.message.replace(/\n/g,"<br>")}

</p>


</div>




<div class="answer-section">


<h2>
Kako danes odgovarjaš Času?
</h2>



<div class="answer-buttons">


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


<textarea
id="timeIntention"
class="time-intention"
placeholder="Kaj danes zašepetaš Času? ✨"
></textarea>



<button
id="activatePortalButton"
class="dashboard-button">

✨ Sprejmem šepet

</button>



</div>


</section>


`;


// ==========================
// IZBIRA ODGOVOROV
// ==========================


const selectedAnswers = [];



document
.querySelectorAll(".answer-buttons button")
.forEach(button => {



button.onclick = () => {


const answer =
button.dataset.answer;



if(
selectedAnswers.includes(answer)
){


const index =
selectedAnswers.indexOf(answer);


selectedAnswers.splice(
index,
1
);


button.classList.remove(
"selected"
);


}
else{


selectedAnswers.push(answer);


button.classList.add(
"selected"
);


}



console.log(
"ODGOVORI ČASU:",
selectedAnswers
);



};


});






// ==========================
// AKTIVACIJA ŠEPETA
// ==========================


const activateButton =

document.getElementById(
"activatePortalButton"
);





if(!activateButton){

return;

}





activateButton.onclick = async()=>{



if(
selectedAnswers.length === 0
){


alert(
"✨ Najprej izberi svoj odgovor Času."
);


return;


}





const intention =

document
.getElementById(
"timeIntention"
)
.value
.trim();






// ==========================
// ŠE ENKRAT PREVERI
// (ZA VARNOST)
// ==========================


const {

data:alreadyActivated

} = await supabase

.from("member_time_portals")

.select("*")

.eq(
"member_id",
member.id
)

.order(
"activated_at",
{
ascending:false
}
)

.limit(1);





if(
alreadyActivated &&
alreadyActivated.length > 0
){


const last =
new Date(
alreadyActivated[0].activated_at
);


const now =
new Date();



if(
last.getFullYear()
===
now.getFullYear()

&&

last.getMonth()
===
now.getMonth()

&&

last.getDate()
===
now.getDate()

){


alert(
"🌌 Današnji šepet je že sprejet. Vrni se jutri."
);


return;


}


}






// ==========================
// SHRANI ODGOVORE
// ==========================



for(
const answer of selectedAnswers
){



const {

error:answerError

} = await supabase

.from("portal_answers")

.insert({


member_id:

member.id,


portal_number:

portal.portal_number,


answer:

answer,


intention:

intention || null


});






if(answerError){


console.error(
"PORTAL ANSWER ERROR:",
answerError
);


alert(
answerError.message
);


return;


}


}






// ==========================
// SHRANI AKTIVACIJO
// ==========================



const {

error:portalSaveError

} = await supabase

.from("member_time_portals")

.insert({


member_id:

member.id,


portal_number:

portal.portal_number,


activated_at:

new Date()


});







if(portalSaveError){


console.error(
"PORTAL ACTIVATION ERROR:",
portalSaveError
);


alert(
portalSaveError.message
);


return;


}






// ==========================
// POTRDITEV
// ==========================


content.innerHTML = `


<section class="dashboard-section">



<h1>
🌌 Čas te je slišal.
</h1>



<div class="dashboard-card">



<h2>
Jaz sem Čas.
</h2>



<p>

Tvoj odgovor je postal del tvoje poti.

</p>



<p>

Tvoja namera je bila izrečena.

</p>



<p class="highlight-text">

✨ Šepet ${portal.portal_number} / 99 je aktiviran.

</p>



<p>

Jutri te čaka nov šepet.

</p>



</div>



</section>


`;



};



}
