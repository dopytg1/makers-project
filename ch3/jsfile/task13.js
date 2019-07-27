'use strict';

let ol = document.querySelector("#to__do__list");

let arr =  ['Купить хлеб', 'Сделать бутерброд', 'Почистить зубы', 'Посмотреть фильм', 'Лечь спать'];

for(let i = 0; i < arr.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = arr[i];
    ol.append(li);
}

