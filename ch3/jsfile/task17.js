'use strict';

let btn = document.querySelector("button"),
    input = document.querySelector("input");


btn.addEventListener("click", function(e) {
    e.preventDefault();
    console.log(input.value);
});

