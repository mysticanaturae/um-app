import { UniversePortal } from "./components/UniversePortal.js";
import { supabase } from "./supabase/client.js";

console.log("🌈 Blinkita Multiverse is alive");

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

        const packageSelect =
        document.getElementById("package");


        if (packageSelect) {

            packageSelect.value =
            button.dataset.package;

        }


        document
        .querySelector(".reservation")
        ?.scrollIntoView({

            behavior:"smooth"

        });

    });

});



// ======================================================
// KLIK NA SREČNO ŠTEVILKO
// ======================================================

const seatInput =
document.getElementById("seatNumber");


if (seatInput) {

    seatInput.addEventListener("click", () => {


        const selectedPackage =
        document.getElementById("package").value;


        if(selectedPackage.includes("BASIC")){


            alert(
`🌱 Paket BASIC vključuje vstop v Blinkita krog.

Za rezervacijo svoje srečne številke izberi ADVANCED, PREMIUM ali VIP paket.`
            );


            return;

        }


        document
        .getElementById("sedezi")
        ?.scrollIntoView({

            behavior:"smooth"

        });


    });

}



// ======================================================
// SUPABASE - REZERVACIJA
// ======================================================


const reservationForm =
document.getElementById("reservation-form");


if(reservationForm){


reservationForm.addEventListener(
"submit",
async function(e){


e.preventDefault();


console.log("🌈 Rezervacija potrjena");



const name =
document.getElementById("name").value.trim();


const email =
document.getElementById("email").value.trim();


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




// ======================================================
// PREVERI POLJA
// ======================================================


if(
!name ||
!email ||
!country ||
!packageValue ||
!payment
){


alert(
`⚠️ Prosimo, izpolni vsa obvezna polja.

Ko bodo vsi podatki izpolnjeni, klikni ponovno in nadaljuj z rezervacijo.`
);


return;

}



// ======================================================
// IME
// ======================================================


const parts =
name.split(" ");


const firstName =
parts[0];


const lastName =
parts.slice(1).join("");


if(
!name ||
!email ||
!packageValue ||
!payment
){

alert(
`🌈 Portal še ni pripravljen za odprtje.

Manjkajo še nekateri podatki.

Prosimo, preveri, da si izpolnil/a:
✨ svoje ime
✨ email naslov
✨ izbrani paket
✨ način plačila

Ko so vsi podatki pripravljeni, se bo portal odprl in tvoja rezervacija bo ustvarjena.

✨ Where the Impossible Becomes Possible.`
);

return;

}


// ======================================================
// USTVARI ČLANA
// ======================================================


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
`🌈 Pri odprtju portala je prišlo do napake.

Prosimo, poskusi ponovno ali se poveži z nami.

✨ Blinkita Multiverse`
);

return;

}

// ======================================================
// DO TUKAJ PRIDE 1. DEL
// 2. DEL NADALJUJE TUKAJ
// ======================================================


// ======================================================
// ČLANSTVO
// ======================================================


const { error:membershipError } =

await supabase
.from("memberships")
.insert({

member_id:member.id,

package:packageValue,

status:"pending"

});


if(membershipError){

console.error(
"Membership error:",
membershipError
);

}



// ======================================================
// PLAČILO
// ======================================================


const amount =

packageValue.includes("BASIC")
? 55

:

packageValue.includes("ADVANCED")
? 111

:

packageValue.includes("PREMIUM")
? 333

:

555;



await supabase
.from("payments")
.insert({

member_id:member.id,

amount:amount,

payment_method:payment,

payment_status:"pending"

});





// ======================================================
// SEDEŽ
// ======================================================

if(
seatNumber &&
!packageValue.includes("BASIC")
){

console.log(
"🔍 Seat value:",
seatNumber,
typeof seatNumber
);


const { data: updatedSeat, error: seatError } =

await supabase
.from("seats")
.update({

member_id: member.id,

status:"pending",

reserved_at:new Date()

})
.eq(
"seat_number",
Number(seatNumber)
)
.select();


console.log(
"🪑 Seat update:",
updatedSeat,
seatError
);


// ======================================================
// SHRANI ŠTEVILKO TUDI V MEMBERS
// ======================================================

const { error: memberSeatError } =

await supabase
.from("members")
.update({

seat_number: Number(seatNumber)

})
.eq("id", member.id);


if(memberSeatError){

console.error(
"❌ Member seat update error:",
memberSeatError
);

}

}



// ======================================================
// EMAIL SISTEM
// ======================================================


const memberCode =

`BM-${member.id.toString().padStart(6,"0")}`;



try {


const emailResponse = await fetch(
"/api/send-email",
{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

name,

email,

packageValue,

seatNumber,

payment,

memberCode

})

});


const emailResult = await emailResponse.json();


console.log(
"📧 Email response:",
emailResult
);



}


catch(error){


console.error(

"📧 Email error:",

error

);


}





// ======================================================
// PLAČILNI ODGOVOR
// ======================================================


const bankBox =
document.getElementById("bank-box");


const westernBox =
document.getElementById("western-box");



if(bankBox)
bankBox.style.display="none";


if(westernBox)
westernBox.style.display="none";





if(payment==="paypal"){


alert(
`🌈 Dobrodošel/a v Blinkita Multiverse!


Tvoja rezervacija je uspešno prejeta.


Zdaj se odpira varna PayPal stran, kjer lahko dokončaš svoje članstvo.


Po potrditvi plačila bo tvoje članstvo aktivirano, tvoja izbrana srečna številka pa rezervirana zate.


Hvala, ker soustvarjaš prostor, kjer nemogoče postaja mogoče.


✨ Where the Impossible Becomes Possible.`
);



window.location.href =

"https://www.paypal.com/ncp/payment/QDCZHD48TWVHW";


}




if(payment==="bank"){


if(bankBox)

bankBox.style.display="block";


}




if(payment==="western"){


if(westernBox)

westernBox.style.display="block";


}




// ======================================================
// KONČNA POTRDITEV
// ======================================================


if(payment!=="paypal"){


alert(
`🌈 Hvala!


Tvoja rezervacija v Blinkita Multiverse je uspešno prejeta.


Tvoj sedež je začasno rezerviran.


Po uspešnem plačilu nam prosimo pošlji potrdilo na:


info@blinkita.si


Takoj po potrditvi bomo aktivirali tvoje članstvo.


Hvala, ker soustvarjaš Blinkita Multiverse.


Where the Impossible Becomes Possible.


Living Time • Living Consciousness • Living Creation`
);


}



});

}






// ======================================================
// POTRDITEV REZERVACIJE
// ======================================================


const reservationButton =

document.getElementById("reservation-confirm-btn");



if(reservationButton){


reservationButton.addEventListener(

"click",

()=>{


console.log(
"🌈 Reservation confirmation button clicked"
);


}


);


}