'use strict';

let btn = document.querySelector(".btn"),
    imgs = document.querySelectorAll("img");


// imgs.style.display = "none";
let i = 0;
btn.addEventListener("click",function() {
    imgs[0].style.display = "none";
    imgs[1].style.display = "none";
    imgs[2].style.display = "none";
    i = i + 1;
    console.log(i);
    let randomNum = Math.floor(Math.random() * 3);
    imgs[randomNum].style.display = "block";
    
});
