"use strict";

const joe = {
  firstName: "Joe",
  year: 1990,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);

    // v1: this = undefined
    // const isMillenial = function () {
    //   console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // v2: solution 1 >>> arrow fn (ES6 solution)
    // const isMillenial = () => {
    //   console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // v3: solution 2 >>> use self instead of this (pre-ES6 solution)
    const self = this;
    const isMillenial = function () {
      console.log(self.year >= 1981 && self.year <= 1996);
    };

    isMillenial(); // regular function call, even though it is called in a method
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};

joe.greet(); // undefined >> {} is not a block, so it does not have scope, it is just the object literal which we use to define object >> global scope, not block scope

console.log(this.firstName); // undefined, no error >> because this = global scope, and in global scope does no have firstName >> that's is also why we don't use var to define variable. It will make that variable appears in the global scope

var firstName = "matilda"; // firstName will be added to global scope
console.log(this.firstName); // at this time, this.firstName = window.firstName

// >>>>>> we should use regular function to define function in object literal

// ---------------------------------------------------------
console.log("------- 1 -------");
// ---------------------------------------------------------

// Test isMillenial() in calcAge()

// v1
// if does no have 'use strict' >>> result will be false for isMillenial()
// if we have 'use strict' >>> error

// v2
// if we use arrow function >> we will get the correct result

//v3
// if we use self keyword >> we also can solve this problem
joe.calcAge();

// ---------------------------------------------------------
console.log("------- 2 -------");
// ---------------------------------------------------------

// argument keyword: this is an array that contains all information about our arguments
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

// ---------------------------------------------------------
console.log("------- 3 -------");
// ---------------------------------------------------------

// Arrow function does not have the "arguments" keyword
var addArrow = (a, b) => {
  // console.log(arguments);
  return a + b;
};
addArrow(5, 8);
