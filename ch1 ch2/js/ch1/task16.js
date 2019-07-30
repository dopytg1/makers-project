'use strict'

let n = 8;
let s = ["D", "U", "D", "U", "D", "U", "D", "U", "D", "U"];


let down = 0;
let up = 0;
let seaLvl = +"";
let valley = 0;


for (let i = 0; i < s.length; i++) {
    if (s[i] == "D") {
        down = down + 1;
        seaLvl = seaLvl - 1;

    } else if (s[i] == "U") {
        up = up + 1;
        seaLvl = seaLvl + 1;
    }
    if (seaLvl == 0 && s[i] == "U" && down == up) {
        valley = valley + 1;
    }
}


console.log(down, up);
console.log(valley);