'use strict';

var arr = ['jdiwqj', 'aindinwfqfq'];

var count = [];

var answ = 0;

for (let i = 0; i < arr.length; i++) {
    count.push(arr[i].length);
}

answ = Math.max.apply(null, count);

console.log("Саммая длинная строка состоит из " + answ + " элементов");