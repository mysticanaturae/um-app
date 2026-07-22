/* ==========================================
BLINKITA TIME™
TRADITIONAL TZOLK'IN ENGINE
========================================== */


const tzolkinNumbers = [

{
number:1,
image:"stevilo1.jpg",
meaning:"Začetek, rojstvo namere in prva iskra ustvarjanja."
},

{
number:2,
image:"stevilo2.jpg",
meaning:"Ravnovesje, dvojnost in iskanje harmonije."
},

{
number:3,
image:"stevilo3.jpg",
meaning:"Gibanje, aktivacija in razvoj energije."
},

{
number:4,
image:"stevilo4.jpg",
meaning:"Oblika, struktura in ustvarjanje temeljev."
},

{
number:5,
image:"stevilo5.jpg",
meaning:"Moč, središče in usmerjanje energije."
},

{
number:6,
image:"stevilo6.jpg",
meaning:"Ritem, ravnovesje in organizacija."
},

{
number:7,
image:"stevilo7.jpg",
meaning:"Uglasitev, notranji vpogled in povezava."
},

{
number:8,
image:"stevilo8.jpg",
meaning:"Harmonija, integracija in ravnovesje."
},

{
number:9,
image:"stevilo9.jpg",
meaning:"Vztrajnost, namen in uresničevanje."
},

{
number:10,
image:"stevilo10.jpg",
meaning:"Manifestacija in utelešenje energije."
},

{
number:11,
image:"stevilo11.jpg",
meaning:"Preobrazba, osvoboditev in sprememba."
},

{
number:12,
image:"stevilo12.jpg",
meaning:"Sodelovanje, povezovanje in modrost skupnosti."
},

{
number:13,
image:"stevilo13.jpg",
meaning:"Zaključek cikla, prisotnost in povezava z večnostjo."
}

];






const tzolkinSigns = [

{
maya:"Imix",
slovene:"Krokodil",
image:"imix-cb.jpg",
meaning:"Izvorna ustvarjalna sila, rojstvo in začetek."
},

{
maya:"Ik'",
slovene:"Veter",
image:"maya-ik.jpg",
meaning:"Dih življenja, gibanje in komunikacija."
},

{
maya:"Ak'b'al",
slovene:"Noč",
image:"maya-akbal.jpg",
meaning:"Sanje, notranja modrost in skrivnosti."
},

{
maya:"K'an",
slovene:"Semeno",
image:"maya-kan.jpg",
meaning:"Rast, potencial in uresničevanje."
},

{
maya:"Chikchan",
slovene:"Kača",
image:"maya-chicchan.jpg",
meaning:"Življenjska sila, instinkt in prebujenje."
},

{
maya:"Kimi",
slovene:"Smrt",
image:"maya-cimi.jpg",
meaning:"Preobrazba, zaključek in nov začetek."
},

{
maya:"Manik'",
slovene:"Jelen",
image:"maya-manik.jpg",
meaning:"Zdravljenje, spretnost in povezava z naravo."
},

{
maya:"Lamat",
slovene:"Zajec / Zvezda",
image:"maya-lamat.jpg",
meaning:"Harmonija, lepota in ustvarjalnost."
},

{
maya:"Muluk",
slovene:"Voda",
image:"maya-muluc.jpg",
meaning:"Čustva, čiščenje in pretok."
},

{
maya:"Ok",
slovene:"Pes",
image:"maya-oc.jpg",
meaning:"Ljubezen, zvestoba in srčna povezava."
},

{
maya:"Chuwen",
slovene:"Opica",
image:"maya-chuen.jpg",
meaning:"Igra, ustvarjalnost in mojstrstvo."
},

{
maya:"Eb'",
slovene:"Pot",
image:"maya-eb.jpg",
meaning:"Življenjska pot, rast in izkušnja."
},

{
maya:"B'en",
slovene:"Trst",
image:"maya-ben.jpg",
meaning:"Vodstvo, steber in povezava z namenom."
},

{
maya:"Ix",
slovene:"Jaguar",
image:"maya-ix.jpg",
meaning:"Intuicija, skrivnost in notranja moč."
},

{
maya:"Men",
slovene:"Orel",
image:"maya-men.jpg",
meaning:"Vizija, širina pogleda in svoboda."
},

{
maya:"K'ib'",
slovene:"Sova",
image:"maya-cib.jpg",
meaning:"Modrost, spomin in odpuščanje."
},

{
maya:"Kab'an",
slovene:"Zemlja",
image:"maya-caban.jpg",
meaning:"Gibanje, zavest in razvoj."
},

{
maya:"Etz'nab'",
slovene:"Kremen",
image:"maya-etznab.jpg",
meaning:"Resnica, jasnost in ogledalo."
},

{
maya:"Kawak",
slovene:"Nevihta",
image:"maya-cauac.jpg",
meaning:"Obnova, čiščenje in preobrazba."
},

{
maya:"Ajaw",
slovene:"Sonce",
image:"maya-ahau.jpg",
meaning:"Razsvetljenje, življenje in izpolnitev."
}

];







export function calculateTzolkinKin(dateInput){


const dateParts =
dateInput.split("-");


const date =
new Date(Date.UTC(
parseInt(dateParts[0]),
parseInt(dateParts[1])-1,
parseInt(dateParts[2])
));


const refDate =
new Date(Date.UTC(1800,0,1));


const refKin = 114;


const msPerDay =
1000 * 60 * 60 * 24;


const daysSince =
Math.floor(
(date-refDate)/msPerDay
);



const kin =
((refKin-1+daysSince)%260+260)%260+1;


return kin;

}









export function getTzolkinData(dateInput){


const kin =
calculateTzolkinKin(dateInput);



const number =
((kin-1)%13)+1;



const signNumber =
((kin-1)%20)+1;



const tzolkinNumber =
tzolkinNumbers[number-1];


const sign =
tzolkinSigns[signNumber-1];






return {


kin,



// tradicionalno število Tzolk'in
number,


numberImage:
tzolkinNumber.image,


numberMeaning:
tzolkinNumber.meaning,



signNumber,


signMaya:
sign.maya,


signSlovenian:
sign.slovene,


signImage:
sign.image,


meaning:
sign.meaning


};


}