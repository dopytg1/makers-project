'use strict';

let btn = document.querySelector(".btn"),
    inpt = document.querySelector(".inpt"),
    td = document.querySelectorAll("td");

btn.addEventListener("click", function() {
    let inp = +inpt.value;
    console.log(inp);
    console.log(td[inp - 1]);
});