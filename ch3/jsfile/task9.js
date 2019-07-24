let btn = document.querySelector("#btn"),
    radius = document.querySelector(".inpt");


btn.addEventListener("click", function() {
    let radius1 = radius.value;
    let result = 4/3*3.14*radius1*radius1*radius1;
    console.log(result);
    alert(4/3*3.14*radius1*radius1*radius1);
});

let btn = document.querySelector(".btn"),
    imgs = document.querySelectorAll("img");


// imgs.style.display = "none";
// let i = 0;
// btn.addEventListener("click",function() {
    
//     i = i + 1;
//     console.log(i);
//     let randomNum = Math.floor(Math.random() * 3);
//     // console.log(randomNum);
//     imgs[randomNum].style.display = "block";
    
// })
