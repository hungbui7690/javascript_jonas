"use strict";

// this = object that calling the method
// simple function call >> this = undefined
// arrow function >> this = this of surrounding function (lexical this)
// event listener >> this = DOM Element that the handler is attached to
// new, call, apply, bind... (later)

console.log(this); // Window object

// ---------------------------------------------------------
console.log("------- 1 -------");
// ---------------------------------------------------------

const calcAge = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this);
};

// this = window object if not in strict mode (sloppy mode)
// if in strict mode >> this = undefined
calcAge(1990);

// ---------------------------------------------------------
console.log("------- 2 -------");
// ---------------------------------------------------------

const calcAgeArrow = (birthYear) => {
  console.log(2022 - birthYear);
  console.log(this);
};

// this = window object
// arrow function >> this = surround object
calcAgeArrow(1990);

// ---------------------------------------------------------
console.log("------- 3 -------");
// ---------------------------------------------------------

const joe = {
  year: 1990,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },
};

// this = object who calls the method >> joe
joe.calcAge();

// ---------------------------------------------------------
console.log("------- 4 -------");
// ---------------------------------------------------------

const matilda = {
  year: 2017,
};

// COPY calcAge method from joe to matilda
matilda.calcAge = joe.calcAge;

console.log(joe);
console.log(matilda);

// though calcAge() was written in joe, but matilda is the one who calls it, so "this" = matilda object
matilda.calcAge();

// ---------------------------------------------------------
console.log("------- 5 -------");
// ---------------------------------------------------------

const f = joe.calcAge;

f(); // error >> regular function call >> "this" = undefined >> undefined.year = error
