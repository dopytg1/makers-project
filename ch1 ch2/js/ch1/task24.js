'use strict'

let elevator = {
    toFloor: function(num){
        for(let i = 0 + 1;i < num + 1;i++){
            if(num > 0 && num < 16){
                console.log("elevator is on the floor " + i);
            }else {
                console.log("something is wrong");
            }         
        }        
    },
    printFloor: function(num){
       console.log("you are on the floor " + num);
    },
    oneFloorUp: function(num){
        
    },
    oneFloorDown: 0
}

elevator.toFloor(3);
elevator.printFloor(3);

