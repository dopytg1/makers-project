'use strict';


function fibonachi(arg) {
    var num = 5,
        arr = [0,1];

    for (let i = 2; i < arg; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    var arrNum = arr[num];
    
    return arrNum
}

console.log(fibonachi(10));





