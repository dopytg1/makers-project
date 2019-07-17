'use strict'

let array1 = [1,0,2,3,4,0],
    array2 = [3,5,6,7,8,13];

function countArr(arr1, arr2){
    let sumArr = [];
    for(let i = 0;i < arr2.length;i++){
        sumArr.push(arr1[i] + arr2[i]);
    }
    return sumArr;
}

console.log(countArr(array1, array2));