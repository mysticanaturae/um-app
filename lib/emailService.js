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