'use strict'

// function drawCats ( a ){
//     for ( let i = 0 ; i < a ; i++){
//         console.log( i + 1 + " >-!-<")
//     }
// }

// drawCats( 3 );

// function returnNumber (num){

//     let i = num * 2;

//     console.log( i );
// }

// returnNumber( 5 );


// console.log('hello world');  //1

// let a = "hello ",  //2
// b = "world";

// console.log(a + b); 


// let a = 5,  //number  //3
// b = "string",  //string
// c = false,   //boolean
// d = true,  //boolean
// e = undefined, //undefind
// f = null;  //null


// let a = prompt("Назовите свое имя", ""),  //4
// b = prompt("Кем вы работаете", "");
// alert("Вас зовут " + a + " и вы работаете " + b);
// let a = document.getElementsByClassName('button');




// let a = +prompt('Запишите первое число', ''), //5
// b = +prompt("с вас второе число ", "");


// alert( a + "+" + b + "=" + (a + b));

// alert( a + "-" + b + "=" + (a - b));

// alert( a + "*" + b + "=" + (a * b));

// alert( a + "/" + b + "=" + (a / b));



// var ask = +prompt('Напишите пожалуйста свой возраст'); //6
// console.log(ask.typeof);

// if (ask <= 13) {
//     alert("adventure time");
// } else if (ask == 14 || ask == 15 || ask == 16 || ask == 17) {
//     alert("The lord of the rings");
// } else if (ask >= 18) {
//     alert("Game of throne");
// } else if (ask.typeof === undefined || ask === "" || ask.typeof === NaN) {
//     alert("произошла ошибка");
// };



// let ask = prompt("Введите любой напиток", ""); //7

// if(ask == "coffee"){
// alert("Будьте осторожней с кофеином");
// }else if(ask == "beer" || ask == "vodka"){
// alert("Употребляйте алкоголь в меру");
// }else if(ask == "milk"){
// alert('Это очень хороший выбор');
// }else {
// alert('Ваш любимый напиток ' + ask);
// }



// let gameOfThrone = [  //9
// "Targarien",
// "Arryn",
// "Stark",
// "Lannister",
// "Baratheone",
// "Greyjoy"
// ]


// alert(gameOfThrone[3]);

// console.log(gameOfThrone[0]);

// gameOfThrone.shift();

// console.log(gameOfThrone[4]);

// gameOfThrone.pop();

// console.log(gameOfThrone);


//10

// for( let i = 0 ; i < 100 ; i++){
//  if( i % 2 != 0)continue
//  console.log( i );
// }

// 11

// var array = [

// ]

// for (let i = 0; i < 100; i++) {
//     array.push(i);

//     if (i % 3) {
//         console.log(i + " fizz");
//     } else if (i % 5) {
//         console.log(i + " buzz");
//     } else if (i % 3 && i % 5) {
//         console.log(i + " fizzbuzz");
//     }

// }

//12

// var student = {
//     name: "David",
//     sclass: "VI",
//     number: 12
// };

// console.log(student.name);

//13

// let radius = prompt('Пожалуйста радиус вашей окружности', ""),
//     pi = 3.1415;

// console.log((radius * radius) * pi);

// let S = Math.floor((radius * radius) * pi);

// alert('Площадь вашей окружности равняется ' + S);

//14

// let array = [];


// let a = "dog";

// for (let i = 0; i < 3; i++) {
//     array.push(a.slice(i));
// }

// console.log(array);


// let array = [];


// let a = "dog";

//   for (let i = 0 ; i < 3 ; i++){
//       array.push(a[i]);
//   }

// array.push(a[0]);
// array.push(a[0] + a[1]);
// array.push(a[0] + a[1] + a[2]);
// array.push(a[1]);
// array.push(a[1] + a[2]);
// array.push(a[2]);

// console.log(array);


// let btn = document.querySelector('.button'),
//     inpt = document.querySelector('.input'),
//     inpt2 = document.querySelector('.input__2');

// btn.addEventListener('click',function(){
//     let info = inpt.value;
//     console.log(info);
// });


//14

// let array = [

//   ],
//   question = prompt("Введите любое слово", "");

// for (let i = 0; i < question.length; i++) {
//   for (let count = i + 1; count < question.length + 1; count++) {
//     array.push(question.slice(i, count));
//   }
// }


// console.log(array);


// let array = [],
//   question = prompt("Введите любое слово", "");

//   for ( let i = 0 + 1; i < question.length ; i++){
//     array.push(question.slice(i));
//   }

// console.log(array);