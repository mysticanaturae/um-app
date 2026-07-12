import { UniversePortal } from "./components/UniversePortal.js";

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
// PLAČILNI TOK
// ======================================================

const form =
    document.getElementById("reservation-form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const payment =
            document.getElementById("payment").value;

        const bankBox =
            document.getElementById("bank-box");

        const westernBox =
            document.getElementById("western-box");

        if (bankBox) bankBox.style.display = "none";
        if (westernBox) westernBox.style.display = "none";



        // =====================================
        // PAYPAL
        // =====================================

        if (payment === "paypal") {

            const go = confirm(

`🌈 Dobrodošel/a v Blinkita Universe!

Hvala, ker soustvarjaš Ustvarjalce Mogočega.

Po potrditvi boš preusmerjen/a na varno PayPal plačilo.

Nadaljujem?`

            );

            if (go) {

                window.location.href =
                    "https://www.paypal.com/ncp/payment/QDCZHD48TWVHW";

            }

            return;

        }



        // =====================================
        // BANKA
        // =====================================

        if (payment === "bank") {

            bankBox.style.display = "block";

            bankBox.scrollIntoView({

                behavior: "smooth"

            });

            return;

        }



        // =====================================
        // WESTERN UNION
        // =====================================

        if (payment === "western") {

            westernBox.style.display = "block";

            westernBox.scrollIntoView({

                behavior: "smooth"

            });

            return;

        }

    });

}

console.log("✨ app.js loaded");