import { getCurrentMember } from "../auth/session.js";


export async function showMembership(){


const content =
document.getElementById("content");


const member =
await getCurrentMember();



if(!member){

content.innerHTML = `
<h2>Ni prijavljenega člana.</h2>
`;

return;

}



content.innerHTML = `


<section class="dashboard-section">


<h1>
Pozdravljen, ${member.first_name || "Ustvarjalec"}
</h1>


<h2>
Tvoj paket
</h2>



<div class="dashboard-card">


<p>
<strong>
${member.package || "Brez paketa"}
</strong>
</p>


<p>
Srečna številka:
${member.seat_number || "—"}
</p>


<p>
Status:
<span style="color:#6cff8b">
${member.status || "ACTIVE"}
</span>
</p>


</div>


</section>


`;


}