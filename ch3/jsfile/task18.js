'use strict';


let name = document.querySelector(".username"),
    password = document.querySelector(".password"),
    btn = document.querySelector("#btn");


    let obj = {
        username: "",
        userpasword: ""
    }

window.addEventListener("input", function () {
    if (name.value.length >= 6 && password.value.length >= 6) {
        btn.removeAttribute('disabled');
    }
});


btn.addEventListener("click", function (e) {
    e.preventDefault();
    obj.username = name.value;
    obj.userpasword = password.value;
    console.log("");
    // console.log(obj);
    console.log(name.value);
});