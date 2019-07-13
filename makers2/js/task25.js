'use strict'

let num = "23453";
let arr = num.split("");
let arr3 = num.split("");
let arr2 = [];

function reverseNum(arr) {
    for (let i = 0; i < arr.length; i++) {
        [arr[i], arr[arr.length - 1]] = [arr[arr.length - 1], arr[i]];
        arr2.push(arr[arr.length - 1]);
    }
}

reverseNum(arr);
console.log(arr3.reverse());
