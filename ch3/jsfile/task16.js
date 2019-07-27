'use strict';
let p = document.querySelectorAll(".p");
let arr = [];

function drowHr() {
    for (let i = 0; i < 3; i++) {
        let hr = document.createElement("hr");
        hr.innerHTML;
        arr.push(hr);
    }

    for (let i = 0; i < p.length; i++) {
        p[i].append(arr[i]);
    }
};

drowHr();