'use strict';

let pokemons = document.querySelector(".pokemons"),
    modalWindow = document.querySelector(".window"),
    img = document.querySelector("img");

fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(responce => responce.json())
    .then(body => {

        body.results.map(item => {
            let a = document.createElement("a");
            let p = document.createElement("p")
            p.innerHTML = item.name;

            a.append(p);
            pokemons.append(a);
            let countIt = 1;


            p.addEventListener("click", (e) => {
                e.preventDefault();
                modalWindow.style.display = "block";
                window.scrollTo(0,0);
                for (let i = 0; i < body.results.length; i++) {

                    if (body.results[i].name != p.textContent) {
                        countIt = countIt + 1;
                    } else if (body.results[i].name == p.textContent) {
                        break;
                    }

                }
                if (modalWindow.children.length > 1) {
                    modalWindow.children[1].remove();
                    modalWindow.children[2].remove();
                    modalWindow.children[1].remove();
                    // 
                }
                console.log(modalWindow.children);
                fetch(`https://pokeapi.co/api/v2/pokemon/${countIt}`)
                    .then(resolved => resolved.json())
                    .then(body => {


                        var name = document.createElement("h3");
                        name.innerHTML = "name: " + body.name;
                        modalWindow.append(name);
                        name.style.fontSize = "35px";

                        var height = document.createElement("p");
                        height.innerHTML = "height: " + body.height;
                        modalWindow.append(height);
                        height.style.fontSize = "35px";

                        var id = document.createElement("p");
                        id.innerHTML = "id: " + body.id;
                        modalWindow.append(id);
                        id.style.fontSize = "35px";

                    })

                    .catch(err => console.log(err));

            })


            img.addEventListener("click", (e) => {
                e.preventDefault();

                modalWindow.style.display = "none";
            })
        })


    })
    .catch(err => console.log(err));

fetch("https://pokeapi.co/api/v2/pokemon/2")
    .then(responce => responce.json())
    .then(body => {
        console.log(body);
    })
    .catch(err => console.log(err));