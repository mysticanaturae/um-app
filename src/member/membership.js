import { memberData } from "./member.js";


export function showMembership(){


const content = document.getElementById("content");



content.innerHTML = `


<section class="dashboard-section">


    <h1>
    📦 Moj paket
    </h1>


    <p>
    Tvoje aktivno članstvo v Blinkita Multiverse.
    </p>



    <div class="dashboard-grid">



        <div class="dashboard-card">


            <h3>
            🌟 Trenutni paket
            </h3>


            <h1>
           ${memberData?.package || "Brez paketa"}
            </h1>


        </div>



        <div class="dashboard-card">


            <h3>
            🔓 Dostop
            </h3>


            <p>
            Tvoji odprti portali in digitalni zakladi se pripravljajo.
            </p>


        </div>



    </div>


</section>


`;

}