'use strict'

let n = 2;

let arr = [
    1,
    2,
    3,
    4,
    5
];

for (let i = 0; i < n; i++) {
    arr.push(arr.splice(0, 1)[0]);
}

console.log(arr);