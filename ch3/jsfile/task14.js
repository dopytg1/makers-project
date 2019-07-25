'use strict';

let ul = document.querySelector("#twitter__list"),
    li = document.querySelectorAll("li");


function changeName(changeT, changeI) {
    li[changeI].remove();
    let changes = document.createElement("li");
    changes.innerHTML = changeT;
    ul.appendChild(changes);
}

changeName("Paul Maccarty <a> maccarty</a> followers: 1500",2);
