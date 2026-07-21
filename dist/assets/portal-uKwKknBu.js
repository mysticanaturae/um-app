import"./modulepreload-polyfill-Dezn_h7o.js";import{t as e}from"./client-BkE-LfWj.js";var t=document.getElementById(`stars`),n=document.getElementById(`nebula`),r=document.getElementById(`particles`);function i(){for(let e=0;e<180;e++){let e=document.createElement(`span`);e.className=`star`,e.style.left=Math.random()*100+`%`,e.style.top=Math.random()*100+`%`,e.style.animationDelay=Math.random()*5+`s`,e.style.opacity=Math.random(),t.appendChild(e)}}function a(){for(let e=0;e<60;e++){let e=document.createElement(`span`);e.className=`particle`,e.style.left=Math.random()*100+`%`,e.style.top=Math.random()*100+`%`,e.style.animationDelay=Math.random()*8+`s`,r.appendChild(e)}}function o(){document.addEventListener(`mousemove`,e=>{let r=(e.clientX/window.innerWidth-.5)*20,i=(e.clientY/window.innerHeight-.5)*20;t.style.transform=`translate(${r}px, ${i}px)`,n.style.transform=`translate(${r/2}px, ${i/2}px)`})}function s(e){return[{text:`Dobrodošel, dobrodošla v Portalu Časa.`,delay:1e3},{text:`Portal zaznava tvojo prisotnost...`,delay:2500},{text:`${e.name}, danes odpiraš eno izmed 99 poti.`,delay:2500},{text:`Tvoja srečna številka je ...`,delay:3e3}]}var c=null;function l(e){let t=document.getElementById(`message`);t.innerHTML=e}function u(){let e=document.getElementById(`portalButton`);e.style.display=`inline-block`}var d=document.getElementById(`portalGlow`),f=document.getElementById(`content`);function p(){d.classList.add(`awake`),f.classList.add(`visible`)}function m(){d.classList.add(`pulse`),setTimeout(()=>{d.classList.remove(`pulse`)},2e3)}async function h(t,n){let{data:r}=await e.from(`reward_claims`).select(`
            *,
            rewards(*)
        `).eq(`member_id`,t).maybeSingle();if(r)return r.rewards;let{data:i,error:a}=await e.from(`rewards`).select(`*`).eq(`available`,!0);if(a)return console.error(a),null;if(!i.length)return alert(`Vse nagrade so bile že razdeljene.`),null;let o=i[Math.floor(Math.random()*i.length)],{error:s}=await e.from(`reward_claims`).insert({member_id:t,seat_number:n,reward_id:o.id});return s?(console.error(s),null):(await e.from(`rewards`).update({available:!1}).eq(`id`,o.id),o)}async function g(){let e=document.getElementById(`portalArea`);e.innerHTML=`

        <div id="wheelScreen">

            <h2>KOLO ČASA</h2>

            <div id="wheel">

                🌀

            </div>

            <button id="spinButton">

                ZAVRTI KOLO

            </button>

        </div>

    `,document.getElementById(`spinButton`).onclick=_}async function _(){document.getElementById(`wheel`).classList.add(`spinning`),await new Promise(e=>setTimeout(e,4e3)),v(await h(c.id,c.seatNumber))}function v(e){let t=document.getElementById(`portalArea`);t.innerHTML=`

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

    `}function y(e){let t=document.getElementById(`timeNumber`);t.innerHTML=e,t.classList.add(`active`)}i(),a(),o(),p();function b(e){return new Promise(t=>setTimeout(t,e))}async function x(){let e=s(c);console.log(c);for(let t of e)await b(t.delay),l(t.text);y(c.seatNumber),await b(3e3),l(`Čas je pripravljen.`),await b(2e3),u()}x(),document.getElementById(`portalButton`).onclick=async()=>{console.log(`🌀 GUMB DELA`),m(),await b(2e3),g()};