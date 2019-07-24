'use strict';

let text = document.querySelector("p");

text.addEventListener("mouseover", function (e) {
    if (text.style.color != "red") {
        text.style.color = "red";
    } else if (text.style.color != "black") {
        text.style.color = "black";
    };
});

