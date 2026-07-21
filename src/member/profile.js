import { supabase } from "../supabase/client.js";


export async function showProfile(memberFromDashboard){



const content =
document.getElementById("content");




// ==========================
// GOST - PREVIEW PROFIL
// ==========================


if(!memberFromDashboard){


console.log(
"👤 Guest profile preview"
);



content.innerHTML = `


<section class="dashboard-section">


<h1>
👤 Moj profil
</h1>



<div class="dashboard-grid">



<div class="download-card profile-main">


<div class="download-icon">
🌌
</div>



<h2>
Ustvarjalec Mogočega
</h2>



<p>
<b>✨ Paket:</b>
Še nimaš izbranega paketa
</p>



<p>
<b>🔢 Srečna številka:</b>
Še ni izbrana
</p>



<div class="profile-action">


<a
class="dashboard-button"
href="/index.html">

✨ Odpri pakete in izberi svojo srečno številko

</a>


</div>



</div>





<div class="download-card">


<div class="download-icon">
🌀
</div>



<h2>
Tvoja Osebna Koda Časa
</h2>



<h1>
✨ Ni še ustvarjena
</h1>



<p>
Tvoj rojstni pečat tradicionalnega Tzolk'in koledarja bo pripravljen, ko ustvariš svoj osebni prostor.
</p>



<a
class="dashboard-button"
href="https://mysticanaturae.github.io/osebnakodacasa/"
target="_blank">

✨ Preveri Kodo Časa

</a>



</div>



</div>





<h2>
🌟 Tvoj simbol časa
</h2>



<p>
Po pridružitvi boš lahko izbral svoj osebni simbol v Blinkita Multiverse.
</p>



<div class="dashboard-card">


✨ Čaka nate.

</div>



</section>



`;


return;


}







console.log(
"PROFILE MEMBER:",
memberFromDashboard
);






// ==========================
// NALOŽI ČLANA
// ==========================


const { data: member, error } =
await supabase
.from("members")
.select("*")
.eq("id", memberFromDashboard.id)
.single();



if(error){


console.error(
"PROFILE LOAD ERROR:",
error
);



content.innerHTML =
"Napaka pri nalaganju profila.";


return;


}






// ==========================
// NALOŽI PAKET
// ==========================


const { data: membership } =
await supabase
.from("memberships")
.select("*")
.eq("member_id", member.id)
.eq("status","active")
.maybeSingle();







// ==========================
// SREČNA ŠTEVILKA
// ==========================

console.log("MEMBER ID:", member.id);
console.log("SEAT NUMBER:", member.seat_number);



content.innerHTML = `


<section class="dashboard-section">


<h1>
👤 Moj profil
</h1>



<div class="dashboard-grid">



<div class="download-card profile-main">


<div class="download-icon">
🌌
</div>



<h2>
${member.first_name || "Ustvarjalec"}
</h2>



<p>
<b>✨ Paket:</b>
${membership?.package || "Še nimaš izbranega paketa"}
</p>



<p>
<b>🔢 Srečna številka:</b>
${member.seat_number || "Še ni izbrana"}
</p>


${
member.seat_number ? `

<div class="profile-action">


<a
class="dashboard-button"
href="/portal.html?member=${member.id}">

🌀 ZAVRTI KOLO ČASA

</a>


<p class="reward-text">

✨ Tvoja srečna številka je tvoj osebni ključ v Blinkita Multiverse.  
Samo ti lahko odpreš svojo edinstveno nagrado, ki čaka na tvojem Portalu Časa.

</p>


</div>


` : `

<div class="profile-action">

<a
class="dashboard-button"
href="/index.html">

✨ Odpri pakete in izberi svojo srečno številko

</a>

</div>

`
}

<div id="my-symbol-container">

Nalagam tvoj simbol časa...

</div>



</div>





<div class="download-card">


<div class="download-icon">
🌀
</div>


<h2>
Tvoja Osebna Koda Časa
</h2>



<h1>
${member.personal_tzolkin_code || "✨ Ni še ustvarjena"}
</h1>



<p>
Tvoj rojstni pečat tradicionalnega Tzolk'in koledarja.
</p>



<a
class="dashboard-button"
href="https://mysticanaturae.github.io/osebnakodacasa/"
target="_blank">

✨ Preveri Kodo Časa

</a>



</div>



</div>





<h2>
🌟 Izberi svoj simbol časa
</h2>



<p>
Izberi simbol, ki bo predstavljal tvoj osebni pečat v Blinkita Multiverse.
</p>



<div
class="downloads-grid"
id="symbols-container">

Nalagam simbole...


</div>



</section>



`;


// ==========================
// ELEMENTI
// ==========================


const container =
document.getElementById("symbols-container");


const mySymbolContainer =
document.getElementById("my-symbol-container");








// ==========================
// PRIKAŽI IZBRANI SIMBOL
// ==========================


async function loadMySymbol(){



const { data: currentMember, error } =
await supabase
.from("members")
.select("avatar_symbol_id")
.eq("id", member.id)
.single();




if(error){


console.error(
"LOAD SYMBOL ERROR:",
error
);


return;


}





if(!currentMember.avatar_symbol_id){


mySymbolContainer.innerHTML = `


<div class="dashboard-card">


✨ Še nimaš izbranega simbola časa.


</div>


`;


return;


}





const { data:symbol, error:symbolError } =
await supabase
.from("tzolkin_symbols")
.select("*")
.eq("id", currentMember.avatar_symbol_id)
.single();





if(symbolError){


console.error(
symbolError
);


return;


}





mySymbolContainer.innerHTML = `


<div class="dashboard-card selected-symbol">


<div class="download-icon">

✨

</div>




<h2>

${symbol.name}

</h2>



<p>

${symbol.description}

</p>



<strong>

🌟 Tvoj simbol časa

</strong>



</div>



`;



}





await loadMySymbol();









// ==========================
// NALOŽI TZOLKIN SIMBOLE
// ==========================


const { data:symbols, error:symbolError } =
await supabase
.from("tzolkin_symbols")
.select("*")
.order("name");





console.log(
"TZOLKIN SYMBOLS:",
symbols
);






if(symbolError){


container.innerHTML =
"Napaka pri nalaganju simbolov.";


return;


}








container.innerHTML =
symbols.map(symbol => `


<div
class="download-card symbol-card"
data-id="${symbol.id}">



<div class="download-icon">


${
symbol.name === "Imix" ? "🌊" :
symbol.name === "Ik’" ? "🌬️" :
symbol.name === "Ak’b’al" ? "🌙" :
symbol.name === "K’an" ? "🌱" :
symbol.name === "Chikchan" ? "🐍" :
symbol.name === "Ix" ? "🐆" :
symbol.name === "Men" ? "🦅" :
symbol.name === "Ajaw" ? "☀️" :
"✨"
}


</div>




<h3>

${symbol.name}

</h3>




<p>

${symbol.description}

</p>





<button>

✨ Izberi

</button>




</div>



`).join("");











// ==========================
// SHRANI SIMBOL
// ==========================


document
.querySelectorAll(".symbol-card button")
.forEach(button => {



button.onclick = async(e)=>{



const card =
e.target.closest(".symbol-card");



const symbolId =
card.dataset.id;




console.log(
"SELECTED SYMBOL:",
symbolId
);






const { error:updateError } =
await supabase
.from("members")
.update({

avatar_symbol_id:symbolId

})
.eq(
"id",
member.id
);





if(updateError){


console.error(
"SAVE SYMBOL ERROR:",
updateError
);


alert(
updateError.message
);


return;


}






await loadMySymbol();




alert(
"✨ Tvoj simbol časa je izbran."
);




};



});



}