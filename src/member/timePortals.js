
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
// PREVERI ALI JE DANAŠNJI ŠEPET ŽE AKTIVIRAN
// ==========================



const startOfDay = new Date();

startOfDay.setHours(
0,
0,
0,
0
);



const endOfDay = new Date();

endOfDay.setHours(
23,
59,
59,
999
);




const {

data: todayActivation,

error: todayError

} = await supabase

.from("member_time_portals")

.select("*")

.eq(
"member_id",
member.id
)

.gte(
"activated_at",
startOfDay.toISOString()
)

.lte(
"activated_at",
endOfDay.toISOString()
)

.limit(1);





console.log(
"MEMBER ID CHECK:",
member.id
);



console.log(
"TODAY ACTIVATION RESULT:",
todayActivation
);



console.log(
"TODAY ERROR:",
todayError
);




if(todayError){


console.error(
"DAILY PORTAL CHECK ERROR:",
todayError
);


}





if(
todayActivation &&
todayActivation.length > 0
){



const activatedPortal =
todayActivation[0].portal_number;



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

Nov dan prinaša nov portal.

</p>



<h2>
✨ Šepet ${activatedPortal} / 99
</h2>



</div>



</section>



`;



return;


}








// ==========================
// POIŠČI ZADNJI AKTIVIRAN PORTAL
// ==========================



const {

data: progress,

error: progressError

} = await supabase

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
// NALOŽI NASLEDNJI PORTAL
// ==========================



console.log(
"LOOKING FOR PORTAL NUMBER:",
nextPortal
);





const {

data: portal,

error: portalError

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
"TIME PORTAL LOAD ERROR:",
portalError
);



content.innerHTML =
"Napaka pri odpiranju Šepetanja Časa.";



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



<p>
Portal se pripravlja nate.
</p>



</div>



</section>



`;



return;


}






console.log(
"CURRENT TIME PORTAL:",
portal
);





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



<div class="portal-action">


<button
id="activatePortalButton"
class="dashboard-button">

✨ Sprejmem šepet

</button>


</div>



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
// SHRANI ODGOVORE
// ==========================



for(
const answer of selectedAnswers
){



const {

error: answerError

} = await supabase

.from("portal_answers")

.insert({

member_id: member.id,

portal_number:
portal.portal_number,

answer: answer,

intention:
intention || null

});






if(answerError){


console.error(
"PORTAL ANSWER ERROR:",
answerError
);



}

}



 



// ==========================
// SHRANI AKTIVACIJO PORTALA
// ==========================



const {

error: portalSaveError

} = await supabase

.from("member_time_portals")

.insert({

member_id: member.id,

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




<h2>
✨ Šepet ${portal.portal_number} / 99 je aktiviran.
</h2>




<p class="highlight-text">

Jutri te čaka nov šepet.

</p>



</div>



</section>



`;



};



}