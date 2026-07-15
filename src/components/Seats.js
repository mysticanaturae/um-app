import { supabase } from "../supabase/client.js";

async function registerVisitor() {


    const { error } = await supabase
        .from("visitors")
        .insert([
            {}
        ]);


    if(error){

        console.error(
            "❌ Visitor registration error:",
            error
        );

        return;

    }


    console.log(
        "🌎 Visitor registered"
    );


}



async function loadVisitors() {


    const { count, error } = await supabase
        .from("visitors")
        .select("*", {
            count: "exact",
            head: true
        });



    if(error){

        console.error(
            "❌ Visitor count error:",
            error
        );

        return;

    }



    const visitorCount =
    document.getElementById(
        "progress-visitors"
    );



    if(visitorCount){

      visitorCount.innerHTML =
`👣 Obiskovalcev: ${count}`;

    }


}

export async function loadSeats() {

    await registerVisitor();

    await loadVisitors();

    console.log("🪑 Seats portal activated");



    const { data, error } = await supabase
        .from("seats")
        .select("*")
        .order("seat_number");



    if (error) {

        console.error(
            "❌ Error loading seats:",
            error
        );

        return;

    }



    console.log(
        "🌈 Seats from Supabase:",
        data
    );

const { data: payments, error: paymentsError } = await supabase
    .from("payments")
    .select("*")
    .eq("payment_status", "paid");


if (paymentsError) {

    console.error(
        "❌ Error loading payments:",
        paymentsError
    );

}

// ======================================================
// POSODOBI NAPREDEK
// ======================================================


const confirmedSeats =
data.filter(
    seat => seat.status === "confirmed"
);


const pendingSeats =
data.filter(
    seat => seat.status === "pending"
);

const progressPending =
document.getElementById(
    "progress-pending"
);


const progressConfirmed =
document.getElementById(
    "progress-confirmed"
);



if(progressPending){

    progressPending.innerHTML =
    `🌟 Rezerviranih številk: ${pendingSeats.length}`;

}



if(progressConfirmed){

    progressConfirmed.innerHTML =
    `🔒 Aktivnih številk: ${confirmedSeats.length}`;

}

const occupiedCount =
confirmedSeats.length + pendingSeats.length;


const freeCount =
data.length - occupiedCount;


let totalRaised = 0;


payments?.forEach(payment => {

    totalRaised += Number(payment.amount);

});



const progressMembers =
document.getElementById(
    "progress-members"
);


const progressMoney =
document.getElementById(
    "progress-money"
);


const progressFree =
document.getElementById(
    "progress-free"
);



if(progressMembers){

    progressMembers.innerHTML =
    `${occupiedCount} / 99 ustvarjalcev`;

}


if(progressMoney){

    progressMoney.innerHTML =
    `💚 Zbranih: ${totalRaised} €`;

}

const goal = 10000;


const percentage =
Math.min(
    (totalRaised / goal) * 100,
    100
);



const progressBar =
document.getElementById(
    "money-progress-bar"
);



const progressPercentage =
document.getElementById(
    "progress-percentage"
);



if(progressBar){

    progressBar.style.width =
    `${percentage}%`;

}



if(progressPercentage){

    progressPercentage.innerHTML =
    `🌱 ${percentage.toFixed(2)} %`;

}

if(progressFree){

    progressFree.innerHTML =
    `✨ Prostih številk: ${freeCount}`;

}
 
    const grid =
        document.getElementById("seat-grid");



    if (!grid) {

        console.error(
            "❌ seat-grid not found"
        );

        return;

    }



    grid.innerHTML = "";







    data.forEach((seat) => {



        const seatBox =
            document.createElement("div");



        seatBox.className =
            "seat-circle";





        const isConfirmed =
            seat.status === "confirmed";



        const isPending =
            seat.status === "pending";





        if(isConfirmed){


            seatBox.classList.add(
                "confirmed-seat"
            );


        }



        else if(isPending){


            seatBox.classList.add(
                "pending-seat"
            );


        }



        else {


            seatBox.classList.add(
                "available-seat"
            );


        }







        seatBox.innerHTML = `


            <div class="circle">


                ${
                    isConfirmed
                    ? "🔒"
                    : ""
                }


                ${
                    isPending
                    ? "✨"
                    : ""
                }


                <span>
                    ${seat.seat_number}
                </span>


            </div>


        `;







        seatBox.onclick = () => {



            if(isConfirmed || isPending){


    alert(
        "✨ Ta srečna številka je trenutno rezervirana ali že zasedena. Prosimo, izberi drugo številko."
    );


    return;


}



            const selectedSeat =
                document.getElementById(
                    "seatNumber"
                );



            const packageSelect =
                document.getElementById(
                    "package"
                );



            const selectedPackage =
                packageSelect
                ? packageSelect.value
                : "";







            if(


                selectedPackage.includes("ADVANCED")

                ||

                selectedPackage.includes("PREMIUM")

                ||

                selectedPackage.includes("VIP")


            ){



                if(selectedSeat){



                    selectedSeat.value =
                        seat.seat_number;



                    console.log(
                        "🌀 Selected seat:",
                        seat.seat_number
                    );


                }







                document
                .querySelectorAll(
                    ".seat-circle"
                )
                .forEach(item=>{


                    item.classList.remove(
                        "selected"
                    );


                });







                seatBox.classList.add(
                    "selected"
                );







                document
                .querySelector(
                    ".reservation"
                )
                ?.scrollIntoView({


                    behavior:"smooth"


                });







            }

            else {



                alert(

                    "🌱 Paket BASIC te vključuje v Blinkita krog. Srečna številka pa je vključena v pakete ADVANCED, PREMIUM in VIP."

                );


            }



        };







        grid.appendChild(
            seatBox
        );



    });







    console.log(
        "✨ Seats portal rendered"
    );



}