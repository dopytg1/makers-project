'use strict';

let btn = document.querySelector(".btn"),
    select = document.querySelector("#mySelect");


btn.addEventListener("click", function() {
    let selectedInd = select.options[select.selectedIndex].value;
    console.log(selectedInd);
    let count = 0;
    for(let i = 0;i < selectedInd.length;i++){
        count = count + 1;
    }
    alert(count);
})


