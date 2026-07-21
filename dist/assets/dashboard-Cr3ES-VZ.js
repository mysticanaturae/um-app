import{t as e}from"./client-BkE-LfWj.js";async function t(t){let n=document.getElementById(`content`);if(!t){console.log(`🌌 Guest portal preview`),n.innerHTML=`


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


`;return}let{data:r,error:i}=await e.from(`members`).select(`
    first_name,
    personal_tzolkin_code,
    avatar_symbol_id
`).eq(`id`,t.id).single();if(i){console.error(`PORTAL MEMBER ERROR:`,i),n.innerHTML=`Napaka pri nalaganju portala.`;return}n.innerHTML=`


<section class="dashboard-section">



<h1>
🌌 Dobrodošla, ${r.first_name||`Ustvarjalec`}
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

Današnja energija tradicionalnega Tzolk'in koledarja se pripravlja...

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



`,sessionStorage.getItem(`openRewardPortal`)&&sessionStorage.removeItem(`openRewardPortal`)}async function n(t){let n=document.getElementById(`content`);if(!t){console.log(`👤 Guest profile preview`),n.innerHTML=`


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



`;return}console.log(`PROFILE MEMBER:`,t);let{data:r,error:i}=await e.from(`members`).select(`*`).eq(`id`,t.id).single();if(i){console.error(`PROFILE LOAD ERROR:`,i),n.innerHTML=`Napaka pri nalaganju profila.`;return}let{data:a}=await e.from(`memberships`).select(`*`).eq(`member_id`,r.id).eq(`status`,`active`).maybeSingle(),{data:o}=await e.from(`seats`).select(`seat_number`).eq(`member_id`,r.id).eq(`status`,`confirmed`).maybeSingle();console.log(`MEMBER:`,r),console.log(`MEMBERSHIP:`,a),console.log(`SEAT:`,o),n.innerHTML=`


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
${r.first_name||`Ustvarjalec`}
</h2>



<p>
<b>✨ Paket:</b>
${a?.package||`Še nimaš izbranega paketa`}
</p>



<p>
<b>🔢 Srečna številka:</b>
${o?.seat_number||`Še ni izbrana`}
</p>


${!a||!o?`

<div class="profile-action">

<a
class="dashboard-button"
href="/index.html">

✨ Odpri pakete in izberi svojo srečno številko

</a>

</div>

`:``}


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
${r.personal_tzolkin_code||`✨ Ni še ustvarjena`}
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



`;let s=document.getElementById(`symbols-container`),c=document.getElementById(`my-symbol-container`);async function l(){let{data:t,error:n}=await e.from(`members`).select(`avatar_symbol_id`).eq(`id`,r.id).single();if(n){console.error(`LOAD SYMBOL ERROR:`,n);return}if(!t.avatar_symbol_id){c.innerHTML=`


<div class="dashboard-card">


✨ Še nimaš izbranega simbola časa.


</div>


`;return}let{data:i,error:a}=await e.from(`tzolkin_symbols`).select(`*`).eq(`id`,t.avatar_symbol_id).single();if(a){console.error(a);return}c.innerHTML=`


<div class="dashboard-card selected-symbol">


<div class="download-icon">

✨

</div>




<h2>

${i.name}

</h2>



<p>

${i.description}

</p>



<strong>

🌟 Tvoj simbol časa

</strong>



</div>



`}await l();let{data:u,error:d}=await e.from(`tzolkin_symbols`).select(`*`).order(`name`);if(console.log(`TZOLKIN SYMBOLS:`,u),d){s.innerHTML=`Napaka pri nalaganju simbolov.`;return}s.innerHTML=u.map(e=>`


<div
class="download-card symbol-card"
data-id="${e.id}">



<div class="download-icon">


${e.name===`Imix`?`🌊`:e.name===`Ik’`?`🌬️`:e.name===`Ak’b’al`?`🌙`:e.name===`K’an`?`🌱`:e.name===`Chikchan`?`🐍`:e.name===`Ix`?`🐆`:e.name===`Men`?`🦅`:e.name===`Ajaw`?`☀️`:`✨`}


</div>




<h3>

${e.name}

</h3>




<p>

${e.description}

</p>





<button>

✨ Izberi

</button>




</div>



`).join(``),document.querySelectorAll(`.symbol-card button`).forEach(t=>{t.onclick=async t=>{let n=t.target.closest(`.symbol-card`).dataset.id;console.log(`SELECTED SYMBOL:`,n);let{error:i}=await e.from(`members`).update({avatar_symbol_id:n}).eq(`id`,r.id);if(i){console.error(`SAVE SYMBOL ERROR:`,i),alert(i.message);return}await l(),alert(`✨ Tvoj simbol časa je izbran.`)}})}function r(){let e=document.getElementById(`content`);e.innerHTML=`


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
           Brez paketa
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


</section>


`}function i(e){let t=document.getElementById(`content`);if(!e){console.log(`🎁 Guest rewards preview`),t.innerHTML=`


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


`;return}if(console.log(`REWARDS MEMBER:`,e),e.package===`BASIC`){t.innerHTML=`


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


`;return}t.innerHTML=`


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


`,document.getElementById(`openPortal`).onclick=()=>{sessionStorage.setItem(`openRewardPortal`,`true`),window.location.href=`/portal.html`}}async function a(){let e=document.getElementById(`content`);e.innerHTML=`

    <section class="dashboard-section">

        <h1>
        ✨ Moj Multiverzum
        </h1>


        <p>
        Tukaj živijo vsi tvoji odklenjeni zakladi Blinkita Multiverse.
        </p>


        <div class="downloads-grid" id="multiverse-container">

            <div class="download-card">

                <div class="download-icon">
                🌌
                </div>


                <h3>
                Tvoj Multiverzum se prebuja
                </h3>


                <p>
                Knjige, portali, glasba, meditacije,
                nagrade in drugi digitalni zakladi
                bodo tukaj našli svoj dom.
                </p>


            </div>

        </div>


    </section>

    `}async function o(){let e=document.getElementById(`content`);e.innerHTML=`

    <section class="dashboard-section">


        <h1>
        📚 Moja knjižnica
        </h1>


        <p>
        Raziskuj celotno zakladnico Blinkita Multiverse.
        Tukaj se bodo zbirali vsi digitalni svetovi, knjige,
        portali in ustvarjalni zakladi.
        </p>



        <div class="downloads-grid" id="library-container">

            Nalagam knjižnico...

        </div>



    </section>

    `;let t=document.getElementById(`library-container`);t.innerHTML=`


        <div class="download-card">


            <div class="download-icon">
            💰
            </div>


            <h3>
            Ljubim denar in denar ljubi mene
            </h3>


            <p>
            Digitalni svet zavestnega obilja,
            ustvarjanja in transformacije.
            </p>


            <div class="dashboard-status">
            🔒 Še ni v tvojem Multiverzumu
            </div>


        </div>





        <div class="download-card">


            <div class="download-icon">
            ❤️
            </div>


            <h3>
            Popolno partnerstvo
            </h3>


            <p>
            Zbirka za odpiranje prostora
            ljubezni in harmonije.
            </p>


            <div class="dashboard-status">
            🔒 Še ni v tvojem Multiverzumu
            </div>


        </div>





        <div class="download-card">


            <div class="download-icon">
            ✨
            </div>


            <h3>
            Abracadabra
            </h3>


            <p>
            Digitalna zbirka transformacije,
            zavestnega ustvarjanja in magije življenja.
            </p>


            <div class="dashboard-status">
            🌟 Del Blinkita zakladnice
            </div>


        </div>



    `}async function s(){console.log(`🔐 Checking authentication...`);let{data:{session:t}}=await e.auth.getSession(),n=t?.user;if(n||await new Promise(t=>{let{data:r}=e.auth.onAuthStateChange((e,r)=>{console.log(`AUTH EVENT:`,e),r?.user&&(n=r.user,t())});setTimeout(()=>{r.subscription.unsubscribe(),t()},3e3)}),!n)return console.log(`ℹ️ Guest user - no login session`),null;console.log(`AUTH USER:`,n.email);let{data:r,error:i}=await e.from(`members`).select(`*`).eq(`email`,n.email).single();return i?(console.error(`❌ MEMBER NOT FOUND:`,i),null):(console.log(`✅ MEMBER FOUND:`,r),r)}console.log(`🚀 MEMBER DASHBOARD LOADED`);function c(e){let t=document.getElementById(`content`);e?t.innerHTML=`


<section class="dashboard-section">



<h1>
🌌 Dobrodošla nazaj,
${e.first_name||`Ustvarjalec`}
</h1>



<p>

Tvoj osebni prostor BLINKITA MULTIVERSE je pripravljen.

</p>



</section>



`:t.innerHTML=`


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



`}async function l(){let e=await s();console.log(`CURRENT MEMBER:`,e),e?console.log(`LOGGED MEMBER:`,e):console.log(`👋 Guest visitor - showing full preview`),c(e),document.getElementById(`portalTab`).onclick=()=>{t(e)},document.getElementById(`profileTab`).onclick=()=>{n(e)},document.getElementById(`packageTab`).onclick=()=>{r(e)},document.getElementById(`multiverseTab`).onclick=()=>{a(e)},document.getElementById(`rewardsTab`).onclick=()=>{i(e)},document.getElementById(`libraryTab`).onclick=()=>{o(e)}}l();