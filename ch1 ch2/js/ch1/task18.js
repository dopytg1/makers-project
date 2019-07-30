'use strict'

let s = "AAAA"
let arr = s.split("");
let del = 0;

for (let i = 0; i < arr.length; i++){
    delete arr[i];
        if (arr[i] === arr[i + 1]) {
        del = ++del;
    }
}
 let str = arr.join("");

console.log(del);
console.log(arr);