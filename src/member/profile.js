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
📸 Moj profil
</h1>



<div class="dashboard-grid">



<div class="download-card profile-main">



<div class="download-icon">
📸
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

✨ Oglej si pakete članstva

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
// OSEBNA KODA ČASA
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
// AKTIVNI PAKET
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








// ==========================
// PROFIL HTML
// ==========================


content.innerHTML = `


<section class="dashboard-section">



<h1>
👤 Moj profil
</h1>





<div class="dashboard-grid">





<div class="download-card profile-main">



<div class="profile-selfie-box">



<div id="selfie-container">


${
member.selfie_url

?

`

<img
src="${member.selfie_url}"
class="profile-selfie"
alt="Moj selfie"
>

`

:

`

<div class="selfie-placeholder">

📷

</div>

`

}


</div>




<input
type="file"
id="selfie-upload"
accept="image/*"
hidden
>




<button
id="upload-selfie-button">

📷 Naloži selfie

</button>



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


// ==========================
// ELEMENTI
// ==========================


const container =
document.getElementById("symbols-container");


const mySymbolContainer =
document.getElementById("my-symbol-container");



const selfieUpload =
document.getElementById("selfie-upload");


const uploadSelfieButton =
document.getElementById("upload-selfie-button");





// ==========================
// UPLOAD SELFIE
// ==========================


if(
uploadSelfieButton &&
selfieUpload
){



// klik na lep gumb odpre skriti input

uploadSelfieButton.onclick = () => {


selfieUpload.click();


};





// ko uporabnik izbere sliko, se začne upload

selfieUpload.onchange = async()=>{


const file =
selfieUpload.files[0];



if(!file){


return;


}






const fileName =

`${member.id}/${Date.now()}-${file.name}`;







const { error:uploadError } =

await supabase
.storage
.from("selfies")
.upload(
fileName,
file,
{
upsert:true
}
);





if(uploadError){


console.error(
"SELFIE UPLOAD ERROR:",
uploadError
);



alert(
uploadError.message
);



return;


}






const { data:urlData } =

supabase
.storage
.from("selfies")
.getPublicUrl(
fileName
);







const { error:updateSelfieError } =

await supabase
.from("members")
.update({

selfie_url:
urlData.publicUrl

})
.eq(
"id",
member.id
);







if(updateSelfieError){


console.error(
"SAVE SELFIE ERROR:",
updateSelfieError
);



alert(
updateSelfieError.message
);



return;


}







alert(
"📸 Tvoj selfie je shranjen."
);





showProfile(member);





};



}









// ==========================
// PRIKAŽI IZBRANI ŠEPETALEC DUŠE
// ==========================


async function loadMyAvatar(){



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
"LOAD AVATAR ID ERROR:",
error
);



return;


}







if(!currentMember.avatar_id){



mySymbolContainer.innerHTML = `



<div class="dashboard-card">



<div class="download-icon">

✨

</div>



<p>

✨ Še nimaš izbranega Šepetalca Duše.

</p>



</div>



`;



return;


}







const { data: avatar, error:avatarError } =

await supabase
.from("blinkita_avatars")
.select("*")
.eq(
"id",
currentMember.avatar_id
)
.single();







if(avatarError){


console.error(
"LOAD AVATAR ERROR:",
avatarError
);



return;


}








mySymbolContainer.innerHTML = `



<div class="dashboard-card selected-symbol">





<div class="download-icon">

${avatar.emoji || "✨"}

</div>





<h2>

${avatar.name}

</h2>





<p>

${avatar.description}

</p>






<strong>

🌟 Tvoj Šepetalec Duše

</strong>






</div>



`;




}







try {


await loadMyAvatar();


}

catch(error){


console.error(
"LOAD MY AVATAR FAILED:",
error
);


}









// ==========================
// NALOŽI VSE ŠEPETALCE DUŠE
// ==========================



const { data:avatars, error:avatarError } =

await supabase
.from("blinkita_avatars")
.select("*")
.order("id");







console.log(

"BLINKITA AVATARS:",

avatars

);








if(avatarError){



container.innerHTML =

"Napaka pri nalaganju Šepetalcev Duše.";



return;



}








container.innerHTML =


avatars.map(avatar => `





<div

class="download-card symbol-card"

data-id="${avatar.id}">







<div class="download-icon">

${avatar.emoji || "✨"}

</div>







<h3>

${avatar.name}

</h3>







<p>

${avatar.description}

</p>







<button>

✨ Izberi

</button>







</div>





`).join("");











// ==========================
// SHRANI ŠEPETALCA DUŠE
// ==========================



document

.querySelectorAll(".symbol-card button")

.forEach(button => {



button.onclick = async(e)=>{





const card =

e.target.closest(".symbol-card");







const avatarId =

Number(card.dataset.id);







console.log(

"SELECTED AVATAR:",

avatarId

);








const { error:updateError } =

await supabase

.from("members")

.update({

avatar_id: avatarId

})

.eq(

"id",

member.id

);









if(updateError){



console.error(

"SAVE AVATAR ERROR:",

updateError

);



alert(

updateError.message

);



return;


}









await loadMyAvatar();








alert(

"✨ Tvoj Šepetalec Duše je izbran."

);






};





});





}