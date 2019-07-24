'use strict';

let btn = document.querySelector(".btn"),
    e = document.querySelector("#colorSelect"),
    option = document.querySelectorAll(".option");


btn.addEventListener("click", function() {
    var delMy = e.options[e.selectedIndex].value;
    e.removeChild(option[delMy]);
});

