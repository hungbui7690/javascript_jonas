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

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// When we get data from real world WEB API, there would be some restaurants that does not have some properties (i.e: monday in this situation) >> undefined

// console.log(restaurant.openingHours.mon.open); // mon = undefined >> mon.open = error

// we can check by using if/else stmt
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// ES2020: Optional Chaining >> when it sees a property that is undefined, it will return immediately
// in this case: if mon exists, then check mon.open >> otherwise, return undefined immediately
console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours.mon.open);

console.log(restaurant.openingHours?.mon?.open); // multiple optional chaining

//--------------------------------------
console.log("--------- 1 ---------");
//--------------------------------------

// Example: Check to see which days the restaurant is opened
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? "closed"; // because on sunday, open at 0 >> use ?? (nullish) instead of || (or)
  console.log(`On ${day}, ${open}`);
}

//--------------------------------------
console.log("--------- 2 ---------");
//--------------------------------------

// we can also check if the methods exist in the object or not
console.log(restaurant.order?.(0, 1) ?? "Method does NOT exist! ⛔");

console.log(restaurant.orderBread?.(0, 1) ?? "Method does NOT exist! ⛔");

//--------------------------------------
console.log("--------- 3 ---------");
//--------------------------------------

// -----Check Array----
// new method
// const user = [{ name: "Joe", email: "joe@gmail.com" }];
const user = [];
console.log(user[0]?.name ?? "User array is empty!");

// old method
if (user.length > 0) console.log(user[0].name);
else console.log("User array is empty!");
