'use strict';

function fibonachi(arg) {
    var num = 1,
        arr = [0,1];

    if( arg == 0 || arg == 1){
        return 0;
    }
    for (let i = 2; i < arg; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);                                                                                                  
    }
     
    return arr;
}

console.log(fibonachi(0));