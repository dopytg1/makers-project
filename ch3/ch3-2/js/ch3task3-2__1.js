'use strict';

let countryName = document.querySelector("#name"),
    countryRegion = document.querySelector("#region"),
    countrySubregion = document.querySelector("#subregion"),
    countryCapital = document.querySelector("#capital"),
    countryFlag = document.querySelector("#flag");

let country = prompt("select your country","");

fetch('https://restcountries.eu/rest/v2/name/' + country)
    .then(response => response.json())
    .then(body => {
        countryName.append(body[0].name);
        countryRegion.append(body[0].region);
        countrySubregion.append(body[0].subregion);
        countryCapital.append(body[0].capital);
        let img = document.createElement("img");
        img.setAttribute("src",body[0].flag);
        img.style.width = "200px";
        countryFlag.append(img);
        console.log(body);
    })
    .catch(err => console.log("Произшла ошибка"))

