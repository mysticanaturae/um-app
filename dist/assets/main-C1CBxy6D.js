import"./modulepreload-polyfill-Dezn_h7o.js";import{t as e}from"./client-BkE-LfWj.js";async function t(){let{error:t}=await e.from(`visitors`).insert([{}]);if(t){console.error(`❌ Visitor registration error:`,t);return}console.log(`🌎 Visitor registered`)}async function n(){let{count:t,error:n}=await e.from(`visitors`).select(`*`,{count:`exact`,head:!0});if(n){console.error(`❌ Visitor count error:`,n);return}let r=document.getElementById(`progress-visitors`);r&&(r.innerHTML=`👣 Obiskovalcev: ${t}`)}async function r(){await t(),await n(),console.log(`🪑 Seats portal activated`);let{data:r,error:i}=await e.from(`seats`).select(`*`).order(`seat_number`);if(i){console.error(`❌ Error loading seats:`,i);return}console.log(`🌈 Seats from Supabase:`,r);let{data:a,error:o}=await e.from(`payments`).select(`*`).eq(`payment_status`,`paid`);o&&console.error(`❌ Error loading payments:`,o);let s=r.filter(e=>e.status===`confirmed`),c=r.filter(e=>e.status===`pending`),l=document.getElementById(`progress-pending`),u=document.getElementById(`progress-confirmed`);l&&(l.innerHTML=`🌟 Rezerviranih številk: ${c.length}`),u&&(u.innerHTML=`🔒 Aktivnih številk: ${s.length}`);let d=s.length+c.length,f=r.length-d,p=0;a?.forEach(e=>{p+=Number(e.amount)});let m=document.getElementById(`progress-members`),h=document.getElementById(`progress-money`),g=document.getElementById(`progress-free`);m&&(m.innerHTML=`${d} / 99 ustvarjalcev`),h&&(h.innerHTML=`💚 Zbranih: ${p} €`);let _=Math.min(p/1e4*100,100),v=document.getElementById(`money-progress-bar`),y=document.getElementById(`progress-percentage`);v&&(v.style.width=`${_}%`),y&&(y.innerHTML=`🌱 ${_.toFixed(2)} %`),g&&(g.innerHTML=`✨ Prostih številk: ${f}`);let b=document.getElementById(`seat-grid`);if(!b){console.error(`❌ seat-grid not found`);return}b.innerHTML=``,r.forEach(e=>{let t=document.createElement(`div`);t.className=`seat-circle`;let n=e.status===`confirmed`,r=e.status===`pending`;n?t.classList.add(`confirmed-seat`):r?t.classList.add(`pending-seat`):t.classList.add(`available-seat`),t.innerHTML=`


            <div class="circle">


                ${n?`🔒`:``}


                ${r?`✨`:``}


                <span>
                    ${e.seat_number}
                </span>


            </div>


        `,t.onclick=()=>{if(n||r){alert(`✨ Ta srečna številka je trenutno rezervirana ali že zasedena. Prosimo, izberi drugo številko.`);return}let i=document.getElementById(`seatNumber`),a=document.getElementById(`package`),o=a?a.value:``;o.includes(`ADVANCED`)||o.includes(`PREMIUM`)||o.includes(`VIP`)?(i&&(i.value=e.seat_number,console.log(`🌀 Selected seat:`,e.seat_number)),document.querySelectorAll(`.seat-circle`).forEach(e=>{e.classList.remove(`selected`)}),t.classList.add(`selected`),document.querySelector(`.reservation`)?.scrollIntoView({behavior:`smooth`})):alert(`🌱 Paket BASIC te vključuje v Blinkita krog. Srečna številka pa je vključena v pakete ADVANCED, PREMIUM in VIP.`)},b.appendChild(t)}),console.log(`✨ Seats portal rendered`)}async function i(){console.log(`🌈 Blinkita Universe Portal activated`),await r(),console.log(`✨ Portal ready`)}console.log(`🌈 Blinkita Multiverse is alive`),i();var a=document.getElementById(`country`);a&&`Slovenija.Belize.Hrvaška.Avstrija.Italija.Nemčija.Švica.Francija.Španija.Portugalska.Velika Britanija.Irska.Nizozemska.Belgija.Danska.Švedska.Norveška.Finska.Islandija.Poljska.Češka.Slovaška.Madžarska.Romunija.Bolgarija.Srbija.Bosna in Hercegovina.Črna gora.Severna Makedonija.Kosovo.Grčija.Turčija.Združene države Amerike.Kanada.Mehika.Brazilija.Argentina.Čile.Peru.Kolumbija.Avstralija.Nova Zelandija.Japonska.Kitajska.Indija.Drugo`.split(`.`).forEach(e=>{let t=document.createElement(`option`);t.value=e,t.textContent=e,a.appendChild(t)}),document.querySelectorAll(`.join-button`).forEach(e=>{e.addEventListener(`click`,()=>{let t=document.getElementById(`package`);t&&(t.value=e.dataset.package),document.querySelector(`.reservation`)?.scrollIntoView({behavior:`smooth`})})});var o=document.getElementById(`seatNumber`);o&&o.addEventListener(`click`,()=>{if(document.getElementById(`package`).value.includes(`BASIC`)){alert(`🌱 Paket BASIC vključuje vstop v Blinkita krog.

Za rezervacijo svoje srečne številke izberi ADVANCED, PREMIUM ali VIP paket.`);return}document.getElementById(`sedezi`)?.scrollIntoView({behavior:`smooth`})});var s=document.getElementById(`reservation-form`);s&&s.addEventListener(`submit`,async function(t){t.preventDefault(),console.log(`🌈 Rezervacija potrjena`);let n=document.getElementById(`name`).value.trim(),r=document.getElementById(`email`).value.trim(),i=document.getElementById(`country`).value,a=document.getElementById(`birth-date`).value,o=document.getElementById(`tzolkin`).value,s=document.getElementById(`package`).value,c=document.getElementById(`seatNumber`).value,l=document.getElementById(`payment`).value;if(!n||!r||!i||!s||!l){alert(`⚠️ Prosimo, izpolni vsa obvezna polja.

Ko bodo vsi podatki izpolnjeni, klikni ponovno in nadaljuj z rezervacijo.`);return}let u=n.split(` `),d=u[0],f=u.slice(1).join(``);if(!n||!r||!s||!l){alert(`🌈 Portal še ni pripravljen za odprtje.

Manjkajo še nekateri podatki.

Prosimo, preveri, da si izpolnil/a:
✨ svoje ime
✨ email naslov
✨ izbrani paket
✨ način plačila

Ko so vsi podatki pripravljeni, se bo portal odprl in tvoja rezervacija bo ustvarjena.

✨ Where the Impossible Becomes Possible.`);return}let{data:p,error:m}=await e.from(`members`).insert({first_name:d,last_name:f,email:r,country:i,birth_date:a,personal_tzolkin_code:o}).select().single();if(m){console.error(m),alert(`🌈 Pri odprtju portala je prišlo do napake.

Prosimo, poskusi ponovno ali se poveži z nami.

✨ Blinkita Multiverse`);return}let{error:h}=await e.from(`memberships`).insert({member_id:p.id,package:s,status:`pending`});h&&console.error(`Membership error:`,h);let g=s.includes(`BASIC`)?55:s.includes(`ADVANCED`)?111:s.includes(`PREMIUM`)?333:555;if(await e.from(`payments`).insert({member_id:p.id,amount:g,payment_method:l,payment_status:`pending`}),c&&!s.includes(`BASIC`)){console.log(`🔍 Seat value:`,c,typeof c);let{data:t,error:n}=await e.from(`seats`).update({member_id:p.id,status:`pending`,reserved_at:new Date}).eq(`seat_number`,Number(c)).select();console.log(`🪑 Seat update:`,t,n)}let _=`BM-${p.id.toString().padStart(6,`0`)}`;try{let e=await(await fetch(`/api/send-email`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({name:n,email:r,packageValue:s,seatNumber:c,payment:l,memberCode:_})})).json();console.log(`📧 Email response:`,e)}catch(e){console.error(`📧 Email error:`,e)}let v=document.getElementById(`bank-box`),y=document.getElementById(`western-box`);v&&(v.style.display=`none`),y&&(y.style.display=`none`),l===`paypal`&&(alert(`🌈 Dobrodošel/a v Blinkita Multiverse!


Tvoja rezervacija je uspešno prejeta.


Zdaj se odpira varna PayPal stran, kjer lahko dokončaš svoje članstvo.


Po potrditvi plačila bo tvoje članstvo aktivirano, tvoja izbrana srečna številka pa rezervirana zate.


Hvala, ker soustvarjaš prostor, kjer nemogoče postaja mogoče.


✨ Where the Impossible Becomes Possible.`),window.location.href=`https://www.paypal.com/ncp/payment/QDCZHD48TWVHW`),l===`bank`&&v&&(v.style.display=`block`),l===`western`&&y&&(y.style.display=`block`),l!==`paypal`&&alert(`🌈 Hvala!


Tvoja rezervacija v Blinkita Multiverse je uspešno prejeta.


Tvoj sedež je začasno rezerviran.


Po uspešnem plačilu nam prosimo pošlji potrdilo na:


info@blinkita.si


Takoj po potrditvi bomo aktivirali tvoje članstvo.


Hvala, ker soustvarjaš Blinkita Multiverse.


Where the Impossible Becomes Possible.


Living Time • Living Consciousness • Living Creation`)});var c=document.getElementById(`reservation-confirm-btn`);c&&c.addEventListener(`click`,()=>{console.log(`🌈 Reservation confirmation button clicked`)});