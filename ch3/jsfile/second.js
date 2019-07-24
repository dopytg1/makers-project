'use strict';

let obj = {
    firstName: "",
    lastName: ""
}

let btn = document.querySelector(".input__btn"),
    name = document.querySelector(".name__1"),
    last = document.querySelector(".name__2");


btn.addEventListener("click", function(event){
    event.preventDefault();
    console.log(name.value);
    obj.firstName = name.value;
    obj.lastName = last.value;
    console.log(obj);
});


