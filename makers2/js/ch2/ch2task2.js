'use strict';

function findLetter(word, find) {
    var count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] == find) {
            count = ++count;
        }
    }
    return count;
}

console.log(findLetter("madam", "m"));