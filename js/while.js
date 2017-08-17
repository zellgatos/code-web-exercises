'use strict';

var x = 2;

while (x <= 65536){
    console.log(x);
    x *= 2;
}

var allCones = Math.floor(Math.random() * 50) + 50;

do {
    var cones = Math.floor(Math.random() * 5) + 1;
    if(cones > allCones) {
        console.log("i cannot sell you " + cones + " i only have " + allCones + " ...");
        continue;
    }
    console.log(allCones + " cone(s) left");
   allCones -= cones;
    console.log(cones + " cone(s) sold...");
}while(allCones > 0);
console.log("sold all of the cones!");