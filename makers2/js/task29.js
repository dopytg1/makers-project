'use strict'

let arr = [1, 57, 26, 10, 14];

let first = arr[1];
let second = 0;
for (let i = 0; i < arr.length; i++) {
    second = arr[arr.length - 2];
}


console.log(arr);
console.log(first, second);