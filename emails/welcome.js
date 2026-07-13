import { emailLayout } from "./layout.js";

export function welcomeEmail(data){

return emailLayout(

"Portal se je odprl.",

`

<p>

Dobrodošel/a v Blinkita Multiverse.

</p>

...

`

);

}