'use strict';

let circleColors = ["red", "black", "green", "blue", "yellow", "pink"];  // цвета (пригодятся в дальнейшем)
let circleHeigthArr = [];
let randomHeight = [];
function drawCircle(circles) {   // функций вывода кругов в html страничку
    let arr = [];
    for (let i = 0; i < circles; i++) {
        let circle = document.createElement("div");
        arr.push(circle);
    }
    for(let i = 50; i < 200; i++){
        circleHeigthArr.push(i);
    }
    for (let i = 0; i < circles; i++){
        let randomNum = Math.floor(Math.random()* 150);
        randomHeight.push(circleHeigthArr[randomNum]);
    }
    console.log(randomHeight[0]);
    for (let i = 0; i < circles; i++) {
        let circleHeigth = Math.floor(Math.random() * 200);//Рандомайзер

        let randomRight = Math.floor(Math.random() * 1024);
        let randomLeft = Math.floor(Math.random() * 1024);
        let randomTop = Math.floor(Math.random() * 768);
        let randomBottom = Math.floor(Math.random() * 768);
        let randomColor = Math.floor(Math.random() * 6);

        arr[i].style.width = randomHeight[i] + "px"; // Размер круга
        arr[i].style.height = randomHeight[i] + "px";

        
        arr[i].style.top = randomTop + "px";  // Место расположение круга
        arr[i].style.right = randomRight + "px";
        arr[i].style.bottom = randomBottom + "px";
        arr[i].style.left = randomLeft + "px";

        arr[i].style.background = circleColors[randomColor];

        arr[i].innerHTML = "";
        let body = document.querySelector("body").appendChild(arr[i]); // вывод на страницу
    }
    
    return arr; 
}



drawCircle(20);
