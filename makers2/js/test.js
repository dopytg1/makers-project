'use strict'

// let puppy = {  // experements with proto thing
//     numLegs: 4
// }

// let hound = {
//     color: "white"
// }
// let chack = {
//     size: "20px"
// }

// puppy.__proto__ = hound;
// hound.__proto__ = chack;


// // hound.__proto__ = puppy;
// console.log(puppy.size);
// console.log(puppy.color);
// // console.log(chack.numLegs);


let exampleCrosword = [
    ["+", "+", "+", "+", "0", "0", "0", "0", "0", "0"],
    ["+", "+", "+", "+", "0", "+", "+", "+", "+", "+"]
];
let answ = 0;
let down = 0;
let hint = "norway";
let hitDown = "nu";
for (var m = 0; m < 10; m++) { //count

    if (exampleCrosword[0][m] === "0" && exampleCrosword[0][m] === exampleCrosword[0][m + 1]) {
        answ = answ + 1;
    } else {
        continue
    }
    if (exampleCrosword[0][m] == exampleCrosword[1][m] && exampleCrosword[0][m] == "0") {
        down = down + 1;
    }
}

hint = hint.split("");
hitDown = hitDown.split("");
let answ2 = answ + 1;
let down2 = down + 1;

for (let m = 0; m < 10; m++) { // main

    if (exampleCrosword[0][m] == "0" && answ2 == hint.length) {
        exampleCrosword[0][m] = hint[m - 4];
    }
}
for (var m = 0; m < exampleCrosword.length; m++) { // main
    for (let i = 0; i < 10; i++) {
        if (exampleCrosword[m][i] == "0" && exampleCrosword[m][i] === exampleCrosword[m][i] && exampleCrosword[0][i] == hitDown[0]) {
            exampleCrosword[1][i] = hitDown[i - 3];
            console.log(exampleCrosword[1][i]);
        }
    }
}

console.log(down2);
console.log(exampleCrosword);