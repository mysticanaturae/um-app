import { supabase } from "../supabase/client.js";


export async function loadSeats() {


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


data.forEach(seat => {


    if(seat.status === "confirmed"){


        if(seat.package){

            if(seat.package.includes("BASIC"))
            totalRaised += 55;


            if(seat.package.includes("ADVANCED"))
            totalRaised += 111;


            if(seat.package.includes("PREMIUM"))
            totalRaised += 333;


            if(seat.package.includes("VIP"))
            totalRaised += 555;

        }

    }

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