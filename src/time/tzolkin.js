/* ==========================================
BLINKITA TIME™
TRADITIONAL TZOLK'IN ENGINE
========================================== */



const tzolkinNumbers = [


{
number:1,
image:"/images/maya-simboli/stevilo1.jpg",
meaning:"Začetek, rojstvo namere in prva iskra ustvarjanja."
},


{
number:2,
image:"/images/maya-simboli/stevilo2.jpg",
meaning:"Dvojnost, ravnovesje in iskanje harmonije."
},


{
number:3,
image:"/images/maya-simboli/stevilo3.jpg",
meaning:"Gibanje, aktivacija in uresničevanje energije."
},


{
number:4,
image:"/images/maya-simboli/stevilo4.jpg",
meaning:"Oblika, struktura in postavljanje temeljev."
},


{
number:5,
image:"/images/maya-simboli/stevilo5.jpg",
meaning:"Moč, usmeritev in notranji center."
},


{
number:6,
image:"/images/maya-simboli/stevilo6.jpg",
meaning:"Ritem, ravnovesje in organizacija."
},


{
number:7,
image:"/images/maya-simboli/stevilo7.jpg",
meaning:"Uglasitev, notranji vpogled in povezava."
},


{
number:8,
image:"/images/maya-simboli/stevilo8.jpg",
meaning:"Ravnovesje, integracija in harmonija."
},


{
number:9,
image:"/images/maya-simboli/stevilo9.jpg",
meaning:"Vztrajnost, širjenje in uresničevanje namere."
},


{
number:10,
image:"/images/maya-simboli/stevilo10.jpg",
meaning:"Manifestacija in utelešenje energije."
},


{
number:11,
image:"/images/maya-simboli/stevilo11.jpg",
meaning:"Preobrazba, osvoboditev in sprememba."
},


{
number:12,
image:"/images/maya-simboli/stevilo12.jpg",
meaning:"Sodelovanje, povezovanje in modrost skupnosti."
},


{
number:13,
image:"/images/maya-simboli/stevilo13.jpg",
meaning:"Zaključek cikla, prisotnost in povezava z večnostjo."
}


];






const tzolkinSigns = [


{
maya:"Imix",
slovene:"Krokodil",
image:"/images/maya-simboli/imix-cb.jpg",
meaning:"Izvorna ustvarjalna sila, rojstvo in začetek."
},


{
maya:"Ik'",
slovene:"Veter",
image:"/images/maya-simboli/iq-veter.jpg",
meaning:"Dih življenja, gibanje in komunikacija."
},


{
maya:"Ak'b'al",
slovene:"Noč",
image:"/images/maya-simboli/maya-akbal.jpg",
meaning:"Sanje, notranja modrost in skrivnosti."
},


{
maya:"K'an",
slovene:"Semeno",
image:"/images/maya-simboli/maya-kan.jpg",
meaning:"Rast, potencial in uresničevanje."
},


{
maya:"Chikchan",
slovene:"Kača",
image:"/images/maya-simboli/maya-chicchan.jpg",
meaning:"Življenjska sila, instinkt in prebujenje."
},


{
maya:"Kimi",
slovene:"Smrt",
image:"/images/maya-simboli/maya-cimi.jpg",
meaning:"Preobrazba, zaključek in nov začetek."
},


{
maya:"Manik'",
slovene:"Jelen",
image:"/images/maya-simboli/maya-manik.jpg",
meaning:"Zdravljenje, spretnost in povezava z naravo."
},


{
maya:"Lamat",
slovene:"Zvezda",
image:"/images/maya-simboli/maya-lamat.jpg",
meaning:"Harmonija, lepota in ustvarjalnost."
},


{
maya:"Muluk",
slovene:"Voda",
image:"/images/maya-simboli/maya-muluc.jpg",
meaning:"Čustva, čiščenje in pretok."
},


{
maya:"Ok",
slovene:"Pes",
image:"/images/maya-simboli/maya-oc.jpg",
meaning:"Ljubezen, zvestoba in srčna povezava."
},


{
maya:"Chuwen",
slovene:"Opica",
image:"/images/maya-simboli/maya-chuen.jpg",
meaning:"Igra, ustvarjalnost in mojstrstvo."
},


{
maya:"Eb'",
slovene:"Trava / Pot",
image:"/images/maya-simboli/maya-eb.jpg",
meaning:"Življenjska pot, rast in izkušnja."
},


{
maya:"B'en",
slovene:"Trst",
image:"/images/maya-simboli/maya-ben.jpg",
meaning:"Vodstvo, steber in povezava z višjim namenom."
},


{
maya:"Ix",
slovene:"Jaguar",
image:"/images/maya-simboli/maya-ix.jpg",
meaning:"Intuicija, skrivnost in notranja moč."
},


{
maya:"Men",
slovene:"Orel",
image:"/images/maya-simboli/maya-men.jpg",
meaning:"Vizija, širina pogleda in svoboda."
},


{
maya:"K'ib'",
slovene:"Sova",
image:"/images/maya-simboli/maya-cib.jpg",
meaning:"Modrost, spomin in odpuščanje."
},


{
maya:"Kab'an",
slovene:"Zemlja",
image:"/images/maya-simboli/maya-caban.jpg",
meaning:"Gibanje, zavest in razvoj."
},


{
maya:"Etz'nab'",
slovene:"Kremen",
image:"/images/maya-simboli/maya-etznab.jpg",
meaning:"Resnica, jasnost in ogledalo."
},


{
maya:"Kawak",
slovene:"Nevihta",
image:"/images/maya-simboli/maya-cauac.jpg",
meaning:"Obnova, čiščenje in preobrazba."
},


{
maya:"Ajaw",
slovene:"Sonce",
image:"/images/maya-simboli/maya-ahau.jpg",
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



const numberValue =
((kin-1)%13)+1;



const signIndex =
((kin-1)%20);



const number =
tzolkinNumbers[numberValue-1];



const sign =
tzolkinSigns[signIndex];




return {


kin,


number:numberValue,


numberImage:number.image,


numberMeaning:number.meaning,



signNumber:signIndex+1,


signMaya:sign.maya,


signSlovenian:sign.slovene,


signImage:sign.image,


meaning:sign.meaning


};



}