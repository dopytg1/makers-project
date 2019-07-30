'use strict'

let arr = ["sam", "sam", "Joe", "sam", "Jim", "Jane", 'Jane'];
function squash(arr){
    var tmp = [];
    for(var i = 0; i < arr.length; i++){
        if(tmp.indexOf(arr[i]) == -1){
        tmp.push(arr[i]);
        }
    }
    return tmp;
}

console.log(squash(arr));

