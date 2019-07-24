'use strict';

let btn = document.querySelector(".btn"),
    table = document.querySelector(".sampleTable");

btn.addEventListener("click", function(e) {
    e.preventDefault();
    let td = document.createElement("td");
    td.innerHTML = "Row2 cell1";
    let td2 = document.createElement("td");
    td2.innerHTML = "Row2 cell2"
    sampleTable.insertBefore(td, sampleTable.children[1]);
});



