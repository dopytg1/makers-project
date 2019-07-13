'use strict'
function string() {
    let string = prompt("","");
    var splits = string.split(" ");
    var stringItog = "";
  
    for (let i = 0; i < splits.length; i++) {
      let Name = splits[i];
      let First = Name.substring(0, 1).toUpperCase();
      let Leftovers = Name.substring(1, Name.length)
      stringItog += First + Leftovers + " ";
    }
   
    console.log(stringItog);
  }
  string();