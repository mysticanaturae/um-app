import{t as e}from"./client-BkE-LfWj.js";var t=[{number:1,image:`stevilo1.jpg`,meaning:`Začetek, rojstvo namere in prva iskra ustvarjanja.`},{number:2,image:`stevilo2.jpg`,meaning:`Ravnovesje, dvojnost in iskanje harmonije.`},{number:3,image:`stevilo3.jpg`,meaning:`Gibanje, aktivacija in razvoj energije.`},{number:4,image:`stevilo4.jpg`,meaning:`Oblika, struktura in ustvarjanje temeljev.`},{number:5,image:`stevilo5.jpg`,meaning:`Moč, središče in usmerjanje energije.`},{number:6,image:`stevilo6.jpg`,meaning:`Ritem, ravnovesje in organizacija.`},{number:7,image:`stevilo7.jpg`,meaning:`Uglasitev, notranji vpogled in povezava.`},{number:8,image:`stevilo8.jpg`,meaning:`Harmonija, integracija in ravnovesje.`},{number:9,image:`stevilo9.jpg`,meaning:`Vztrajnost, namen in uresničevanje.`},{number:10,image:`stevilo10.jpg`,meaning:`Manifestacija in utelešenje energije.`},{number:11,image:`stevilo11.jpg`,meaning:`Preobrazba, osvoboditev in sprememba.`},{number:12,image:`stevilo12.jpg`,meaning:`Sodelovanje, povezovanje in modrost skupnosti.`},{number:13,image:`stevilo13.jpg`,meaning:`Zaključek cikla, prisotnost in povezava z večnostjo.`}],n=[{maya:`Imix`,slovene:`Krokodil`,image:`maya-imix-rdeca.png`,meaning:`Izvorna ustvarjalna sila, rojstvo in začetek.`},{maya:`Ik'`,slovene:`Veter`,image:`maya-ik-bela.png`,meaning:`Dih življenja, gibanje in komunikacija.`},{maya:`Ak'b'al`,slovene:`Noč`,image:`maya-akbal-modra.png`,meaning:`Sanje, notranja modrost in skrivnosti.`},{maya:`K'an`,slovene:`Semeno`,image:`maya-kan-rumena.png`,meaning:`Rast, potencial in uresničevanje.`},{maya:`Chikchan`,slovene:`Kača`,image:`maya-chicchan-rdeca.png`,meaning:`Življenjska sila, instinkt in prebujenje.`},{maya:`Kimi`,slovene:`Smrt`,image:`maya-cimi-bela.png`,meaning:`Preobrazba, zaključek in nov začetek.`},{maya:`Manik'`,slovene:`Jelen`,image:`maya-manik-modra.png`,meaning:`Zdravljenje, spretnost in povezava z naravo.`},{maya:`Lamat`,slovene:`Zvezda`,image:`maya-lamat-rumena.png`,meaning:`Harmonija, lepota in ustvarjalnost.`},{maya:`Muluk`,slovene:`Voda`,image:`maya-muluc-rdeca.png`,meaning:`Čustva, čiščenje in pretok.`},{maya:`Ok`,slovene:`Pes`,image:`maya-oc-bela.png`,meaning:`Ljubezen, zvestoba in srčna povezava.`},{maya:`Chuwen`,slovene:`Opica`,image:`maya-chuen-modra.png`,meaning:`Igra, ustvarjalnost in mojstrstvo.`},{maya:`Eb'`,slovene:`Pot`,image:`maya-eb-rumena.png`,meaning:`Življenjska pot, rast in izkušnja.`},{maya:`B'en`,slovene:`Trst`,image:`maya-ben-rdeca.png`,meaning:`Vodstvo, steber in povezava z namenom.`},{maya:`Ix`,slovene:`Jaguar`,image:`maya-ix-bela.png`,meaning:`Intuicija, skrivnost in notranja moč.`},{maya:`Men`,slovene:`Orel`,image:`maya-men-modra.png`,meaning:`Vizija, širina pogleda in svoboda.`},{maya:`K'ib'`,slovene:`Sova`,image:`maya-cib-rumena.png`,meaning:`Modrost, spomin in odpuščanje.`},{maya:`Kab'an`,slovene:`Zemlja`,image:`maya-caban-rdeca.png`,meaning:`Gibanje, zavest in razvoj.`},{maya:`Etz'nab'`,slovene:`Kremen`,image:`maya-etznab-belo.png`,meaning:`Resnica, jasnost in ogledalo.`},{maya:`Kawak`,slovene:`Nevihta`,image:`maya-cauac-modra.png`,meaning:`Obnova, čiščenje in preobrazba.`},{maya:`Ajaw`,slovene:`Sonce`,image:`maya-ahau-rumena.png`,meaning:`Razsvetljenje, življenje in izpolnitev.`}];function r(e){let t=e.split(`-`),n=new Date(Date.UTC(parseInt(t[0]),parseInt(t[1])-1,parseInt(t[2]))),r=new Date(Date.UTC(1800,0,1));return((113+Math.floor((n-r)/(1e3*60*60*24)))%260+260)%260+1}function i(e){let i=r(e),a=(i-1)%13+1,o=(i-1)%20+1,s=t[a-1],c=n[o-1];return{kin:i,number:a,numberImage:s.image,numberMeaning:s.meaning,signNumber:o,signMaya:c.maya,signSlovenian:c.slovene,signImage:c.image,meaning:c.meaning}}var a={1:{message:`Danes se odpira prvi dih ustvarjanja. Krokodil nosi spomin prvotnega začetka — dovoli novi nameri, da se rodi iz tvoje notranje tišine.`},2:{message:`Danes te Veter uči ravnovesja med mislijo in srcem. Poslušaj subtilne premike in dovoli življenju, da ti pokaže pravo smer.`},3:{message:`Noč odpira prostor notranjim sanjam. Tvoja domišljija je seme prihodnosti — danes prisluhni modrosti, ki prihaja iz globine.`},4:{message:`Semeno v tebi nosi potencial. Danes postavi temelje za nekaj, kar želi rasti počasi, naravno in v popolnem času.`},5:{message:`Kača prebuja življenjsko silo. Danes začuti svojo moč, svoje telo in ogenj ustvarjalne energije, ki te vodi naprej.`},6:{message:`Preobrazba prihaja skozi sprejemanje. Smrt kot učiteljica te vabi, da spustiš staro in narediš prostor novemu.`},7:{message:`Jelen te spominja na nežno moč. Danes zdravi, ustvarjaj in hodi po poti z zavedanjem svoje povezanosti z naravo.`},8:{message:`Zvezda prinaša harmonijo in lepoto. Danes naj tvoje ustvarjanje postane odsev notranjega ravnovesja.`},9:{message:`Voda čisti in odpira pretok. Dovoli čustvom, da se premaknejo, saj skozi njih prihaja nova jasnost.`},10:{message:`Pes odpira srčno pot. Danes zaupaj vezi, ljubezni in zvestobi, ki povezujejo tvoj svet.`},11:{message:`Opica prinaša igrivost ustvarjalca. Danes ne išči popolnosti — dovoli radosti, da prebudi tvojo izvirnost.`},12:{message:`Pot se razkriva korak za korakom. Danes spoštuj svojo življenjsko izkušnjo in modrost, ki jo prinaša vsaka pot.`},13:{message:`Trst te povezuje z notranjim stebrom. Danes stoj pokončno v svoji resnici in zaupanju.`},14:{message:`Jaguar odpira vrata intuicije. Danes zaupaj notranjemu vedenju, ki vidi tudi takrat, ko oči še ne vidijo.`},15:{message:`Orel dviguje pogled nad vsakodnevne skrbi. Danes poglej širše in opazuj možnosti, ki se odpirajo nad starimi mejami.`},16:{message:`Sova prinaša modrost preteklosti. Danes se spomni svojih izkušenj in jih spremeni v svetlobo za prihodnost.`},17:{message:`Zemlja te vabi v gibanje in rast. Danes poslušaj ritem življenja in sledi poti razvoja.`},18:{message:`Kremen pokaže jasno ogledalo. Danes sprejmi resnico, ki ti pomaga osvoboditi svojo moč.`},19:{message:`Nevihta prinaša čiščenje in obnovo. Dovoli spremembam, da odstranijo tisto, kar ne podpira več tvoje poti.`},20:{message:`Sonce osvetljuje tvojo zavest. Danes praznuj življenje in svojo sposobnost ustvarjati svetlobo.`},21:{message:`Krokodil z močjo števila 8 odpira prostor nove harmonije. Tvoja ustvarjalna sila se danes usklajuje z večjim tokom življenja.`},22:{message:`Veter te uči prilagodljivosti. Danes naj tvoje besede nosijo resnico in tvoje misli svobodo.`},23:{message:`Noč odpira skrivne prostore tvoje domišljije. Kar danes zasnuješ v tišini, lahko nekoč postane resničnost.`},24:{message:`Semeno raste skozi potrpežljivost. Neguj svoje ideje z ljubeznijo in zaupaj naravnemu času.`},25:{message:`Kača prebudi pogum. Danes se premikaj z življenjsko silo in zaupaj svojemu instinktu.`},26:{message:`Smrt odpira vrata preobrazbe. Nek zaključek danes ustvarja prostor za novo rojstvo.`},27:{message:`Jelen prinaša zdravljenje skozi nežnost. Danes neguj sebe in svet okoli sebe z odprtim srcem.`},28:{message:`Zvezda ustvarja most med lepoto in ravnovesjem. Danes dovoli svoji kreativnosti, da zasije.`},29:{message:`Voda odpira tok občutkov. Danes naj te intuicija vodi skozi notranje valove.`},30:{message:`Pes povezuje srca. Danes je dan za iskreno povezavo in zaupanje.`},31:{message:`Opica prebuja ustvarjalno iskro. Igra, radost in domišljija so danes tvoji zavezniki.`},32:{message:`Pot te uči modrosti izkušenj. Vsak korak, ki si ga naredil, je del tvoje zgodbe.`},33:{message:`Trst utrjuje tvojo notranjo moč. Danes zaupaj svojemu stebru in namenu.`},34:{message:`Jaguar odpira globoke notranje prostore. Danes poslušaj tišino, kjer prebiva tvoja moč.`},35:{message:`Orel širi tvojo vizijo. Danes si dovoli videti prihodnost z očmi ustvarjalca.`},36:{message:`Sova prinaša modrost spomina. Danes uporabi svoje izkušnje kot svetilnik.`},37:{message:`Zemlja te vrača v prisotnost. Danes začuti povezavo med svojim telesom, srcem in planetom.`},38:{message:`Kremen razkriva jasnost. Danes se odloči za resnico, ki osvobaja.`},39:{message:`Nevihta prebuja prenovo. Kar se premika, pripravlja prostor za novo obliko življenja.`},40:{message:`Sonce prinaša izpolnitev. Danes sij brez potrebe po dokazovanju — tvoja svetloba je dovolj.`},41:{message:`Krokodil odpira novo ustvarjalno spiralo. Danes zasadi seme prihodnosti z zavestnim namenom.`},42:{message:`Veter prinaša nove ideje. Dovoli navdihu, da pride skozi odprtost in gibanje.`},43:{message:`Noč te vodi v notranji svet. Danes so tvoje sanje vrata do novih spoznanj.`},44:{message:`Semeno raste skozi vero. Danes neguj tisto, kar želi postati del tvojega življenja.`},45:{message:`Kača prebuja tvojo življenjsko energijo. Danes se poveži s svojo strastjo in pogumom.`},46:{message:`Preobrazba osvobaja. Danes spusti breme, ki ga ne potrebuješ več nositi.`},47:{message:`Jelen prinaša zdravljenje skozi prisotnost. Danes hodi nežno in zavestno.`},48:{message:`Zvezda ustvarja lepoto iz notranjega ravnovesja. Danes naj tvoja dejanja odsevajo tvojo dušo.`},49:{message:`Voda čisti stare tokove. Danes dovoli novemu občutku svobode, da se rodi.`},50:{message:`Pes odpira srčni portal. Danes naj ljubezen postane tvoja najmočnejša povezovalna sila.`},51:{message:`Opica s tokom števila 12 prinaša modrost igrivosti. Danes se poveži z ljudmi skozi radost, ustvarjalnost in lahkotnost srca.`},52:{message:`Pot zaključuje prvi cikel in odpira novo razumevanje. Danes spoštuj svojo prehojeno pot in modrost, ki si jo pridobil.`},53:{message:`Trst stoji kot steber zavesti. Danes se spomni svoje notranje stabilnosti in namena, ki te vodi skozi življenje.`},54:{message:`Jaguar šepeta skozi intuicijo. Danes zaupaj nevidnim znamenjem in notranjemu vedenju, ki te usmerja.`},55:{message:`Orel dviguje tvojo zavest visoko nad omejitve. Danes si oglej svojo pot z večje perspektive in prepoznaj širše možnosti.`},56:{message:`Sova prinaša spomin prednikov in notranjo modrost. Danes naj izkušnje postanejo tvoja svetilka.`},57:{message:`Zemlja te uči gibanja v skladu z naravnimi ritmi. Danes se uskladi s tokom življenja.`},58:{message:`Kremen razkriva resnico brez olepševanja. Danes sprejmi jasnost, ki ti odpira vrata svobode.`},59:{message:`Nevihta prinaša čiščenje stare energije. Danes dovoli spremembi, da pripravi prostor za nov začetek.`},60:{message:`Sonce osvetljuje zaključek enega cikla. Danes praznuj svojo rast in moč ustvarjanja.`},61:{message:`Krokodil odpira novo seme ustvarjanja. Danes se vprašaj, katero novo življenje želi skozi tebe nastati.`},62:{message:`Veter prinaša povezovanje skozi besedo in dih. Danes naj tvoja komunikacija ustvarja mostove.`},63:{message:`Noč odpira vrata notranje vizije. Danes se obrni vase in odkrij odgovore, ki že prebivajo v tebi.`},64:{message:`Semeno z močjo števila 12 kliče po sodelovanju. Danes deli svoje darove in opazuj, kako rastejo skozi skupnost.`},65:{message:`Kača prebuja ustvarjalni ogenj. Danes se premikaj pogumno in s polno prisotnostjo v telesu.`},66:{message:`Smrt prinaša osvobajajočo preobrazbo. Danes odloži staro zgodbo in dovoli novemu poglavju, da se začne.`},67:{message:`Jelen te vodi skozi nežno zdravljenje. Danes je moč v počasnosti, sočutju in pozornosti.`},68:{message:`Zvezda ustvarja harmonijo med tvojo notranjostjo in svetom. Danes ustvari nekaj lepega.`},69:{message:`Voda odpira čustveni pretok. Danes poslušaj svoje občutke kot vodilo duše.`},70:{message:`Pes prinaša zvestobo srca. Danes neguj odnose, ki temeljijo na resnici in ljubezni.`},71:{message:`Opica te spominja, da je ustvarjanje tudi igra. Danes se osvobodi preveljne resnosti in dovoli navdihu plesati.`},72:{message:`Pot razkriva novo razumevanje življenjske poti. Danes vsak korak nosi pomembno sporočilo.`},73:{message:`Trst utrjuje tvojo povezavo z namenom. Danes zaupaj svoji notranji pokončnosti.`},74:{message:`Jaguar odpira vrata skrivnega znanja. Danes sledi intuiciji, ki prihaja iz globine.`},75:{message:`Orel s številom 10 prinaša uresničevanje vizije. Danes lahko ideja dobi obliko.`},76:{message:`Sova te povezuje s starodavno modrostjo. Danes se spomni, kaj ti je življenje že pokazalo.`},77:{message:`Zemlja spodbuja razvoj in premik. Danes naredi korak proti tistemu, kar želiš ustvariti.`},78:{message:`Kremen ti ponuja jasno ogledalo. Danes poglej svojo resnico z odprtim srcem.`},79:{message:`Nevihta prebuja moč obnove. Danes se ne boj spremembe — v njej je nova energija.`},80:{message:`Sonce osvetljuje tvojo notranjo celovitost. Danes prepoznaj svetlobo, ki jo nosiš.`},81:{message:`Krokodil odpira ustvarjalni začetek novega kroga. Danes je tvoja namera seme prihodnosti.`},82:{message:`Veter prinaša ravnovesje med mislijo in dejanjem. Danes govori iz prostora zavesti.`},83:{message:`Noč te vodi v globine domišljije. Danes se rodi nova vizija iz tvoje notranjosti.`},84:{message:`Semeno kliče po strukturi in negovanju. Danes naredi prostor za rast svojih idej.`},85:{message:`Kača prinaša moč preobrazbe. Danes svojo energijo usmeri v ustvarjanje.`},86:{message:`Smrt odpira vrata novega rojstva. Danes osvobodi tisto, kar je zaključilo svojo pot.`},87:{message:`Jelen prinaša ravnovesje skozi nežnost. Danes zdravi z ljubeznijo in prisotnostjo.`},88:{message:`Zvezda ustvarja popolnost skozi harmonijo. Danes naj tvoja lepota zasije naravno.`},89:{message:`Voda čisti stare občutke. Danes dovoli srcu, da ponovno steče.`},90:{message:`Pes povezuje skozi zaupanje. Danes je moč v iskreni bližini.`},91:{message:`Opica odpira vrata ustvarjalnega mojstrstva. Danes si dovoli eksperimentirati.`},92:{message:`Pot te uči modrosti izkušenj. Danes je vsaka izkušnja del tvoje rasti.`},93:{message:`Trst utrjuje tvojo notranjo moč. Danes stojiš na temelju svoje resnice.`},94:{message:`Jaguar prebuja skrito moč. Danes poslušaj tihe glasove intuicije.`},95:{message:`Orel širi obzorja. Danes glej preko trenutnih omejitev in začuti večjo sliko.`},96:{message:`Sova prinaša modrost spomina. Danes preoblikuj preteklost v darilo.`},97:{message:`Zemlja odpira nov razvojni korak. Danes sledi ritmu svoje rasti.`},98:{message:`Kremen razkriva notranjo jasnost. Danes izberi resnico, ki te osvobaja.`},99:{message:`Nevihta čisti pot novemu življenju. Danes se sprememba dogaja v tvojo podporo.`},100:{message:`Sonce zaključuje cikel svetlobe. Danes praznuj svojo moč, prisotnost in ustvarjalnost.`},101:{message:`Krokodil s številom 10 odpira prostor rojstvu novih oblik. Danes se tvoja ustvarjalna iskra lahko spremeni v resničnost.`},102:{message:`Veter s številom 11 osvobaja stare misli in odpira nov tok izražanja. Naj tvoje besede nosijo resnico.`},103:{message:`Noč s številom 12 prinaša modrost notranjega sveta. Danes poslušaj tihe odgovore svoje duše.`},104:{message:`Semeno s številom 13 zaključuje cikel rasti. Kar si dolgo negoval, je pripravljeno pokazati svoj potencial.`},105:{message:`Kača s številom 1 prebuja prvinsko življenjsko silo. Začni znova z zaupanjem v svojo notranjo moč.`},106:{message:`Smrt s številom 2 prinaša ravnovesje med spuščanjem in sprejemanjem nove poti.`},107:{message:`Jelen s številom 3 zdravi skozi gibanje in zavestno delovanje. Danes naredi korak, ki podpira tvoje srce.`},108:{message:`Zvezda s številom 4 ustvarja lepoto skozi red in jasnost. Tvoja vizija dobiva svojo obliko.`},109:{message:`Voda s številom 5 prinaša moč čustvenega toka. Dovoli si čutiti in s tem najti svojo moč.`},110:{message:`Pes s številom 6 odpira prostor ljubezni in povezovanja. Danes so odnosi tvoje ogledalo.`},111:{message:`Opica s številom 7 prebuja igrivost ustvarjalca. Modrost se skriva tudi v veselju.`},112:{message:`Pot s številom 8 te vodi v ravnovesje izkušenj. Vsak korak je del tvoje večje zgodbe.`},113:{message:`Trst s številom 9 krepi tvojo notranjo pokončnost. Zaupaj svojemu vodstvu.`},114:{message:`Jaguar s številom 10 odpira vrata skrite moči. Tvoja intuicija danes vidi globlje.`},115:{message:`Orel s številom 11 širi obzorje in osvobaja omejitve. Poglej življenje z višje perspektive.`},116:{message:`Sova s številom 12 združuje modrost in skupnost. Danes se znanje širi skozi povezovanje.`},117:{message:`Zemlja s številom 13 zaključuje cikel učenja. Sprejmi spremembe kot del svoje poti.`},118:{message:`Kremen s številom 1 prinaša jasno namero. Resnica je temelj novega začetka.`},119:{message:`Nevihta s številom 2 preoblikuje staro energijo v novo ravnovesje. Dovoli spremembi, da te očisti.`},120:{message:`Sonce s številom 3 prebuja ustvarjalno svetlobo. Danes deli svojo toplino s svetom.`},121:{message:`Krokodil s številom 4 gradi temelje novega cikla. Ustvari prostor, kjer lahko tvoje ideje zrastejo.`},122:{message:`Veter s številom 5 usmerja moč tvojega glasu. Besede danes lahko odpirajo vrata.`},123:{message:`Noč s številom 6 prinaša notranji mir in ravnovesje. V tišini se skriva odgovor.`},124:{message:`Semeno s številom 7 se uglasi z ritmom rasti. Zaupaj času, ki ga potrebuje tvoja vizija.`},125:{message:`Kača s številom 8 povezuje telo, moč in zavest. Začuti energijo življenja v sebi.`},126:{message:`Smrt s številom 9 odpira prostor preobrazbi. Staro odhaja, da se lahko rodi novo.`},127:{message:`Jelen s številom 10 prinaša zdravljenje skozi utelešenje. Tvoja prisotnost je dar.`},128:{message:`Zvezda s številom 11 osvobaja ustvarjalni izraz. Dovoli svoji lepoti zasijati.`},129:{message:`Voda s številom 12 povezuje srca. Danes zdravljenje prihaja skozi sočutje.`},130:{message:`Pes s številom 13 zaključuje cikel ljubezni in zvestobe. Ohrani odprto srce.`},131:{message:`Opica s številom 1 odpira novo ustvarjalno igro. Naj te vodi radovednost.`},132:{message:`Pot s številom 2 išče ravnovesje med smerjo in svobodo. Poslušaj svoj notranji kompas.`},133:{message:`Trst s številom 3 aktivira tvoje vodstvo. Danes naredi korak proti svoji viziji.`},134:{message:`Jaguar s številom 4 ustvarja stabilnost skozi intuicijo. Tvoja notranja moč pozna pot.`},135:{message:`Orel s številom 5 prinaša širino in moč pogleda. Dvigni se nad stare omejitve.`},136:{message:`Sova s številom 6 ureja notranje znanje. Modrost raste skozi ravnovesje.`},137:{message:`Zemlja s številom 7 povezuje tvojo zavest z naravnim tokom. Prisluhni ritmu življenja.`},138:{message:`Kremen s številom 8 razkriva jasnost. Kar je bilo skrito, danes lahko postane vidno.`},139:{message:`Nevihta s številom 9 prinaša obnovo. Preobrazba te vodi bližje tvoji resnici.`},140:{message:`Sonce s številom 10 osvetljuje tvoje ustvarjanje. Tvoja energija se uteleša v svetu.`},141:{message:`Krokodil s številom 11 osvobaja star način ustvarjanja. Rodijo se nove možnosti.`},142:{message:`Veter s številom 12 povezuje ljudi skozi komunikacijo. Deli svojo resnico z odprtim srcem.`},143:{message:`Noč s številom 13 zaključuje cikel notranjega raziskovanja. Sanje nosijo sporočilo.`},144:{message:`Semeno s številom 1 začenja novo rast. Danes posadi namero, ki jo želiš negovati.`},145:{message:`Kača s številom 2 prinaša ravnovesje življenjske sile. Naj telo in duh sodelujeta.`},146:{message:`Smrt s številom 3 odpira gibanje spremembe. Sprejmi novo poglavje brez strahu.`},147:{message:`Jelen s številom 4 ustvarja zdravilne temelje. Neguj tisto, kar te podpira.`},148:{message:`Zvezda s številom 5 razkriva moč ustvarjalne harmonije. Tvoja lepota prihaja iz notranjosti.`},149:{message:`Voda s številom 6 vrača čustva v naravni tok. Dovoli življenju, da te premika.`},150:{message:`Pes s številom 7 odpira povezavo srca. Danes poslušaj vezi, ki te povezujejo z drugimi.`},151:{message:`Opica s številom 8 prinaša harmonijo skozi ustvarjalnost. Danes dovoli življenju, da te preseneti.`},152:{message:`Pot s številom 9 krepi tvojo vztrajnost. Vsaka izkušnja te vodi bližje tvojemu namenu.`},153:{message:`Trst s številom 10 uteleša vodstvo. Stoj pokončno v svoji resnici in moči.`},154:{message:`Jaguar s številom 11 osvobaja skrite strahove. Tvoja intuicija ti kaže pot skozi neznano.`},155:{message:`Orel s številom 12 povezuje širšo vizijo s skupnostjo. Danes poglej dlje od sebe.`},156:{message:`Sova s številom 13 zaključuje cikel modrosti. Preteklost ti podarja dragocene ključe.`},157:{message:`Zemlja s številom 1 odpira nov korak zavesti. Ustvari stik z ritmom življenja.`},158:{message:`Kremen s številom 2 prinaša jasnost skozi ravnovesje. Resnica se pokaže, ko poslušaš globlje.`},159:{message:`Nevihta s številom 3 aktivira preobrazbo. Danes se energija premika proti obnovi.`},160:{message:`Sonce s številom 4 postavlja temelje svetlobe. Naj tvoja prisotnost osvetli prostor okoli tebe.`},161:{message:`Krokodil s številom 5 nosi moč začetka. Tvoja ustvarjalna sila čaka na dejanje.`},162:{message:`Veter s številom 6 prinaša ravnovesje skozi izražanje. Naj tvoj glas teče svobodno.`},163:{message:`Noč s številom 7 odpira notranjo modrost. V tišini najdeš odgovore, ki jih iščeš.`},164:{message:`Semeno s številom 8 raste skozi harmonijo. Neguj svojo vizijo z zaupanjem.`},165:{message:`Kača s številom 9 prebuja vztrajnost življenjske energije. Sledi naravnemu toku svoje moči.`},166:{message:`Smrt s številom 10 uteleša preobrazbo. Pusti, da nova različica tebe stopi naprej.`},167:{message:`Jelen s številom 11 osvobaja stare rane. Zdravljenje se začne s sprejemanjem.`},168:{message:`Zvezda s številom 12 združuje lepoto in povezovanje. Ustvari prostor za harmonijo.`},169:{message:`Voda s številom 13 zaključuje čustveni cikel. Naj se vse, kar je težko, vrne v tok.`},170:{message:`Pes s številom 1 začenja nov krog ljubezni. Odpri srce novim povezavam.`},171:{message:`Opica s številom 2 išče ravnovesje skozi igrivost. Spomni se lahkotnosti ustvarjanja.`},172:{message:`Pot s številom 3 premika tvojo življenjsko zgodbo naprej. Vsak korak ima svoj pomen.`},173:{message:`Trst s številom 4 utrjuje tvoje poslanstvo. Zgradi temelje, ki podpirajo tvojo vizijo.`},174:{message:`Jaguar s številom 5 prebuja notranjo moč. Zaupaj znanju, ki prihaja od znotraj.`},175:{message:`Orel s številom 6 prinaša ravnovesje perspektive. Dvigni pogled in vidi širšo sliko.`},176:{message:`Sova s številom 7 odpira povezavo s starodavno modrostjo. Poslušaj sporočila iz globine.`},177:{message:`Zemlja s številom 8 ustvarja harmonijo med tabo in svetom. Vse je povezano.`},178:{message:`Kremen s številom 9 razkriva namen skozi jasnost. Tvoja resnica postaja močnejša.`},179:{message:`Nevihta s številom 10 prinaša utelešeno obnovo. Sprememba ustvarja nov prostor življenja.`},180:{message:`Sonce s številom 11 osvobaja tvojo svetlobo. Ne skrivaj darov, ki jih nosiš.`},181:{message:`Krokodil s številom 12 povezuje rojstvo novih idej. Ustvarjanje raste skozi sodelovanje.`},182:{message:`Veter s številom 13 zaključuje cikel izražanja. Besede danes nosijo posebno moč.`},183:{message:`Noč s številom 1 odpira novo pot notranjega raziskovanja. Sanje so vrata modrosti.`},184:{message:`Semeno s številom 2 išče ravnovesje med rastjo in potrpežljivostjo. Zaupaj procesu.`},185:{message:`Kača s številom 3 aktivira življenjsko silo. Premakni se z zaupanjem v svojo energijo.`},186:{message:`Smrt s številom 4 ustvarja prostor za novo strukturo. Sprememba je temelj novega začetka.`},187:{message:`Jelen s številom 5 krepi zdravilno moč. Tvoja prisotnost lahko prinese podporo drugim.`},188:{message:`Zvezda s številom 6 vrača lepoto v ravnovesje. Ustvari harmonijo okoli sebe.`},189:{message:`Voda s številom 7 odpira intuicijo srca. Čustva danes govorijo modro.`},190:{message:`Pes s številom 8 združuje ljubezen in harmonijo. Neguj vezi, ki hranijo tvojo dušo.`},191:{message:`Opica s številom 9 spodbuja ustvarjalno vztrajnost. Igra je lahko pot mojstrstva.`},192:{message:`Pot s številom 10 uteleša tvojo življenjsko smer. Vsaka odločitev ustvarja prihodnost.`},193:{message:`Trst s številom 11 osvobaja stare predstave o vodstvu. Vodi z modrostjo srca.`},194:{message:`Jaguar s številom 12 povezuje intuicijo in skupnost. Skupaj se razkriva večja slika.`},195:{message:`Orel s številom 13 zaključuje cikel vizije. Tvoja duša vidi dlje od trenutka.`},196:{message:`Sova s številom 1 odpira nov krog modrosti. Prisluhni znamenjem okoli sebe.`},197:{message:`Zemlja s številom 2 išče ravnovesje v naravnem toku. Vrni se k svojemu ritmu.`},198:{message:`Kremen s številom 3 aktivira jasnost. Danes lahko narediš pomemben premik.`},199:{message:`Nevihta s številom 4 gradi nove temelje skozi spremembo. Obnova prihaja skozi pogum.`},200:{message:`Sonce s številom 5 razkriva moč svetlobe. Dovoli svoji energiji, da zasije.`},201:{message:`Krokodil s številom 6 prinaša ravnovesje ustvarjalne sile. Danes dovoli novi ideji, da najde svojo obliko.`},202:{message:`Veter s številom 7 odpira uglašenost skozi besede. Tvoj glas lahko poveže svetove.`},203:{message:`Noč s številom 8 ustvarja harmonijo notranjega sveta. V tišini se rojeva nova modrost.`},204:{message:`Semeno s številom 9 širi svojo rast. Vztrajnost danes neguje tvojo prihodnost.`},205:{message:`Kača s številom 10 uteleša moč življenjske energije. Sprejmi svojo notranjo moč.`},206:{message:`Smrt s številom 11 osvobaja prostor za preobrazbo. Spusti tisto, kar ne služi več tvoji poti.`},207:{message:`Jelen s številom 12 povezuje zdravljenje in skupnost. Tvoja nežnost je dar svetu.`},208:{message:`Zvezda s številom 13 zaključuje cikel lepote. Naj tvoja ustvarjalnost zasije brez omejitev.`},209:{message:`Voda s številom 1 odpira nov čustveni tok. Dovoli srcu pokazati novo smer.`},210:{message:`Pes s številom 2 prinaša ravnovesje v odnosih. Ljubezen raste skozi razumevanje.`},211:{message:`Opica s številom 3 aktivira ustvarjalno radost. Danes se igraj z možnostmi življenja.`},212:{message:`Pot s številom 4 ustvarja stabilnost na tvoji poti. Vsak korak gradi tvojo zgodbo.`},213:{message:`Trst s številom 5 krepi notranje vodstvo. Zaupaj stebru modrosti v sebi.`},214:{message:`Jaguar s številom 6 usklajuje intuicijo in moč. Prisluhni tihemu znanju.`},215:{message:`Orel s številom 7 odpira širino pogleda. Danes vidiš možnosti, ki so bile prej skrite.`},216:{message:`Sova s številom 8 ustvarja harmonijo skozi modrost. Poveži znanje s srcem.`},217:{message:`Zemlja s številom 9 krepi zavestni razvoj. Tvoja pot se razkriva korak za korakom.`},218:{message:`Kremen s številom 10 uteleša jasnost. Resnica postaja temelj tvojega ustvarjanja.`},219:{message:`Nevihta s številom 11 osvobaja staro energijo. Sprememba ti odpira nova vrata.`},220:{message:`Sonce s številom 12 povezuje svetlobo skupnosti. Tvoj sijaj navdihuje tudi druge.`},221:{message:`Krokodil s številom 13 zaključuje ustvarjalni cikel. Nova semena že čakajo na rojstvo.`},222:{message:`Veter s številom 1 začenja nov tok izražanja. Govori iz prostora resnice.`},223:{message:`Noč s številom 2 prinaša ravnovesje med zunanjim in notranjim svetom.`},224:{message:`Semeno s številom 3 aktivira rast. Danes neguj tisto, kar želiš ustvariti.`},225:{message:`Kača s številom 4 postavlja temelje življenjske sile. Tvoje telo je tempelj tvoje energije.`},226:{message:`Smrt s številom 5 prinaša moč preobrazbe. Novo nastaja skozi spuščanje starega.`},227:{message:`Jelen s številom 6 ustvarja ritem zdravljenja. Dovoli življenju, da te podpre.`},228:{message:`Zvezda s številom 7 odpira ustvarjalno uglašenost. Lepota prihaja iz tvoje notranje svetlobe.`},229:{message:`Voda s številom 8 prinaša harmonijo čustev. Sprejmi tok življenja.`},230:{message:`Pes s številom 9 krepi ljubezen skozi predanost. Srce pozna svojo pot.`},231:{message:`Opica s številom 10 uteleša ustvarjalnost. Tvoje ideje želijo postati resničnost.`},232:{message:`Pot s številom 11 osvobaja stare smeri. Izberi pot, ki podpira tvojo dušo.`},233:{message:`Trst s številom 12 povezuje vodstvo in skupnost. Skupaj ustvarjamo več.`},234:{message:`Jaguar s številom 13 zaključuje cikel skrivnosti. Tvoja intuicija pozna odgovor.`},235:{message:`Orel s številom 1 odpira novo vizijo. Poglej višje in začuti širino možnosti.`},236:{message:`Sova s številom 2 prinaša ravnovesje modrosti. Uči se iz preteklosti in ustvarjaj prihodnost.`},237:{message:`Zemlja s številom 3 aktivira zavestno gibanje. Življenje te vodi naprej.`},238:{message:`Kremen s številom 4 ustvarja jasne temelje. Resnica daje moč tvojemu ustvarjanju.`},239:{message:`Nevihta s številom 5 prinaša moč obnove. Dovoli novi energiji, da steče.`},240:{message:`Sonce s številom 6 usklajuje tvojo svetlobo. Ravnovesje prinaša moč.`},241:{message:`Krokodil s številom 7 odpira ustvarjalno uglašenost. Prisluhni prvotni iskri.`},242:{message:`Veter s številom 8 ustvarja harmonijo izražanja. Besede postajajo mostovi.`},243:{message:`Noč s številom 9 širi notranjo modrost. Zaupaj globini svojih sanj.`},244:{message:`Semeno s številom 10 uteleša rast. Tvoja vizija dobiva obliko.`},245:{message:`Kača s številom 11 osvobaja staro energijo. Prebudi svojo življenjsko moč.`},246:{message:`Smrt s številom 12 povezuje preobrazbo in sprejemanje. V spremembi je modrost.`},247:{message:`Jelen s številom 13 zaključuje zdravilni cikel. Tvoja pot postaja celovita.`},248:{message:`Zvezda s številom 1 odpira novo ustvarjalno svetlobo. Zasij v svoji edinstvenosti.`},249:{message:`Voda s številom 2 išče čustveno ravnovesje. Dovoli srcu dihati.`},250:{message:`Pes s številom 3 aktivira povezovanje. Ljubezen je gibanje energije.`},251:{message:`Opica s številom 4 ustvarja temelje veselja. Ustvarjalnost raste skozi lahkotnost.`},252:{message:`Pot s številom 5 krepi tvojo življenjsko smer. Zaupaj korakom, ki jih izbiraš.`},253:{message:`Trst s številom 6 prinaša ravnovesje vodstva. Ostani povezan s svojim namenom.`},254:{message:`Jaguar s številom 7 odpira notranji vid. Intuicija danes govori jasno.`},255:{message:`Orel s številom 8 ustvarja harmonijo širine. Tvoja vizija presega meje.`},256:{message:`Sova s številom 9 uteleša modrost izkušenj. Vsak trenutek nosi učenje.`},257:{message:`Zemlja s številom 10 prinaša zavestno ustvarjanje. Tvoja prisotnost oblikuje svet.`},258:{message:`Kremen s številom 11 osvobaja skozi resnico. Jasnost prinaša svobodo.`},259:{message:`Nevihta s številom 12 povezuje obnovo in skupnost. Skupaj nastaja nova energija.`},260:{message:`Sonce s številom 13 zaključuje sveti cikel. Svetloba, modrost in življenje se združujejo v celoto.`}};async function o(t){let n=document.getElementById(`content`);if(!t){console.log(`🌌 Guest portal preview`),n.innerHTML=`


<section class="dashboard-section">



<h1>
✨ Dobrodošli v Blinkita Multiverse
</h1>



<p>

Tukaj se začne tvoje potovanje skozi

<strong>
Živi Čas
</strong>

</p>





<div class="dashboard-grid">





<div class="dashboard-card">


<div class="download-icon">
🌞
</div>



<h2>
Današnji Portal Časa
</h2>



<p>

Današnja energija tradicionalnega Tzolk'in koledarja se pripravlja...

</p>



<p>

Pridruži se Blinkita Multiverse in odpri svoj osebni portal.

</p>



</div>







<div class="dashboard-card">


<div class="download-icon">
🎁
</div>



<h2>
Današnje presenečenje
</h2>



<p>

Tvoja skrivnost čaka, da se odpre.

</p>



</div>





</div>





</section>


`;return}let{data:r,error:o}=await e.from(`members`).select(`
    first_name,
    personal_tzolkin_code,
    avatar_id
`).eq(`id`,t.id).single();if(o){console.error(`PORTAL MEMBER ERROR:`,o),n.innerHTML=`Napaka pri nalaganju portala.`;return}let s=new Date().toISOString().split(`T`)[0],c=i(s),l=a[c.kin];console.log(`DNEVNA KODA ČASA:`,c);let u=`/images/Slike-Maya/stevilo${c.number}.png`,d=`/images/Slike-Maya/${c.signImage}`;n.innerHTML=`


<section class="dashboard-section">



<h1>
🌌 Dobrodošla, ${r.first_name||`Ustvarjalec`}
</h1>





<p>

Tvoj čas ponovno teče skozi

<strong>
BLINKITA MULTIVERSE
</strong>

</p>







<div class="dashboard-grid">







<div class="dashboard-card">


<div class="download-icon">
🌞
</div>



<h2>
Današnji Portal Časa
</h2>




<p>

Današnja energija tradicionalnega Tzolk'in koledarja.

</p>







<div class="dashboard-card">


<h3>
✨ Današnja Koda Časa
</h3>







<p>
🌞 KIN:

<strong>
${c.kin}
</strong>

</p>






<h2>
🌿 ${c.number} ${c.signSlovenian}
</h2>







<img
src="${u}"
class="tzolkin-symbol"
alt="Število ${c.number}"
onerror="console.log('Napaka slike:', this.src)"
>




<p>

🔢 Število ${c.number}

<br>

${c.numberMeaning}

</p>







<img
src="${d}"
class="tzolkin-symbol"
alt="${c.signSlovenian}"
onerror="console.log('Napaka slike:', this.src)"
>





<p>

🌿 ${c.signSlovenian}
(${c.signMaya})

<br>

${c.meaning}

</p>








<div class="tzolkin-message-card">


<h3>
✨ Sporočilo Današnje Kode Časa
</h3>


<p>
${l?.message||`Sporočilo Današnje Kode Časa se pripravlja...`}
</p>



</div>



</div>









<div class="dashboard-card">


<div class="download-icon">
🎁
</div>



<h2>
Današnje presenečenje
</h2>



<p>

Tvoja skrivnost čaka, da se odpre.

</p>



</div>







</div>





</section>



`,sessionStorage.getItem(`openRewardPortal`)&&sessionStorage.removeItem(`openRewardPortal`)}async function s(t){let n=document.getElementById(`content`);if(!t){console.log(`👤 Guest profile preview`),n.innerHTML=`


<section class="dashboard-section">


<h1>
📸 Moj profil
</h1>



<div class="dashboard-grid">



<div class="download-card profile-main">



<div class="download-icon">
📸
</div>



<h2>
Ustvarjalec Mogočega
</h2>



<p>
<b>✨ Paket:</b>
Še nimaš izbranega paketa
</p>



<p>
<b>🔢 Srečna številka:</b>
Še ni izbrana
</p>




<div class="profile-action">


<a
class="dashboard-button"
href="/index.html">

✨ Oglej si pakete članstva

</a>


</div>



</div>






<div class="download-card">


<div class="download-icon">
🌀
</div>



<h2>
Tvoja Osebna Koda Časa
</h2>



<h1>
✨ Ni še ustvarjena
</h1>



<p>
Tvoj rojstni pečat tradicionalnega Tzolk'in koledarja bo pripravljen, ko ustvariš svoj osebni prostor.
</p>



</div>



</div>





</section>



`;return}let{data:r,error:a}=await e.from(`members`).select(`*`).eq(`id`,t.id).single();if(a){console.error(`PROFILE LOAD ERROR:`,a),n.innerHTML=`Napaka pri nalaganju profila.`;return}console.log(`PROFILE MEMBER:`,r);let o=i(r.birth_date);console.log(`OSEBNA KODA ČASA:`,o);let c=`/images/Slike-Maya/stevilo${o.number}.png`,l=`/images/Slike-Maya/${o.signImage}`,{data:u}=await e.from(`memberships`).select(`*`).eq(`member_id`,r.id).eq(`status`,`active`).maybeSingle();n.innerHTML=`


<section class="dashboard-section">



<h1>
👤 Moj profil
</h1>





<div class="dashboard-grid">





<div class="download-card profile-main">



<div class="profile-selfie-box">



<div id="selfie-container">


${r.selfie_url?`

<img
src="${r.selfie_url}"
class="profile-selfie"
alt="Moj selfie"
>

`:`

<div class="selfie-placeholder">

📷

</div>

`}


</div>




<input
type="file"
id="selfie-upload"
accept="image/*"
hidden
>




<button
id="upload-selfie-button">

📷 Naloži selfie

</button>



</div>






<h2>
${r.first_name||`Ustvarjalec`}
</h2>






<p>
<b>✨ Paket:</b>

${u?.package||`Še nimaš izbranega paketa`}

</p>






<p>
<b>🔢 Srečna številka:</b>

${r.seat_number||`Še ni izbrana`}

</p>








<div id="my-symbol-container">

Nalagam tvoj simbol časa...

</div>





</div>










<div class="download-card">



<div class="download-icon">
🌀
</div>




<h2>
✨ Tvoja Osebna Koda Časa
</h2>





<h1>
KIN ${o.kin}
</h1>





<img
src="${c}"
class="tzolkin-symbol"
alt="Število ${o.number}"
>





<h2>
🔢 ${o.number}
</h2>




<p>
${o.numberMeaning}
</p>







<img
src="${l}"
class="tzolkin-symbol"
alt="${o.signSlovenian}"
>






<h2>
🌿 ${o.signSlovenian}
<br>
${o.signMaya}
</h2>





<p>
${o.meaning}
</p>




</div>






</div>



<h2>
🌟 Izberi svoj simbol časa
</h2>




<p>
Izberi simbol, ki bo predstavljal tvoj osebni pečat v Blinkita Multiverse.
</p>




<div
class="downloads-grid"
id="symbols-container">

Nalagam simbole...


</div>





</section>



`;let d=document.getElementById(`symbols-container`),f=document.getElementById(`my-symbol-container`),p=document.getElementById(`selfie-upload`),m=document.getElementById(`upload-selfie-button`);m&&p&&(m.onclick=()=>{p.click()},p.onchange=async()=>{let t=p.files[0];if(!t)return;let n=`${r.id}/${Date.now()}-${t.name}`,{error:i}=await e.storage.from(`selfies`).upload(n,t,{upsert:!0});if(i){console.error(`SELFIE UPLOAD ERROR:`,i),alert(i.message);return}let{data:a}=e.storage.from(`selfies`).getPublicUrl(n),{error:o}=await e.from(`members`).update({selfie_url:a.publicUrl}).eq(`id`,r.id);if(o){console.error(`SAVE SELFIE ERROR:`,o),alert(o.message);return}alert(`📸 Tvoj selfie je shranjen.`),s(r)});async function h(){let{data:t,error:n}=await e.from(`members`).select(`avatar_id`).eq(`id`,r.id).single();if(n){console.error(`LOAD AVATAR ID ERROR:`,n);return}if(!t.avatar_id){f.innerHTML=`



<div class="dashboard-card">



<div class="download-icon">

✨

</div>



<p>

✨ Še nimaš izbranega Šepetalca Duše.

</p>



</div>



`;return}let{data:i,error:a}=await e.from(`blinkita_avatars`).select(`*`).eq(`id`,t.avatar_id).single();if(a){console.error(`LOAD AVATAR ERROR:`,a);return}f.innerHTML=`



<div class="dashboard-card selected-symbol">





<div class="download-icon">

${i.emoji||`✨`}

</div>





<h2>

${i.name}

</h2>





<p>

${i.description}

</p>






<strong>

🌟 Tvoj Šepetalec Duše

</strong>






</div>



`}try{await h()}catch(e){console.error(`LOAD MY AVATAR FAILED:`,e)}let{data:g,error:_}=await e.from(`blinkita_avatars`).select(`*`).order(`id`);if(console.log(`BLINKITA AVATARS:`,g),_){d.innerHTML=`Napaka pri nalaganju Šepetalcev Duše.`;return}d.innerHTML=g.map(e=>`





<div

class="download-card symbol-card"

data-id="${e.id}">







<div class="download-icon">

${e.emoji||`✨`}

</div>







<h3>

${e.name}

</h3>







<p>

${e.description}

</p>







<button>

✨ Izberi

</button>







</div>





`).join(``),document.querySelectorAll(`.symbol-card button`).forEach(t=>{t.onclick=async t=>{let n=t.target.closest(`.symbol-card`),i=Number(n.dataset.id);console.log(`SELECTED AVATAR:`,i);let{error:a}=await e.from(`members`).update({avatar_id:i}).eq(`id`,r.id);if(a){console.error(`SAVE AVATAR ERROR:`,a),alert(a.message);return}await h(),alert(`✨ Tvoj Šepetalec Duše je izbran.`)}})}async function c(t){let n=document.getElementById(`content`),{data:r,error:i}=await e.from(`memberships`).select(`*`).eq(`member_id`,t.id).eq(`status`,`active`).maybeSingle();console.log(`ACTIVE MEMBERSHIP:`,r),i&&console.error(`MEMBERSHIP ERROR:`,i),n.innerHTML=`


<section class="dashboard-section">


<h1>
📦 Moj paket
</h1>


<p>
Tvoje aktivno članstvo v Blinkita Multiverse.
</p>



<div class="dashboard-grid">



<div class="dashboard-card">


<h3>
🌟 Trenutni paket
</h3>


<h1>
${r?.package||`Brez paketa`}
</h1>


</div>





<div class="dashboard-card">


<h3>
🔓 Dostop
</h3>


<p>
Tvoji odprti portali in digitalni zakladi se pripravljajo.
</p>


</div>



</div>


</section>


`}function l(e){let t=document.getElementById(`content`);if(!e){console.log(`🎁 Guest rewards preview`),t.innerHTML=`


<section class="dashboard-section">


<h1>
🎁 Moje nagrade
</h1>



<p>
Tvoje možnosti in presenečenja v Blinkita Multiverse.
</p>




<div class="dashboard-card">


<div class="download-icon">
🔒
</div>



<h2>
Spirala Časa čaka nate
</h2>



<p>

Ko postaneš del Blinkita Multiverse,
se odprejo tvoje možnosti za nagrade,
presenečenja in Kolo Časa.

</p>




<a
class="dashboard-button"
href="/index.html">

✨ Izberi svoje članstvo

</a>



</div>



</section>


`;return}if(console.log(`REWARDS MEMBER:`,e),e.package===`BASIC`){t.innerHTML=`


<section class="dashboard-section">


<h1>
🎁 Moje nagrade
</h1>



<p>
Tvoje možnosti in presenečenja v Blinkita Multiverse.
</p>




<div class="dashboard-card">


<div class="download-icon">
🔒
</div>



<h2>
Spirala Časa je zaklenjena
</h2>




<p>

Nadgradi svoje članstvo v ADVANCED,
PREMIUM ali VIP in odpri možnost
vrtenja Kolesa Časa.

</p>




<button 
class="dashboard-button">

✨ Nadgradi članstvo

</button>



</div>



</section>


`;return}t.innerHTML=`


<section class="dashboard-section">


<h1>
🎁 Moje nagrade
</h1>



<p>
Tvoje srečne možnosti čakajo nate.
</p>




<div class="dashboard-card">


<div class="download-icon">
🌀
</div>



<h2>
Spirala Časa
</h2>




<p>

Tvoja srečna številka je odprla vrata možnosti.

</p>




<button 
id="openPortal"
class="dashboard-button">

🌀 ZAVRTI SPIRALO ČASA

</button>



</div>



</section>


`,document.getElementById(`openPortal`).onclick=()=>{sessionStorage.setItem(`openRewardPortal`,`true`),window.location.href=`/portal.html`}}async function u(){let e=document.getElementById(`content`);e.innerHTML=`

    <section class="dashboard-section">

        <h1>
        ✨ Moj Multiverzum
        </h1>


        <p>
        Tukaj živijo vsi tvoji odklenjeni zakladi Blinkita Multiverse.
        </p>


        <div class="downloads-grid" id="multiverse-container">

            <div class="download-card">

                <div class="download-icon">
                🌌
                </div>


                <h3>
                Tvoj Multiverzum se prebuja
                </h3>


                <p>
                Knjige, portali, glasba, meditacije,
                nagrade in drugi digitalni zakladi
                bodo tukaj našli svoj dom.
                </p>


            </div>

        </div>


    </section>

    `}async function d(){let e=document.getElementById(`content`);e.innerHTML=`

    <section class="dashboard-section">


        <h1>
        📚 Moja knjižnica
        </h1>


        <p>
        Raziskuj celotno zakladnico Blinkita Multiverse.
        Tukaj se bodo zbirali vsi digitalni svetovi, knjige,
        portali in ustvarjalni zakladi.
        </p>



        <div class="downloads-grid" id="library-container">

            Nalagam knjižnico...

        </div>



    </section>

    `;let t=document.getElementById(`library-container`);t.innerHTML=`


        <div class="download-card">


            <div class="download-icon">
            💰
            </div>


            <h3>
            Ljubim denar in denar ljubi mene
            </h3>


            <p>
            Digitalni svet zavestnega obilja,
            ustvarjanja in transformacije.
            </p>


            <div class="dashboard-status">
            🔒 Še ni v tvojem Multiverzumu
            </div>


        </div>





        <div class="download-card">


            <div class="download-icon">
            ❤️
            </div>


            <h3>
            Popolno partnerstvo
            </h3>


            <p>
            Zbirka za odpiranje prostora
            ljubezni in harmonije.
            </p>


            <div class="dashboard-status">
            🔒 Še ni v tvojem Multiverzumu
            </div>


        </div>





        <div class="download-card">


            <div class="download-icon">
            ✨
            </div>


            <h3>
            Abracadabra
            </h3>


            <p>
            Digitalna zbirka transformacije,
            zavestnega ustvarjanja in magije življenja.
            </p>


            <div class="dashboard-status">
            🌟 Del Blinkita zakladnice
            </div>


        </div>



    `}async function f(){console.log(`🔐 Checking authentication...`);let{data:{session:t}}=await e.auth.getSession(),n=t?.user;if(n||await new Promise(t=>{let{data:r}=e.auth.onAuthStateChange((e,r)=>{console.log(`AUTH EVENT:`,e),r?.user&&(n=r.user,t())});setTimeout(()=>{r.subscription.unsubscribe(),t()},3e3)}),!n)return console.log(`ℹ️ Guest user - no login session`),null;console.log(`AUTH USER:`,n.email);let{data:r,error:i}=await e.from(`members`).select(`*`).eq(`email`,n.email).single();return i?(console.error(`❌ MEMBER NOT FOUND:`,i),null):(console.log(`✅ MEMBER FOUND:`,r),r)}async function p(t){let n=document.getElementById(`content`);if(!t){n.innerHTML=`


<section class="dashboard-section">


<h1>
🌌 Šepetanje Časa
</h1>


<p>

Šepetanje Časa je na voljo članom Blinkita Multiverse.

</p>



<a
href="/index.html"
class="dashboard-button">

✨ Odkrij članske pakete

</a>



</section>


`;return}let r=[];document.querySelectorAll(`.answer-buttons button`).forEach(e=>{e.onclick=()=>{let t=e.dataset.answer;if(r.includes(t)){let n=r.indexOf(t);r.splice(n,1),e.classList.remove(`selected`)}else r.push(t),e.classList.add(`selected`);console.log(`ODGOVORI ČASU:`,r)}});let i=document.getElementById(`activatePortalButton`);i.onclick=async()=>{if(r.length===0){alert(`✨ Najprej izberi svoj odgovor Času.`);return}for(let n of r){let{error:r}=await e.from(`portal_answers`).insert({member_id:t.id,portal_number:c.portal_number,answer:n});r&&console.error(`PORTAL ANSWER ERROR:`,r)}console.log(`✨ Odgovori shranjeni`);let{error:i}=await e.from(`member_time_portals`).insert({member_id:t.id,portal_number:c.portal_number,activated_at:new Date});if(i){console.error(`PORTAL ACTIVATION ERROR:`,i),alert(i.message);return}n.innerHTML=`


<section class="dashboard-section">


<h1>
🌌 Čas je sprejel tvoj odgovor.
</h1>



<div class="dashboard-card">


<h2>
Jaz sem Čas.
</h2>



<p>

Tvoj šepet je bil slišan.

Tvoja pot skozi portale se nadaljuje.

</p>



<h2>
✨ Portal ${c.portal_number} je aktiviran.
</h2>



</div>


</section>



`};let{data:a,error:o}=await e.from(`member_time_portals`).select(`*`).eq(`member_id`,t.id).order(`portal_number`,{ascending:!1}).limit(1);if(o){console.error(`TIME PORTAL PROGRESS ERROR:`,o),n.innerHTML=`Napaka pri nalaganju poti Časa.`;return}let s=1;if(a&&a.length>0&&(s=a[0].portal_number+1),s>99){n.innerHTML=`


<section class="dashboard-section">


<h1>
🌌 Portal 100
</h1>


<div class="dashboard-card">


<h2>
Jaz sem Čas.
</h2>


<p>

Ne iščeš več vrat.

Ti si postala vrata.

</p>


<h2>
✨ Poseben dar čaka nate.
</h2>



</div>


</section>


`;return}console.log(`LOOKING FOR PORTAL NUMBER:`,s);let{data:c,error:l}=await e.from(`time_portals`).select(`*`).eq(`portal_number`,s).maybeSingle();if(l){console.error(`TIME PORTAL LOAD ERROR:`,l),n.innerHTML=`Napaka pri odpiranju Šepetanja Časa.`;return}if(console.log(`CURRENT TIME PORTAL:`,c),!c){n.innerHTML=`

<section class="dashboard-section">

<h1>
🌌 Šepetanje Časa
</h1>

<div class="dashboard-card">

<h2>
Čas danes še tiho čaka.
</h2>

<p>
Portal se pripravlja nate.
</p>

</div>

</section>

`;return}n.innerHTML=`



<section class="dashboard-section">



<h1>
🌌 Šepetanje Časa
</h1>




<h2>

Šepet Časa ${c.portal_number} / 99

</h2>





<div class="dashboard-card">




<p>

${c.message.replace(/\n/g,`<br>`)}

</p>



</div>







<div class="answer-section">


<h2>
Kako danes odgovarjaš Času?
</h2>

<div class="answer-buttons">

<button data-answer="VIDIM">

👁 VIDIM

</button>



<button data-answer="SLIŠIM">

👂 SLIŠIM

</button>



<button data-answer="ČUTIM">

💙 ČUTIM

</button>



<button data-answer="AKTIVIRAM">

✨ AKTIVIRAM

</button>



<button data-answer="LJUBIM">

❤️ LJUBIM

</button>



<button data-answer="ZAVEDAM">

🌌 ZAVEDAM

</button>



<button data-answer="SPREJEMAM">

🙏 SPREJEMAM

</button>



</div>




<div class="portal-action">


<button
id="activatePortalButton"
class="dashboard-button">

✨ Sprejmem šepet

</button>


</div>


</div>


</section>


`}console.log(`🚀 MEMBER DASHBOARD LOADED`);function m(e){let t=document.getElementById(`content`);e?t.innerHTML=`


<section class="dashboard-section">



<h1>
🌌 Dobrodošla nazaj,
${e.first_name||`Ustvarjalec`}
</h1>

<p>

Dobrodošla v svojem osebnem prostoru
<strong>BLINKITA MULTIVERSE</strong>.

Čas te je ponovno pripeljal sem.

Nekateri odpirajo aplikacije.

Ti odpiraš portale.

Tukaj vsaka številka nosi pomen.
Vsak simbol pripoveduje zgodbo.
Vsak obisk je nova možnost ustvarjanja.

Dobrodošla v prostoru, kjer Čas postane živ in Mogoče postane resnično.
</p>


<div class="dashboard-card">

<div class="download-icon">
✨
</div>

<h2>
Danes je nov začetek.
</h2>

<p>

Odpri svoj Portal.
Poslušaj svojo Kodo Časa.
Izberi svoj simbol.
Zbiraj darila.
Ustvarjaj prihodnost.

Vsak korak šteje.

</p>

</div>


</section>



`:t.innerHTML=`


<section class="dashboard-section">


<h1>
✨ Dobrodošli v BLINKITA MULTIVERSE
</h1>



<p>

Kjer Čas postane živ,
zavest postane ustvarjalna sila
in možnosti dobijo novo obliko.

</p>





<div class="dashboard-card">



<div class="download-icon">
🌌
</div>



<h2>
Tvoj prostor Mogočega te čaka
</h2>



<p>

Odpri vrata svojega osebnega portala,
izberi svoj članski paket in ustvari svojo
številko v Blinkita Multiverse.

</p>





<a
href="/index.html"
class="dashboard-button">

✨ Izberi svoj paket in vstopi v Multiverse

</a>



</div>





</section>



`}async function h(){let e=await f();console.log(`CURRENT MEMBER:`,e),e?console.log(`LOGGED MEMBER:`,e):console.log(`👋 Guest visitor - showing full preview`),m(e),document.getElementById(`portalTab`).onclick=()=>{o(e)},document.getElementById(`timePortalTab`).onclick=()=>{p(e)},document.getElementById(`profileTab`).onclick=()=>{s(e)},document.getElementById(`packageTab`).onclick=()=>{c(e)},document.getElementById(`multiverseTab`).onclick=()=>{u(e)},document.getElementById(`rewardsTab`).onclick=()=>{l(e)},document.getElementById(`libraryTab`).onclick=()=>{d(e)}}h();