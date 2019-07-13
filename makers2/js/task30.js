'use strict'

let str = 'abacddbec';
let str2 = str.split("");
str2 = str2.sort();
let result = [];

function hasDuplicates(array) {
    var valuesSoFar = [];
    for (var i = 0; i < array.length; ++i) {
        var value = array[i];
        if (valuesSoFar.indexOf(value) !== -1) {
            console.log(value);
        }else if (valuesSoFar.indexOf(value)){
            console.log()
        }
        valuesSoFar.push(value);
    }
    console.log(valuesSoFar);
    return false;
}


hasDuplicates(str);

