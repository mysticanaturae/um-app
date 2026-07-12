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





        // STATUS SEDEŽA


        const isConfirmed =
            seat.status === "confirmed";



        const isPending =
            seat.status === "pending";





        if(isConfirmed){


            seatBox.classList.add(
                "confirmed-seat"
            );


        }



        if(isPending){


            seatBox.classList.add(
                "pending-seat"
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



            // potrjene številke niso več na voljo


            if(isConfirmed){


                alert(
                    "🔒 Ta srečna številka že pripada enemu izmed Ustvarjalcev Mogočega. Izberi drugo številko. ✨"
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


                selectedPackage.includes(
                    "ADVANCED"
                )
                ||

                selectedPackage.includes(
                    "PREMIUM"
                )
                ||

                selectedPackage.includes(
                    "VIP"
                )


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






            } else {



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
