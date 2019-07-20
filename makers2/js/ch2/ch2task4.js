'use strict';

var arr = [];

function returnNum(num1, num2){
    var num = num2 - num1 + 1;
    for(let i = 0; i < num; i++){
        arr.push(num2 - i);
    }
    arr.reverse();
    return arr;
}

console.log(returnNum(1,11));


