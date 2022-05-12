const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  // this function needs at least 1 parameter, other params are optional
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//---------------------------------------------------
console.log("---------- 1 -----------");
//---------------------------------------------------

// DESTRUCTURING
// opposite of spread operator >> to collect elements and condense them into an array >> to pack elements into an array

// spread operator
const arr = [1, 2, ...[3, 4]]; // ... is on the right side of =

// rest operator
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // ... is on the left side of =, and is at the end of the array

//---------------------------------------------------
console.log("---------- 2 -----------");
//---------------------------------------------------

const [pizza, , rissoto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, rissoto, otherFood);

//---------------------------------------------------
console.log("---------- 3 -----------");
//---------------------------------------------------

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

//---------------------------------------------------
console.log("---------- 4 -----------");
//---------------------------------------------------

// FUNCTIONS
const add = function (...numbers) {
  // rest arguments
  let sum = 0;
  console.log(numbers);
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(2, 3, 4, 5);
add(4, 5, 6, 7, 9, 11);

const x = [1, 2, 3];
add(...x); // spread

//---------------------------------------------------
console.log("---------- 5 -----------");
//---------------------------------------------------
restaurant.orderPizza("mushroom", "onion", "olives");
restaurant.orderPizza("mushroom");

//---------------------------------------------------
console.log("---------- 6 -----------");
//---------------------------------------------------
//---------------------------------------------------
console.log("---------- 7 -----------");
//---------------------------------------------------
