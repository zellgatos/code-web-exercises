'use strict';

for(var p = prompt("Type a number between 1 and 10"), num = parseInt(p), dec = 1 ; dec <= 10 ; dec ++) {
    console.log(num + "X" + dec + "=" + num * dec);

}

for(var i = 1; i <= 10 ;i++){
    var number = Math.floor(Math.random() * 180) + 20
    if (number % 2 === 0) {
        console.log(number + " is even");
    } else {
        console.log(number + " is odd");
    }
}

for(var i = 1; i <= 10 ;i++){
    console.log((i % 10).toString().repeat(i));

}

x = parseInt(x);
for(var x = 100; x >= 5 ; x-=5){
    console.log(x)
}