'use strict';

function fibonachi(arg) {
    
    var arr = [0, 1];

    if (arg == 0 ) {
        return 0;
    }else if(arg == 1){
        return "0,1";
    }
    for (let i = 2; i < arg; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }

    return arr;
}

console.log(fibonachi(4));