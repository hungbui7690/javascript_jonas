"use strict";

//----------------------------------------------
console.log(`----------- 1 ----------`);
//----------------------------------------------
let arr = ["a", "b", "c", "d", "e"];

// SLICE()

console.log(arr.slice(2)); // starts from index 2 to the end of array >> c, d, e >> return new array, so does not mutate the original array
console.log(arr.slice(2, 4)); // start from 2, end at 3 >> c, d
console.log(arr.slice(-2)); // last 2
console.log(arr.slice(-1)); // last 2
console.log(arr.slice(1, -2)); // except the last 2, starts from index 1

//----------------------------------------------
console.log(`----------- 2 ----------`);
//----------------------------------------------

console.log(arr.slice()); // shallow copy of array
console.log([...arr]); // another way to copy

//----------------------------------------------
console.log(`----------- 3 ----------`);
//----------------------------------------------

// SPLICE(): similar to SLICE(), but mutate the original array
console.log(arr.splice(2)); // mutate the original array >> c, d, e
console.log(arr); // original array was mutated >> a, b
console.log(arr.splice(-1)); // b
console.log(arr); // a

//----------------------------------------------
console.log(`----------- 4 ----------`);
//----------------------------------------------

// REVERSE()
const arr2 = [1, 2, 3, 4, 5, 9];
console.log(arr2.reverse()); // mutate the original array
console.log(arr2);

//----------------------------------------------
console.log(`----------- 5 ----------`);
//----------------------------------------------

// CONCAT(): merge/join arrays >> does not mutate the original array
arr = ["a", "b", "c", "d", "e"];
const merge = arr.concat(arr2); // method 1
console.log(merge);

console.log([...arr, ...arr2]); // method 2

//----------------------------------------------
console.log(`----------- 6 ----------`);
//----------------------------------------------

// JOIN()
console.log(merge.join(" - "));
