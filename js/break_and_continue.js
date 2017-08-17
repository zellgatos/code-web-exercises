'use strict';

while(true){
    number = prompt("Give me an odd number between 1 and 50");
    number = parseInt(number);
    if( number >= 1 && number < 50 && number % 2 == 1 ) {
        console.log("Here is an odd number: " + number);
        break;
    }
}

var number = prompt("Give me an odd number between 1 and 50");
number = parseInt(number);

for(var i = 1; i <= 50 ; i+=2) {

    if (number === i){
        console.log("number to skip is: " + i);
        continue;
    }
    console.log("here is an odd number: " + i);
}