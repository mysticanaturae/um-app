/* ==========================================
   USTVARJALCI MOGOČEGA
   Script Foundation v1.0
========================================== */


// PRIDOBIMO ELEMENTE STRANI

const seatGrid = document.getElementById("seat-grid");

const seatNumberInput = document.getElementById("seatNumber");

const form = document.getElementById("reservation-form");




// ZAČETNO STANJE

let selectedSeat = null;




// USTVARIMO 99 SEDEŽEV


for (let i = 1; i <= 99; i++) {


    const seat = document.createElement("div");


    seat.classList.add("seat");


    seat.innerText = i.toString().padStart(2, "0");



    seat.dataset.number = i;



    seat.addEventListener("click", function(){


        // odstranimo prejšnjo izbiro

        const allSeats = document.querySelectorAll(".seat");


        allSeats.forEach(function(item){

            item.classList.remove("selected");

        });



        // označimo novega

        seat.classList.add("selected");



        selectedSeat = i;



        // vpišemo številko v obrazec

        seatNumberInput.value = i;



        // premaknemo pogled na obrazec

        document
        .querySelector(".reservation")
        .scrollIntoView({
            behavior:"smooth"
        });



    });



    seatGrid.appendChild(seat);


}








// OBRAZEC REZERVACIJE


form.addEventListener("submit", function(event){


    event.preventDefault();



    const name =
    document.getElementById("name").value;



    const email =
    document.getElementById("email").value;



    const country =
    document.getElementById("country").value;



    const payment =
    document.getElementById("payment").value;





    if(!selectedSeat){


        alert(
        "Najprej izberi svoj sedež."
        );


        return;


    }







    alert(

    "Hvala " + name +
    "!\n\n" +

    "Rezervirali ste sedež št. " +
    selectedSeat +

    ".\n\n" +

    "Način plačila: " +
    payment +

    "\n\n" +

    "Kmalu boste prejeli nadaljnja navodila."

    );





    console.log({

        ime:name,

        email:email,

        drzava:country,

        sedez:selectedSeat,

        placilo:payment

    });





});

