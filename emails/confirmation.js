import { emailLayout } from "./layout.js";

export function confirmationEmail(data) {

return emailLayout(

"✨ Dobrodošel/a med prve Ustvarjalce Mogočega",

`

<p>
Pozdravljen/a ${data.name},
</p>


<p>
z veseljem ti sporočam, da je bilo tvoje plačilo uspešno potrjeno.
</p>


<p>
Od tega trenutka je tvoje članstvo v <strong>BLINKITA MULTIVERSE</strong> uradno aktivno.
</p>


<p>
Postal/a si del prvih <strong>Ustvarjalcev Mogočega</strong> –
skupnosti ljudi, ki s svojo prisotnostjo pomagajo ustvarjati novo zgodbo.
</p>


<p>
Če si izbral/a srečno številko, je ta zdaj trajno rezervirana nate.
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
Hvala, ker verjameš v vizijo in soustvarjaš projekt
<strong>7 sedežev za Belize</strong>.
</p>


<p>
Tvoj korak je postal del večje zgodbe —
zgodbe povezovanja ljudi, idej, poguma in ustvarjanja.
</p>


<p>
Naj bo to začetek lepe skupne poti. 🌈
</p>


<p>
Dobrodošel/a v Blinkita Multiverse.
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