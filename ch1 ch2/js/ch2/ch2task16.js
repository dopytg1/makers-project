'use strict';


class home {
    constructor(rooms = 3) {
        this.rooms = rooms;
    }
}

let myHome = new home();

console.log(myHome.rooms);

let indOf = myHome instanceof home;
console.log(indOf);

