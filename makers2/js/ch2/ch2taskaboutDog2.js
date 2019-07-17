'use strict';

class Animal {
    constructor(name, numLegs = 4) {
        this.name = name;
        this.numLegs = numLegs;
    }

    sayLegs() {
        console.log(this.name + " has " + this.numLegs + " legs");
    }
}

Animal.prototype.eat = function () {
    console.log(`${this.name} eat "nom nom nom"`); //added the new function at the dog
}
// sharick --> dog.prototype --> animal.prototype --> object.prototype --> null

class Dog extends Animal {
    constructor(name, numLegs) {
        super(name, numLegs);

    }
}

Dog.prototype.bork = function () {
    console.log(`${this.name} got woof`)
}

class Cat extends Animal {
    constructor(name, numLegs) {
        super(name, numLegs);
    }

    bork() {
        console.log(`${this.name} got myau`)
    }
}
class Bear extends Animal {
    constructor(name, numLegs) {
        super(name, numLegs);

    }
    bork() {
        console.log(`${this.name} got vaur`)
    }


}



let murzick = new Cat("murzick");
let sharick = new Dog("Sharick", "4");

console.log(murzick.bork(), sharick.eat(), sharick.bork());