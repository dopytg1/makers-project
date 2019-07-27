'use strict';

let code = document.querySelector(".code"),
    flag = document.querySelector(".flag"),
    name = document.querySelector(".name"),
    capital = document.querySelector(".capital"),
    population = document.querySelector(".population"),
    grid = document.querySelector(".grid");


function main(num) {

    for (let i = 0; i < num.length; i++) {

    }

}
fetch("https://restcountries.eu/rest/v2/name/canada")
    .then(response => response.json())
    .then(body => {
        let cioc = body[0].cioc;
        code.append(cioc);

        let img = document.createElement("img");
        img.setAttribute("src", body[0].flag);
        flag.append(img);
        img.style.width = "200px";

        name.append(body[0].name);

        capital.append(body[0].capital);

        population.append(body[0].population);

        console.log(body);
    })
    .catch(console.error())

let arr = [];

fetch("https://restcountries.eu/rest/v2/name/usa")
    .then(response => response.json())
    .then(body => {
        function createDiv(num) {
            for (let i = 0; i < 10; i++) {
                let div = document.createElement("div");
                div.setAttribute("class", "div");
                arr.push(div);
                grid.append(div);
                let p = document.createElement("p");


                let img = document.createElement("img");
                img.setAttribute("src", body[0].flag);
                div.append(img);
                img.style.width = "200px";

                p.append(body[0].name);
                p.append(body[0].capital);
                div.append(p);

            }

            // let cioc = body[0].cioc;
            // p[0].append(cioc);

            // let img = document.createElement("img");
            // img.setAttribute("src", body[0].flag);
            // flag.append(img);
            // img.style.width = "200px";

            // name.append(body[0].name);

            // capital.append(body[0].capital);

            // population.append(body[0].population);

            // console.log(body);

        }

        createDiv();

    })
    .catch(console.error())