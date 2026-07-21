import { supabase } from "../supabase/client.js";



const button =
document.getElementById("loginButton");


const message =
document.getElementById("message");



button.onclick = async()=>{


const email =
document.getElementById("email").value;



if(!email){

message.innerHTML =
"Vnesi email.";

return;

}




const { error } =
await supabase.auth.signInWithOtp({

email,

options:{
emailRedirectTo:
"https://app.blinkita.com/dashboard.html"
}

});




if(error){

console.error("FULL ERROR:", error);

message.innerHTML = `
Napaka pri prijavi:<br>
${error.message || JSON.stringify(error)}
`;

return;

}



message.innerHTML = `

✨ Povezava za vstop je poslana na tvoj email.

`;



};