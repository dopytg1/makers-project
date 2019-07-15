'use strict';

let num = 3,
    arr = [];

for (let i = 0; i < num; i++) {
    arr.push(num - i);
}
for (let i = 0; i < arr.length; i++) {
    
}

var counted = (accumulator, reducer) => accumulator * reducer;

    console.log(arr.reduce(counted));