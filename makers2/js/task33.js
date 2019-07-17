'use strict';

let size = [4,3,2,1,5];

let way =   [0,1,0,0,0];


function aliveFishCount(size, way){
    let fish = 0;
    for(let i = 0; i < size.length; i++ ) {
        fish = fish + 1;
    }
    for(let j = 0; j < size.length; j++){
        if (size[j] > size[j + 1]){
            size[j] = size[j] + size[j + 1];
           
        } 
        console.log(size);
    }
    return fish;
}

console.log(aliveFishCount(size,way));
