import { emailLayout } from "./layout.js";

export function bankTransferEmail(data) {

return emailLayout(

"🌈 Tvoja rezervacija v Blinkita Multiverse je ustvarjena",

`

<p>
Pozdravljen/a ${data.name},
</p>


<p>
hvala za tvojo prijavo v <strong>BLINKITA MULTIVERSE</strong>.
</p>


<p>
Tvoja rezervacija med prvimi <strong>Ustvarjalci Mogočega</strong> je uspešno ustvarjena.
</p>


<p>
Če si izbral/a srečno številko, je ta trenutno rezervirana zate in čaka na potrditev plačila.
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

<p>
<strong>Način plačila:</strong> Bančno nakazilo
</p>

</div>


<p>
Po prejemu bančnega nakazila bo tvoje članstvo aktivirano,
o čemer boš prejel/a novo e-poštno sporočilo.
</p>


<p>
Hvala, ker soustvarjaš projekt <strong>7 sedežev za Belize</strong>
in zgodbo, ki povezuje ljudi, ideje in možnosti.
</p>


<p>
Tvoj korak danes pomaga ustvarjati nekaj, kar presega običajno.
</p>


<p>
Dobrodošel/a v nastajajočem krogu prvih Ustvarjalcev Mogočega. 🌈
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