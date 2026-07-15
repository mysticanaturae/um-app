import { emailLayout } from "./layout.js";

export function welcomeEmail(data) {

const packageValue = data.packageValue || "";
const seatNumber = data.seatNumber || "";
const memberCode = data.memberCode || "—";

return emailLayout(

"🌈 Portal se je odprl in tvoje potovanje se je začelo.",

`

<p>
Draga ustvarjalka, dragi ustvarjalec,
</p>

<p>

Dobrodošel/a v <strong>Blinkita Multiverse</strong>.

</p>

<p>

Tvoja prijava je bila uspešno prejeta in tvoj prvi korak je narejen.

Pridružil/a si se prostoru, kjer se srečujejo čas, zavest in ustvarjanje.

</p>

<p>

To ni le članstvo.

To je povabilo v skupnost ljudi, ki verjamejo, da lahko skupaj ustvarjamo svet, kjer nemogoče postaja mogoče.

</p>

<hr>

<h2>🌈 Tvoji podatki</h2>

<div class="card">

<strong>Ime:</strong> ${data.name || "—"}<br>
<strong>Email:</strong> ${data.email || "—"}<br>
<strong>Paket:</strong> ${packageValue || "—"}<br>
<strong>Koda člana:</strong> ${memberCode}

</div>

${
packageValue && !packageValue.includes("BASIC") && seatNumber
? `
<div class="card">

<strong>🍀 Tvoja rezervirana srečna številka:</strong>

<h2 style="margin:15px 0 0 0;font-size:40px;color:#5b46d6;text-align:center;">
${seatNumber}
</h2>

</div>
`
: `
<div class="card">

💛 Kot član paketa <strong>BASIC</strong> si postal/a pomemben del Blinkita Multiverse.

<br><br>

Ta paket ne vključuje rezervacije srečne številke, vendar s svojo podporo pomagaš soustvarjati prostor, kjer nemogoče postaja mogoče.

</div>
`
}

<hr>

<p>

Naslednji korak je dokončanje izbranega načina plačila.

Ko bo plačilo potrjeno, bo tvoje članstvo aktivirano in prejel/a boš naslednje informacije.

</p>

<p>

Hvala, ker si postal/a del Blinkita Multiverse.

</p>

<p>

<strong>Where the Impossible Becomes Possible.</strong>

</p>

<p>

Living Time • Living Consciousness • Living Creation

</p>

`

);

}