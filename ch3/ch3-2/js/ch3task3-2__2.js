'use strict';

let code = document.querySelector("#code"),
    flag = document.querySelector("#flag"),
    name = document.querySelector("#name"),
    capital = document.querySelector("#capital"),
    population = document.querySelector("#population"),
    grid = document.querySelector(".grid"),
    scrollUp = document.querySelector(".scroll__up"),
    input__text = document.querySelector(".input__text"),
    input__btn = document.querySelector(".input__btn");

fetch("https://restcountries.eu/rest/v2/all")
    .then(responce => responce.json())
    .then(body => {
        body.map(item => {
            let div = document.createElement("div");
            let p = document.createElement("p");
            let img = document.createElement("img");
            img.setAttribute("src", item.flag);
            p.append(img);
            img.style.width = "200px";
            div.append(p);
            flag.append(div);
            
        })
        body.map(item => {

            let div = document.createElement("div");
            let p = document.createElement("p");
            div.append(p);
            p.innerHTML = item.alpha2Code;
            code.append(div);

        })
        body.map(item => {
            let div = document.createElement("div");
            let p = document.createElement("p");
            div.append(p);
            p.innerHTML = item.name;
            name.append(div);
            input__btn.addEventListener("click", () => {
                for (let i = 0; i < 250; i++) {
                    if (p.textContent == input__text.value) {
                        p.scrollIntoView();
                    }
                }
            })
        })
        body.map(item => {
            let div = document.createElement("div");
            let p = document.createElement("p");
            div.append(p);
            p.innerHTML = item.capital;
            capital.append(div);

        })
        body.map(item => {
            let div = document.createElement("div");
            let p = document.createElement("p");
            div.append(p);
            p.innerHTML = item.population;
            population.append(div);

        })
    })

    .catch(err => console.log("error"));

scrollUp.addEventListener("click", function () {
    window.scrollTo(0, 0);
});