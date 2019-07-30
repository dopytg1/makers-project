'use strict'

let word = prompt('enter the word', "");
let word2 = word.split("");

function turneInTo(){
    word2 = word2.sort(); 
    word2 = word2.join("");
    return word2;
}


turneInTo();
console.log(word2);