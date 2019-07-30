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
    console.log(`${this.name} gose woof`)
}

class CaBe extends Animal {  //  borks of cat and bear 
    constructor(name, numLegs) {
        super(name,numLegs);
    }
    bork(){
        console.log(`graaa`);
    }
}

class Cat extends CaBe {
    constructor(name, numLegs) {
        super(name, numLegs);
    }

}
class Bear extends CaBe {
    constructor(name, numLegs) {
        super(name, numLegs);

    }

}



let murzick = new Cat("murzick");
let sharick = new Dog("Sharick", "4");
let vasia = new Bear("vasia", "4")

console.log(murzick.eat());
console.log(vasia.eat());
