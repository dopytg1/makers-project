'use strict';


let div = document.querySelectorAll("div");


for(let i = 0; i < 3;i++){
    div[i].style.color = "red";
}

for(let i = 0; i < 6; i++){
    div[i+3].style.color = "green";
}