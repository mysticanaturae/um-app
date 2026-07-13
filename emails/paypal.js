import { emailLayout } from "./layout.js";

export function paypalEmail(data) {

return emailLayout(

"✨ Tvoje članstvo v Blinkita Multiverse je aktivirano",

`

<p>
Pozdravljen/a ${data.name},
</p>

<p>
z veseljem ti sporočam, da je bilo tvoje PayPal plačilo uspešno prejeto.
</p>

<p>
Od tega trenutka je tvoje članstvo v <strong>BLINKITA MULTIVERSE</strong> aktivno.
</p>

<p>
Postal/a si del prvih <strong>Ustvarjalcev Mogočega</strong> – skupnosti ljudi,
ki verjamejo, da lahko s pogumom, vizijo in skupnim ustvarjanjem nastajajo nove zgodbe.
</p>


<div class="card">

<p>
<strong>Paket:</strong> ${data.package}
</p>

<p>
<strong>Srečna številka:</strong> ${data.seat}
</p>

<p>
<strong>Članska koda:</strong> ${data.member_code}
</p>

</div>


<p>
Če si izbral/a srečno številko, je ta od tega trenutka uradno rezervirana zate.
</p>


<p>
Hvala za tvoje zaupanje in podporo projektu <strong>7 sedežev za Belize</strong>.
</p>


<p>
Tvoja prisotnost pomaga ustvarjati prvi korak zgodbe, ki povezuje ljudi,
ideje in možnosti preko meja.
</p>


<p>
V prihodnjih tednih boš prejemal/a informacije o razvoju projekta,
novih vsebinah in posebnih presenečenjih za člane Blinkita Multiverse.
</p>


<p>
Dobrodošel/a v krogu prvih Ustvarjalcev Mogočega. 🌈
</p>


<br>


<p>
<strong>Blanka Thomas</strong><br>
Ustanoviteljica Blinkita Multiverse
</p>


<p>
Where the Impossible Becomes Possible.<br>
Living Time • Living Consciousness • Living Creations
</p>

`

);

}