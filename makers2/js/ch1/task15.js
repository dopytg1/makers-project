'use strict';

let arr = [500, 4, 6, 1, 34];

function max(arr) {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function min(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

let maxS = max(arr);
let minS = min(arr);

const s = arraySum(arr);
console.log(s);

function arraySum(arr) {
    let sum = 0;
    if (arr.length) {
        sum = arr.reduce((a, b) => {
            return (parseFloat(a) || 0) + (parseFloat(b) || 0);
        });
    } else {
        sum = 0;
    }
    return sum;
}


let sumMax = s - minS;
let sumMin = s - maxS;

console.log(sumMin);
console.log(sumMax);