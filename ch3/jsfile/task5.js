'use strict';

let btn = document.querySelector(".btn"),
    inp1 = document.querySelector(".inp1"),
    inp2 = document.querySelector(".inp2"),
    table = document.querySelector(".table"),
    td = document.querySelectorAll("td");


btn.addEventListener("click" , function() {
    console.log(inp2.value);
    let inp = +inp1.value;
    td[inp - 1].innerHTML = inp2.value;
    console.log(td);
});