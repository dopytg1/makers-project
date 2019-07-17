'use strict';

function fibonachi(arg) {
    var num = 1,
        arr = [0,1];

    for (let i = 2; i < arg; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr;
}

console.log(fibonachi(10));