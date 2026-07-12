import { UniversePortal } from "./components/UniversePortal.js";
import { supabase } from "./supabase/client.js";

console.log("🌈 Blinkita Universe is alive");

UniversePortal();



// ======================================================
// DRŽAVE
// ======================================================

const countrySelect = document.getElementById("country");

if (countrySelect) {

    const countries = [

        "Slovenija",
        "Belize",
        "Hrvaška",
        "Avstrija",
        "Italija",
        "Nemčija",
        "Švica",
        "Francija",
        "Španija",
        "Portugalska",
        "Velika Britanija",
        "Irska",
        "Nizozemska",
        "Belgija",
        "Danska",
        "Švedska",
        "Norveška",
        "Finska",
        "Islandija",
        "Poljska",
        "Češka",
        "Slovaška",
        "Madžarska",
        "Romunija",
        "Bolgarija",
        "Srbija",
        "Bosna in Hercegovina",
        "Črna gora",
        "Severna Makedonija",
        "Kosovo",
        "Grčija",
        "Turčija",
        "Združene države Amerike",
        "Kanada",
        "Mehika",
        "Brazilija",
        "Argentina",
        "Čile",
        "Peru",
        "Kolumbija",
        "Avstralija",
        "Nova Zelandija",
        "Japonska",
        "Kitajska",
        "Indija",
        "Drugo"

    ];

    countries.forEach(country => {

        const option = document.createElement("option");

        option.value = country;
        option.textContent = country;

        countrySelect.appendChild(option);

    });

}



// ======================================================
// GUMBI PAKETOV
// ======================================================

document.querySelectorAll(".join-button").forEach(button => {

    button.addEventListener("click", () => {

        const packageSelect = document.getElementById("package");

        if (packageSelect) {

            packageSelect.value = button.dataset.package;

        }

        document
            .querySelector(".reservation")
            ?.scrollIntoView({

                behavior: "smooth"

            });

    });

});



// ======================================================
// KLIK NA POLJE SREČNE ŠTEVILKE
// ======================================================

const seatInput = document.getElementById("seatNumber");

if (seatInput) {

    seatInput.addEventListener("click", () => {

        const selectedPackage =
            document.getElementById("package").value;

        if (selectedPackage.includes("BASIC")) {

            alert(
                "🌱 Paket BASIC vključuje vstop v Blinkita krog, ne vključuje pa rezervacije srečne številke.\n\nZa svojo srečno številko izberi ADVANCED, PREMIUM ali VIP."
            );

            return;

        }

        document
            .getElementById("sedezi")
            ?.scrollIntoView({

                behavior: "smooth"

            });

    });

}



// ======================================================
// SUPABASE - ČLANSTVO + PLAČILA
// ======================================================



const reservationForm =
document.getElementById("reservation-form");



if(reservationForm){


reservationForm.addEventListener(
"submit",
async function(e){


e.preventDefault();



const name =
document.getElementById("name").value;


const email =
document.getElementById("email").value;


const country =
document.getElementById("country").value;


const birthDate =
document.getElementById("birth-date").value;


const tzolkin =
document.getElementById("tzolkin").value;


const packageValue =
document.getElementById("package").value;


const seatNumber =
document.getElementById("seatNumber").value;


const payment =
document.getElementById("payment").value;





// razdeli ime

const parts =
name.split(" ");


const firstName =
parts[0];


const lastName =
parts.slice(1).join(" ");





// 1. USTVARI ČLANA


const { data:member, error:memberError } =

await supabase
.from("members")
.insert({

first_name:firstName,

last_name:lastName,

email:email,

country:country,

birth_date:birthDate,

personal_tzolkin_code:tzolkin

})
.select()
.single();




if(memberError){

console.error(memberError);

alert(
"Prišlo je do napake pri shranjevanju podatkov."
);

return;

}





// 2. ČLANSTVO


await supabase
.from("membership")
.insert({

member_id:member.id,

package:packageValue,

status:"pending"

});






// 3. PLAČILO


await supabase
.from("payments")
.insert({

member_id:member.id,

amount:
packageValue.includes("BASIC")
? 55
:
packageValue.includes("ADVANCED")
? 111
:
packageValue.includes("PREMIUM")
? 333
:
555,

payment_method:payment,

payment_status:"pending"

});






// 4. SEDEŽ


if(
seatNumber &&
!packageValue.includes("BASIC")
){


await supabase
.from("seats")
.update({

member_id:member.id,

status:"pending",

reserved_at:
new Date()

})
.eq(
"seat_number",
seatNumber
);


}





// PLAČILNI ODGOVOR



if(payment==="paypal"){


alert(
"✨ Podatki so shranjeni. Odpira se PayPal plačilo."
);


window.location.href =
"https://www.paypal.com/ncp/payment/QDCZHD48TWVHW";


}



if(payment==="bank"){


document
.getElementById("bank-box")
.style.display="block";


}



if(payment==="western"){


document
.getElementById("western-box")
.style.display="block";


}



});


}