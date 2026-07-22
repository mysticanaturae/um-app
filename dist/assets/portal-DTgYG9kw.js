import"./modulepreload-polyfill-Dezn_h7o.js";import{t as e}from"./client-BkE-LfWj.js";var t=document.getElementById(`stars`),n=document.getElementById(`nebula`),r=document.getElementById(`particles`);function i(){for(let e=0;e<180;e++){let e=document.createElement(`span`);e.className=`star`,e.style.left=Math.random()*100+`%`,e.style.top=Math.random()*100+`%`,e.style.animationDelay=Math.random()*5+`s`,e.style.opacity=Math.random(),t.appendChild(e)}}function a(){for(let e=0;e<60;e++){let e=document.createElement(`span`);e.className=`particle`,e.style.left=Math.random()*100+`%`,e.style.top=Math.random()*100+`%`,e.style.animationDelay=Math.random()*8+`s`,r.appendChild(e)}}function o(){document.addEventListener(`mousemove`,e=>{let r=(e.clientX/window.innerWidth-.5)*20,i=(e.clientY/window.innerHeight-.5)*20;t.style.transform=`translate(${r}px, ${i}px)`,n.style.transform=`translate(${r/2}px, ${i/2}px)`})}function s(e){return[{text:`Dobrodošel, dobrodošla v Portalu Časa.`,delay:1e3},{text:`Portal zaznava tvojo prisotnost...`,delay:2500},{text:`${e.name}, danes odpiraš eno izmed 99 poti.`,delay:2500},{text:`Tvoja srečna številka je ...`,delay:3e3}]}var c=null;function l(e){c=e}function u(e){let t=document.getElementById(`message`);t.innerHTML=e}function d(){let e=document.getElementById(`portalButton`);e.style.display=`inline-block`}var f=document.getElementById(`portalGlow`),p=document.getElementById(`content`);function m(){f.classList.add(`awake`),p.classList.add(`visible`)}function h(){f.classList.add(`pulse`),setTimeout(()=>{f.classList.remove(`pulse`)},2e3)}async function g(t,n){let{data:r}=await e.from(`reward_claims`).select(`
            *,
            rewards(*)
        `).eq(`member_id`,t).maybeSingle();if(r)return r.rewards;let{data:i,error:a}=await e.from(`rewards`).select(`*`).eq(`available`,!0);if(a)return console.error(a),null;if(!i.length)return alert(`Vse nagrade so bile že razdeljene.`),null;let o=i[Math.floor(Math.random()*i.length)],{error:s}=await e.from(`reward_claims`).insert({member_id:t,seat_number:n,reward_id:o.id});return s?(console.error(s),null):(await e.from(`rewards`).update({available:!1}).eq(`id`,o.id),o)}async function _(){let e=document.getElementById(`portalArea`);e.innerHTML=`

        <div id="wheelScreen">

            <h2>KOLO ČASA</h2>

            <div id="wheel">

                🌀

            </div>

            <button id="spinButton">

                ZAVRTI KOLO

            </button>

        </div>

    `,document.getElementById(`spinButton`).onclick=v}async function v(){document.getElementById(`wheel`).classList.add(`spinning`),await new Promise(e=>setTimeout(e,4e3)),y(await g(c.id,c.seatNumber))}function y(e){let t=document.getElementById(`portalArea`);t.innerHTML=`

        <div id="rewardCard">

            <h2>

                🎁 Portal ti je razkril darilo.

            </h2>

            <h3>

                ${e.reward_name}

            </h3>

            <p>

                ${e.description}

            </p>

            <button id="claimReward">

                PREVZEMI DARILO

            </button>

            <small>

                To presenečenje je bilo odstranjeno
                iz Kolesa Časa.

                Nihče drug ga ne bo prejel.

            </small>

        </div>

    `}function b(e){let t=document.getElementById(`timeNumber`);t.innerHTML=e,t.classList.add(`active`)}var x=new URLSearchParams(window.location.search).get(`member`);if(x){let{data:t,error:n}=await e.from(`members`).select(`
        first_name,
        seat_number
    `).eq(`id`,x).single();n?console.error(`❌ Portal member error:`,n):(console.log(`🌌 Portal member:`,t),l({name:t.first_name,seatNumber:t.seat_number}),console.log(`🌀 PORTAL DATA SET:`,t.seat_number))}i(),a(),o(),m();function S(e){return new Promise(t=>setTimeout(t,e))}async function C(){console.log(`🌌 CURRENT MEMBER DATA:`,c);let e=s(c);for(let t of e)await S(t.delay),u(t.text);b(c.seatNumber),await S(3e3),u(`Čas je pripravljen.`),await S(2e3),d()}setTimeout(()=>{C()},500),document.getElementById(`portalButton`).onclick=async()=>{console.log(`🌀 GUMB DELA`),h(),await S(2e3),_()};