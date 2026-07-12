export function openReservation(seatNumber) {
    console.log("🌈 Reservation opened for seat:", seatNumber);

    const modal = document.createElement("div");

    modal.className = "reservation-modal";

    modal.innerHTML = `
        <div class="reservation-box">

            <h2>Vstopi v krog 🌈</h2>

            <p>
            Tvoj sedež:
            <strong>#${seatNumber}</strong>
            </p>

            <label>
            Paket
            </label>

            <select id="package">
                <option value="ADVANCED">Advanced</option>
                <option value="PREMIUM">Premium</option>
                <option value="VIP">VIP</option>
            </select>


            <input id="first_name" placeholder="Ime">

            <input id="last_name" placeholder="Priimek">

            <input id="email" placeholder="Email">


            <input 
            id="birth_date" 
            type="date"
            >


            <input 
            id="tzolkin"
            placeholder="Tvoja Tzolkin energija"
            >


            <button id="reserve-button">
                Nadaljuj na plačilo
            </button>

        </div>
    `;


    document.body.appendChild(modal);


    document
    .getElementById("reserve-button")
    .onclick = () => {

        console.log("Reservation data ready");

        window.location.href =
        "TVOJ_PAYPAL_LINK";

    };
}