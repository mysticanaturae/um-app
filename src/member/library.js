import { supabase } from "../supabase/client.js";


export async function showLibrary(){

    const content = document.getElementById("content");


    content.innerHTML = `

    <section class="dashboard-section">


        <h1>
        📚 Moja knjižnica
        </h1>


        <p>
        Raziskuj celotno zakladnico Blinkita Multiverse.
        Tukaj se bodo zbirali vsi digitalni svetovi, knjige,
        portali in ustvarjalni zakladi.
        </p>



        <div class="downloads-grid" id="library-container">

            Nalagam knjižnico...

        </div>



    </section>

    `;


    const container =
    document.getElementById("library-container");



    container.innerHTML = `


        <div class="download-card">


            <div class="download-icon">
            💰
            </div>


            <h3>
            Ljubim denar in denar ljubi mene
            </h3>


            <p>
            Digitalni svet zavestnega obilja,
            ustvarjanja in transformacije.
            </p>


            <div class="dashboard-status">
            🔒 Še ni v tvojem Multiverzumu
            </div>


        </div>





        <div class="download-card">


            <div class="download-icon">
            ❤️
            </div>


            <h3>
            Popolno partnerstvo
            </h3>


            <p>
            Zbirka za odpiranje prostora
            ljubezni in harmonije.
            </p>


            <div class="dashboard-status">
            🔒 Še ni v tvojem Multiverzumu
            </div>


        </div>





        <div class="download-card">


            <div class="download-icon">
            ✨
            </div>


            <h3>
            Abracadabra
            </h3>


            <p>
            Digitalna zbirka transformacije,
            zavestnega ustvarjanja in magije življenja.
            </p>


            <div class="dashboard-status">
            🌟 Del Blinkita zakladnice
            </div>


        </div>



    `;


}