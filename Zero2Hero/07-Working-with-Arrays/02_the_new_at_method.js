"use strict";

const arr = [1, 2, 3];
console.log(arr[0]);
console.log(arr.at(0));

//----------------------------------------------
console.log(`----------- 1 ----------`);
//----------------------------------------------

// GET LAST ELEMENT
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
console.log(arr.at(-2)); // get the 2nd of the last

//----------------------------------------------
console.log(`----------- 2 ----------`);
//----------------------------------------------
console.log("James".at(-1));
console.log("James".at(-2));
