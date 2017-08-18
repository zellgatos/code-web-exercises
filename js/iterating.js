(function(){
    "use strict";

    var names = ['Jon', 'Sansa', 'Aria', 'Bran'];

    console.log("there are " + names.length +" names in the names array.");

    for (var i = 0; i < names.length; i++) {
        console.log( i + " is " + names[i]);
    }

    names.forEach(function (element, index, array) {
        console.log(array);
    });
    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.

    // TODO: Create a log statement that will log the number of elements in the names array.

    // TODO: Create log statements that will print each of the names array elements individually.
})();
