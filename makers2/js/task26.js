'use strict'

let guest = prompt("", "");

let guest2 = guest.split("").reverse();

guest2 = guest2.join("");

    if (guest === guest2) {
        console.log(true);
    } else {
        console.log(false);
    }


console.log(guest);
console.log(guest2);
