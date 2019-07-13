'use strict'

let s = "AAAA"
let arr = s.split("");
let del = 0;

for (let i = 0; i < arr.length; i++){
    if (arr[i] === arr[i + 1]) {
        delete arr[i];
         del = ++del;
    }
}
 let str = arr.join("");

 console.log(del);
console.log(arr);