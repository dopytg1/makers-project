'use strict';

// class dog {
//     constructor(name, color,numLegs){ //  first constructor
//         this.name = name;
//         this.color = color;
//         this.numLegs = numLegs;
//     }

// }

class dog2 { 
    constructor(name,color){
        this.name = name;
        this.color = color;
        this.numLegs = 4;
    }
}

let ownProps = [];

let hound = new dog2("bruce", "grey", 8);


ownProps.push(hound.name, hound.color, hound.numLegs);
console.log(ownProps);



