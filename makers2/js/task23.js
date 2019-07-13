'use strict'

let arr = [1, 2, 3, 4];
let sumArr = 0;

function countArr(arr) {
    let sguers = [];
    for (let i = 0; i < arr.length; i++) {
        sguers[i] = arr[i] * arr[i];
    }
    for (let i = 0; i < sguers.length; i++) {
        sumArr = sumArr + parseInt(sguers[i]);
    }
    return sumArr;

}

console.log(countArr(arr));