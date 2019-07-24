'use strict';

let atribs = document.querySelector("a"),
    button = document.querySelector("button"),
    text = document.querySelector("p");

let atrArr = [];

button.addEventListener("click", function(e) {
    e.preventDefault();
    atribs.style.color = "red";
    atrArr.push(atribs.getAttribute("type", "hreflang"));
    atrArr.push(atribs.rel , atribs.target , atribs.href , atribs.id);
    console.log(atrArr);
});