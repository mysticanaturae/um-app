import { resend } from "./resend.js";

import { welcomeEmail } from "../emails/welcome.js";
import { paypalEmail } from "../emails/paypal.js";
import { bankTransferEmail } from "../emails/bank-transfer.js";
import { westernUnionEmail } from "../emails/westernunion.js";
import { confirmationEmail } from "../emails/confirmation.js";


const FROM_EMAIL =
"Blinkita Multiverse <noreply@blinkita.com>";



export async function sendWelcomeEmail(data){

return await resend.emails.send({

from: FROM_EMAIL,

to: data.email,

subject:
"🌈 Dobrodošel/a v Blinkita Multiverse",

html:
welcomeEmail(data)

});

}




export async function sendPaypalEmail(data){

return await resend.emails.send({

from: FROM_EMAIL,

to:data.email,

subject:
"✨ Tvoje članstvo v Blinkita Multiverse je aktivirano",

html:
paypalEmail(data)

});

}




export async function sendBankTransferEmail(data){

return await resend.emails.send({

from: FROM_EMAIL,

to:data.email,

subject:
"🌈 Tvoja rezervacija v Blinkita Multiverse je ustvarjena",

html:
bankTransferEmail(data)

});

}




export async function sendWesternUnionEmail(data){

return await resend.emails.send({

from: FROM_EMAIL,

to:data.email,

subject:
"🌈 Tvoja rezervacija v Blinkita Multiverse je ustvarjena",

html:
westernUnionEmail(data)

});

}




export async function sendConfirmationEmail(data){

return await resend.emails.send({

from: FROM_EMAIL,

to:data.email,

subject:
"✨ Dobrodošel/a med prve Ustvarjalce Mogočega",

html:
confirmationEmail(data)

});

}

export async function sendAdminNotification(data){

return await resend.emails.send({

from: FROM_EMAIL,

to:"info@blinkita.si",

subject:"🌈 Nova rezervacija v Blinkita Multiverse",

html:`

<h2>Nova rezervacija</h2>

<p><strong>Ime:</strong> ${data.name}</p>

<p><strong>Email:</strong> ${data.email}</p>

<p><strong>Paket:</strong> ${data.packageValue}</p>

<p><strong>Srečna številka:</strong> ${data.seatNumber}</p>

<p><strong>Način plačila:</strong> ${data.payment}</p>

<p><strong>Članska koda:</strong> ${data.memberCode}</p>

<hr>

<p>Rezervacija čaka na potrditev plačila.</p>

`

});

}