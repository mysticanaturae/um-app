import { supabase } from "../supabase/client.js";
import { getTzolkinData } from "../time/tzolkin.js";



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



</div>



</div>





<h2>
🌟 Tvoj simbol časa
</h2>



<p>
Po pridružitvi bo tvoj osebni simbol časa odprl svojo zgodbo.
</p>



<div class="dashboard-card">


✨ Čaka nate.


</div>



</section>



`;



return;


}









// ==========================
// NALOŽI ČLANA
// ==========================


const { data: member, error } =
await supabase
.from("members")
.select("*")
.eq(
"id",
memberFromDashboard.id
)
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







console.log(
"PROFILE MEMBER:",
member
);





// ==========================
// IZRAČUN OSEBNE KODE ČASA
// ==========================


const personalTzolkin =
getTzolkinData(
member.birth_date
);



console.log(
"OSEBNA KODA ČASA:",
personalTzolkin
);





const personalNumberImage =

`/images/Slike-Maya/stevilo${personalTzolkin.number}.png`;





const personalSignImage =

`/images/Slike-Maya/${personalTzolkin.signImage}`;








// ==========================
// NALOŽI PAKET
// ==========================


const { data: membership } =
await supabase
.from("memberships")
.select("*")
.eq(
"member_id",
member.id
)
.eq(
"status",
"active"
)
.maybeSingle();









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





<div id="my-symbol-container">

Nalagam tvoj simbol časa...

</div>





</div>









<div class="download-card">


<div class="download-icon">
🌀
</div>



<h2>
✨ Tvoja Osebna Koda Časa
</h2>





<h1>
KIN ${personalTzolkin.kin}
</h1>





<img
src="${personalNumberImage}"
class="tzolkin-symbol"
alt="Število ${personalTzolkin.number}"
>




<h2>
🔢 ${personalTzolkin.number}
</h2>




<p>
${personalTzolkin.numberMeaning}
</p>







<img
src="${personalSignImage}"
class="tzolkin-symbol"
alt="${personalTzolkin.signSlovenian}"
>





<h2>
🌿 ${personalTzolkin.signSlovenian}
<br>
${personalTzolkin.signMaya}
</h2>




<p>
${personalTzolkin.meaning}
</p>





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





// konec 1. dela

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
.select("avatar_id")
.eq(
"id",
member.id
)
.single();




if(error){


console.error(
"LOAD SYMBOL ERROR:",
error
);


return;


}







if(!currentMember.avatar_id){


mySymbolContainer.innerHTML = `


<div class="dashboard-card">


✨ Še nimaš izbranega osebnega simbola časa.


</div>


`;



return;


}







const { data:symbol, error:symbolError } =
await supabase
.from("tzolkin_symbols")
.select("*")
.eq(
"id",
currentMember.avatar_id
)
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
🌟 Tvoj izbrani simbol časa
</strong>




</div>


`;



}







await loadMySymbol();









// ==========================
// NALOŽI TZOLKIN SIMBOLE
// ==========================


const { data:symbol, error:symbolError } =
await supabase
.from("blinkita_avatars")
.select("*")
.eq(
"id",
currentMember.avatar_id
)
.single();





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





<div class="symbol-image-box">

<img
src="${
symbol.name === "Imix" ? "/images/Slike-Maya/maya-imix-rdeca.png" :
symbol.name === "Ik'" ? "/images/Slike-Maya/maya-ik-bela.png" :
symbol.name === "Ak'b'al" ? "/images/Slike-Maya/maya-akbal-modra.png" :
symbol.name === "K'an" ? "/images/Slike-Maya/maya-kan-rumena.png" :
symbol.name === "Chikchan" ? "/images/Slike-Maya/maya-chicchan-rdeca.png" :
symbol.name === "Kimi" ? "/images/Slike-Maya/maya-cimi-bela.png" :
symbol.name === "Manik'" ? "/images/Slike-Maya/maya-manik-modra.png" :
symbol.name === "Lamat" ? "/images/Slike-Maya/maya-lamat-rumena.png" :
symbol.name === "Muluc" ? "/images/Slike-Maya/maya-muluc-rdeca.png" :
symbol.name === "Oc" ? "/images/Slike-Maya/maya-oc-bela.png" :
symbol.name === "Chuen" ? "/images/Slike-Maya/maya-chuen-modra.png" :
symbol.name === "Eb" ? "/images/Slike-Maya/maya-eb-rumena.png" :
symbol.name === "Ben" ? "/images/Slike-Maya/maya-ben-rdeca.png" :
symbol.name === "Ix" ? "/images/Slike-Maya/maya-ix-bela.png" :
symbol.name === "Men" ? "/images/Slike-Maya/maya-men-modra.png" :
symbol.name === "Cib" ? "/images/Slike-Maya/maya-cib-rumena.png" :
symbol.name === "Caban" ? "/images/Slike-Maya/maya-caban-rdeca.png" :
symbol.name === "Etz'nab" ? "/images/Slike-Maya/maya-etznab-belo.png" :
symbol.name === "Cauac" ? "/images/Slike-Maya/maya-cauac-modra.png" :
symbol.name === "Ahau" ? "/images/Slike-Maya/maya-ahau-rumena.png" :
""
}"
class="tzolkin-symbol"
alt="${symbol.name}"
>


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
avatar_id:symbolId
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