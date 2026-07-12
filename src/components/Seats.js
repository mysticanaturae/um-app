import { supabase } from "../supabase/client.js";

export async function loadSeats() {

    console.log("🪑 Seats portal activated");


    const { data, error } = await supabase
        .from("seats")
        .select("*")
        .order("seat_number");


    if (error) {

        console.error("❌ Error loading seats:", error);

        return;

    }



    console.log("🌈 Seats from Supabase:", data);



    const grid = document.getElementById("seat-grid");


    if (!grid) {

        console.error("❌ seat-grid not found");

        return;

    }



    grid.innerHTML = "";



    data.forEach((seat) => {


        const seatBox = document.createElement("div");


        seatBox.className = "seat-circle";


        seatBox.innerHTML = `
            <div class="circle">
                ${seat.seat_number}
            </div>
        `;



        seatBox.onclick = () => {


            const selectedSeat =
                document.getElementById("seatNumber");


            const packageSelect =
                document.getElementById("package");


            const selectedPackage =
                packageSelect
                ? packageSelect.value
                : "";



            // preveri paket

            if (

                selectedPackage.includes("ADVANCED") ||
                selectedPackage.includes("PREMIUM") ||
                selectedPackage.includes("VIP")

            ) {



                if(selectedSeat){


                    selectedSeat.value =
                        seat.seat_number;



                    console.log(
                        "🌀 Selected seat:",
                        seat.seat_number
                    );


                }



                // označi izbrano številko

                document
                .querySelectorAll(".seat-circle")
                .forEach(item => {

                    item.classList.remove("selected");

                });



                seatBox.classList.add("selected");




                // vrni nazaj na obrazec

                document
                .querySelector(".reservation")
                ?.scrollIntoView({

                    behavior:"smooth"

                });



            } else {



                alert(
                    "🌱 Paket BASIC te že vključuje v Blinkita krog. Srečna številka pa je vključena v pakete ADVANCED, PREMIUM in VIP."
                );


            }



        };



        grid.appendChild(seatBox);


    });



    console.log("✨ Seats portal rendered");


}