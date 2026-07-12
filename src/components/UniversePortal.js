import { loadSeats } from "./Seats.js";

export async function UniversePortal() {
    console.log("🌈 Blinkita Universe Portal activated");

    await loadSeats();

    console.log("✨ Portal ready");
}