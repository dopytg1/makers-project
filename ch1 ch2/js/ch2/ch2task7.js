'use strict';


let obj = {

}

obj.greet = function () {
    console.log("HEY");
    return "HEY";
}

obj.hey = obj.greet();
console.log(obj);