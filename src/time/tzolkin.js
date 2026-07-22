/* ==========================================
BLINKITA TIME™
TRADITIONAL TZOLK'IN ENGINE
========================================== */


export function calculateTzolkinKin(dateInput){


    const dateParts =
    dateInput.split("-");


    const date =
    new Date(Date.UTC(
        parseInt(dateParts[0]),
        parseInt(dateParts[1]) - 1,
        parseInt(dateParts[2])
    ));



    const refDate =
    new Date(Date.UTC(1800,0,1));



    const refKin = 114;



    const msPerDay =
    1000 * 60 * 60 * 24;



    const daysSince =
    Math.floor(
        (date - refDate) / msPerDay
    );



    const kin =
    ((refKin - 1 + daysSince) % 260 + 260) % 260 + 1;



    return kin;


}




export function getTzolkinData(dateInput){


    const kin =
    calculateTzolkinKin(dateInput);



    const tone =
    ((kin - 1) % 13) + 1;



    const sign =
    ((kin - 1) % 20) + 1;



    return {

        kin,

        tone,

        sign

    };


}