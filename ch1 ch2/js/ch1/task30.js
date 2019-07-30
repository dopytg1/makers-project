'use strict';

let str = ('abacddbecnh'),
    str2 = str.split(""),
    result = str2.sort();


function getUniqueElems(A) {
    var B = [];
    for (let i = 1, j = 0, t; i < A.length + 1; i++) {
        if (A[i - 1] === A[i]) t = A[i - 1];
        if (A[i - 1] !== t) B[j++] = A[i - 1];
    }
    return B;
}

console.log(result);
console.log(getUniqueElems(str2));