'use strict'

let arr = [1, 2, 3, 4, 5];

let first = arr[1];
let second = 0;
for (let i = 0; i < arr.length; i++) {
    second = arr[arr.length - 2];
}


console.log(arr);
console.log(first, second);