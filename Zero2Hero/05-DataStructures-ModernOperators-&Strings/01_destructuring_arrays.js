"use strict";

const restaurant = {
  name: "Classico Italiano",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // create order (array) with 2 items
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// Destructuring: break complex data structures down into smaller data structure (like variable)
const arr = [2, 3, 4];

// old method
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; // destructure
console.log(x, y, z);
console.log(arr); // original array will not be destroyed

//---------------------------------------------------
console.log("---------- 1 -----------");
//---------------------------------------------------

// categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"]
const [first, second] = restaurant.categories;
console.log(first, second);

// get the 1st and the 3rd elements in the array
let [mainx, , third] = restaurant.categories;
console.log(mainx, third);

// get the 1st and the 4th elements in the array
let [mainz, , , forth] = restaurant.categories;
console.log(mainz, forth);

//---------------------------------------------------
console.log("---------- 2 -----------");
//---------------------------------------------------

// if we want to switch main and secondary in the array
// old method
let temp = mainx;
mainx = third;
third = temp;
console.log(mainx, third);

// new method
[mainx, third] = [third, mainx];
console.log(mainx, third);

//---------------------------------------------------
console.log("---------- 3 -----------");
//---------------------------------------------------

// order: function (starterIndex, mainIndex) {
//   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// },

// receive 2 return values from a function
console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//---------------------------------------------------
console.log("---------- 4 -----------");
//---------------------------------------------------

// destructure nested array
const nested = [2, 4, [5, 6]];

// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

//---------------------------------------------------
console.log("---------- 5 -----------");
//---------------------------------------------------

// default value
const [p, q, r = 1] = [8, 9]; // if we don't set default value = 1 >>> r = undefined
console.log(p, q, r);
