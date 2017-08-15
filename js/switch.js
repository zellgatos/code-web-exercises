"use strict";

// Don't change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single randome
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

switch (color) {
    case 'red':
        console.log("red like roses");
        break;
    case 'orange':
        console.log("orange like oranges");
        break;
    case 'yellow':
        console.log("yellow like bananas");
        break;
    case 'green':
        console.log("green like grass");
        break;
    case 'blue':
        console.log("blue like the sea");
        break;
    default:
        console.log("i don't know anything by that color");
        break;
    // TODO: create a case statement that will handle every color except indigo and violet
    // TODO: when a color is encountered log a message that tells the color, and an object of that color
    //       example: Blue is the color of the sky.

    // TODO: create a default case that will catch indigo and violet
    // TODO: for the default case, log: I do not know anything by that color.
}
var Cameron = 180;
var Ryan = 250;
var George = 350;
var Saved = [];

    if (Cameron >= 200) {
        Cameron = Saved;
        console.log()
} else {
        console.log("Cameron spent $180")
}
    if (Ryan >= 200) {
        Ryan = Saved;
    console.log("Ryan Spent 225 and originally was going to spend 250")
} else {
    console.log("Ge spent $180")
}

    if (George >= 200) {
    George = Saved;
    console.log("George Spent 315 and originally was going to spend 350")
} else {
    console.log("Cameron spent $180")
}


var flipACoin = Math.floor(Math.random()* 2);
var car = 0;
(flipACoin === car) ? console.log("pick the car") : console.log("pick the house");

var luckyNumber = Math.floor(Math.random()* 6);
var $54 = 1;
var $60 = 0;
var $40 = 2;
var $30 = 4;
var $0 = 5;
var $3 = 3;

    switch (luckyNumber){
        case $60:
            console.log("you saved NOTHING! price is $60.");
                break;
        case $54:
            console.log("you saved 10%! price is $54.");
                break;
        case $40:
            console.log("you saved 25%! price is $40.");
                break;
        case $30:
            console.log("you saved 50%! price is $30.");
                break;
        case $0:
            console.log("you saved EVERYTHING! price is $0.");
                break;
        case $3:
            console.log("you saved NOTHING! price is $60.");
                break;

    }



