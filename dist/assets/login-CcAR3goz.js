import"./modulepreload-polyfill-Dezn_h7o.js";import{t as e}from"./client-BkE-LfWj.js";var t=document.getElementById(`loginButton`),n=document.getElementById(`message`);t.onclick=async()=>{let t=document.getElementById(`email`).value;if(!t){n.innerHTML=`Vnesi email.`;return}let{error:r}=await e.auth.signInWithOtp({email:t,options:{emailRedirectTo:window.location.origin+`/dashboard.html`}});if(r){console.error(`FULL ERROR:`,r),n.innerHTML=`
Napaka pri prijavi:<br>
${r.message||JSON.stringify(r)}
`;return}n.innerHTML=`

✨ Povezava za vstop je poslana na tvoj email.

`};