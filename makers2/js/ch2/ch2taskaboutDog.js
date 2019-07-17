'use strict';


class dog {
    constructor(name) {
        this.name = name;

    }

    sayLegs() {
        console.log(this.name + " has " + this.numLegs + " legs");
    }
}


let sharick = new dog("Шарик");  // added the new object
dog.prototype.numLegs = 4;
// console.log(sharick.sayLegs());

let ownPops = {
    ...sharick      // created the new arr 
};
console.log(ownPops);


dog.prototype.eat = function () {
    console.log("nom nom nom");        //added the new function at the dog
}

let prototypeProps = dog.prototype;
console.log(prototypeProps);

dog.prototype = {
    constructor (){
        
    }
}


