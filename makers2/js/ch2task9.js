'use strict';


// let dog = {
//     name:"шарик",
//     numLegs:4
// }

// console.log(dog.name, dog.numLegs);

// dog.sayLegs = function () {
//     return "У "+ this.name + "а " + this.numLegs + " ноги";
// }

// console.log(dog.sayLegs());


class dog {
    constructor(name, numLegs) {
        this.name = name;
        this.numLegs = numLegs;
    }

    sayLegs() {
        console.log(this.name + " has " + this.numLegs + " legs");
    }
}

var sharick = new dog("Шарик", "4");

console.log(sharick.sayLegs());