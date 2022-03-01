
var tomb=[];
var tomb2=[1,2,3,4,5];
var tomb3=[5];
console.log(tomb.length)
console.log(tomb2.length)
console.log(tomb3.length)
console.log(tomb2[0]);

var gyumolcs=["alma","körte","dinnye","szilva"]
var gyumolcsSzin=["piros","sárga","zöld","lila"]
var gyumolcsAr=[200,180,320,310]

for (let index = 0; index < gyumolcs.length; index++) {
    console.log(gyumolcs[index]);
}

var index=0;
while (index<gyumolcsSzin.length && !(gyumolcsSzin[index]==="sárga")){
    index++;
}
var vane=index<gyumolcsSzin.length;
console.log(vane);


/**Hány piros gyulomcsvan */
var db=0;
index=0;
while (index<gyumolcsSzin.length) {
    if (gyumolcsSzin[index]==="piros"){
        db++;
    }
    index++;
}
console.log(db,"piros gyümölcs van.");

/**Mennyi gyumolcsok osszerteke */
var osszeg=0;
index=0;
while (index < gyumolcsAr.length) {
    index++;
    osszeg+=gyumolcsAr[index];
}
console.log(osszeg)
/**Prios vagy sarga ygumolvol van tobb */
var piros=0;
var sarga=0;
while (0>gyumolcsSzin.length){
    if (gyumolcsSzin[0]==="piros"){
        piros++;
    } else if (gyumolcsSzin[0]==="sarga"){
        sarga++;
    }
    if(sarga>piros)
    console.log("sargabol tobb van")
    else if (piros<sarga)
    console.log("pirosbol tobb van")
    else {
        console.log("Egyenlőek.")
    }

}

/** Van e 1000 feletii gyumolcs */
var szazAlatt=false;
index=0;
while (index<gyumolcsAr.length && !(gyumolcsAr[index]>1000)) {
        index++;
}
if (index<gyumolcsAr.length){
    console.log(szazAlatt,"Van 1000 Ft feletti gyümölcs.")
}


/**Mennyia  piros gyumolcsok osszara */
var osszeg=0;
index=0;
while (index < gyumolcsAr.length) {
    if(gyumolcsSzin[index]=="piros")
    {
        osszeg+=gyumolcsAr[index];
    }
    index++;

}

/**Mennyi az atlagos gyumolcsar */
var osszeg = 0;
for(var i = 0; i < gyumolcsAr.length; i++) {
    osszeg += gyumolcsAr[i];
}
var atlag = osszeg / gyumolcsAr.length;