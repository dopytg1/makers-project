'use strict';


let dog = {
    name:"шарик",
    numLegs:4
}

console.log(dog.name, dog.numLegs);

dog.sayLegs = function () {
    return "У "+ this.name + "а " + this.numLegs + " ноги";
}

console.log(dog.sayLegs());


