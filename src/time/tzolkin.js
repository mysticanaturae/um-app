/* ==========================================
BLINKITA TIME™
TRADITIONAL TZOLK'IN ENGINE
========================================== */



const tzolkinNumbers = [

{
number:1,
meaning:"Začetek, rojstvo namere in prva iskra ustvarjanja."
},

{
number:2,
meaning:"Dvojnost, ravnovesje in iskanje harmonije."
},

{
number:3,
meaning:"Gibanje, aktivacija in uresničevanje energije."
},

{
number:4,
meaning:"Oblika, struktura in postavljanje temeljev."
},

{
number:5,
meaning:"Moč, usmeritev in notranji center."
},

{
number:6,
meaning:"Ritem, ravnovesje in organizacija."
},

{
number:7,
meaning:"Uglasitev, notranji vpogled in povezava."
},

{
number:8,
meaning:"Ravnovesje, integracija in harmonija."
},

{
number:9,
meaning:"Vztrajnost, širjenje in uresničevanje namere."
},

{
number:10,
meaning:"Manifestacija in utelešenje energije."
},

{
number:11,
meaning:"Preobrazba, osvoboditev in sprememba."
},

{
number:12,
meaning:"Sodelovanje, povezovanje in modrost skupnosti."
},

{
number:13,
meaning:"Zaključek cikla, prisotnost in povezava z večnostjo."
}

];





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
slovene:"Trst",
meaning:"Vodstvo, steber in povezava z višjim namenom."
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
meaning:"Obnova, čiščenje in preobrazba."
},

{
maya:"Ajaw",
slovene:"Sonce",
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



const tone =
((kin-1)%13)+1;



const signIndex =
((kin-1)%20);



const sign =
tzolkinSigns[signIndex];



const number =
tzolkinNumbers[tone-1];





return {


kin,


tone,


toneMeaning:
number.meaning,


signNumber:
signIndex+1,


signMaya:
sign.maya,


signSlovenian:
sign.slovene,


meaning:
sign.meaning


};



}