/* ==========================================
BLINKITA TIME™
TRADITIONAL TZOLK'IN ENGINE
========================================== */


const tzolkinSigns = [

{
    maya:"Imix",
    slovene:"Krokodil",
    meaning:"Izvorna ustvarjalna sila, rojstvo in začetek."
},

{
    maya:"Ik'",
    slovene:"Veter",
    meaning:"Dih življenja, gibanje in komunikacija."
},

{
    maya:"Ak'b'al",
    slovene:"Noč",
    meaning:"Sanje, notranja modrost in skrivnosti."
},

{
    maya:"K'an",
    slovene:"Semeno",
    meaning:"Rast, potencial in uresničevanje."
},

{
    maya:"Chikchan",
    slovene:"Kača",
    meaning:"Življenjska sila, instinkt in prebujenje."
},

{
    maya:"Kimi",
    slovene:"Smrt",
    meaning:"Preobrazba, zaključek in nov začetek."
},

{
    maya:"Manik'",
    slovene:"Jelen",
    meaning:"Zdravljenje, spretnost in povezava z naravo."
},

{
    maya:"Lamat",
    slovene:"Zvezda",
    meaning:"Harmonija, lepota in ustvarjalnost."
},

{
    maya:"Muluk",
    slovene:"Voda",
    meaning:"Čustva, čiščenje in pretok."
},

{
    maya:"Ok",
    slovene:"Pes",
    meaning:"Ljubezen, zvestoba in srčna povezava."
},

{
    maya:"Chuwen",
    slovene:"Opica",
    meaning:"Igra, ustvarjalnost in mojstrstvo."
},

{
    maya:"Eb'",
    slovene:"Trava / Pot",
    meaning:"Življenjska pot, rast in izkušnja."
},

{
    maya:"B'en",
    slovene:"Trst / Koruza",
    meaning:"Vodstvo, steber in blagoslov."
},

{
    maya:"Ix",
    slovene:"Jaguar",
    meaning:"Intuicija, skrivnost in notranja moč."
},

{
    maya:"Men",
    slovene:"Orel",
    meaning:"Vizija, širina pogleda in svoboda."
},

{
    maya:"K'ib'",
    slovene:"Sova",
    meaning:"Modrost, spomin in odpuščanje."
},

{
    maya:"Kab'an",
    slovene:"Zemlja",
    meaning:"Gibanje, zavest in razvoj."
},

{
    maya:"Etz'nab'",
    slovene:"Kremen",
    meaning:"Resnica, jasnost in ogledalo."
},

{
    maya:"Kawak",
    slovene:"Nevihta",
    meaning:"Preobrazba, obnova in čiščenje."
},

{
    maya:"Ajaw",
    slovene:"Sonce",
    meaning:"Razsvetljenje, mojstrstvo in izpolnitev."
}

];




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



    const signNumber =
    ((kin - 1) % 20);



    const sign =
    tzolkinSigns[signNumber];



    return {


        kin,

        tone,


        signNumber: signNumber + 1,


        signMaya: sign.maya,


        signSlovenian: sign.slovene,


        meaning: sign.meaning


    };


}