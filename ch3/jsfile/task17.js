'use strict';

let btn = document.querySelector("button"),
    input = document.querySelector("input"),
    img = document.querySelector("img");

let div = document.createElement("div");
div.innerHTML = "";

btn.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(input.value);
    div.style.display = "flex";
    div.style.background = "green";
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.color = "black";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.innerHTML = input.value;
    img.style.display = "flex";
    let body = document.querySelector("body").appendChild(div);

});

img.addEventListener("click", function() {
    div.style.display = "none";
    img.style.display = "none";
});