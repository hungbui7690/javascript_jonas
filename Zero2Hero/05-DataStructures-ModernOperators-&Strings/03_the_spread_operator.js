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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} & ${ing3}`);
  },
};

//---------------------------------------------------
console.log("---------- 1 -----------");
//---------------------------------------------------

// spread operator
const arr = [7, 8, 9];

// old method
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

// ES6
const arr1 = [1, 2, arr]; // without ... >> without unpacking the arr array
console.log(arr1);

const newArray = [1, 2, ...arr]; // with ... >> unpacking the arr array
console.log(newArray);

console.log(...newArray);

//---------------------------------------------------
console.log("---------- 2 -----------");
//---------------------------------------------------

// we don't mutate the original array, but create a new array
const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// the difference between the spread operator and destructuring is: we don't create new variable with spread operator, and also we take all the elements from the original array.

//---------------------------------------------------
console.log("---------- 3 -----------");
//---------------------------------------------------

// copy array >> shallow copy
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// join/merge 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//---------------------------------------------------
console.log("---------- 4 -----------");
//---------------------------------------------------
// spread operator works with all iterables
// Iterables: array, strings, maps, sets, NOT objects
const str = "john";
const letters = [...str, " ", " X"];
console.log(letters);

// this won't work since ${} is not the place to put multiple values
// console.log(`${...str}`);

//---------------------------------------------------
console.log("---------- 5 -----------");
//---------------------------------------------------

// const ingredients = [
//   prompt(`Let's make pasta! Ingredient 1`),
//   prompt(`Ingredient 2`),
//   prompt(`Ingredient 3`),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

//---------------------------------------------------
console.log("---------- 6 -----------");
//---------------------------------------------------

// copy to new object
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guisepe" };
console.log(newRestaurant);

// copy and change property value
const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Risotance Roman";
console.log(restaurantCopy.name);
console.log(restaurant.name);
