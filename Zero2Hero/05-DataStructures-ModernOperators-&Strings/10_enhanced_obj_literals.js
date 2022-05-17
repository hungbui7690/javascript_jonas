// 3)
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// 1)
const openingHours = {
  [weekdays[3]]: {
    // 3) we can put computed value here
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    // 3) we can put computed value here
    open: 0, // Open 24 hours
    close: 12 + 12, // 3)
  },
};

// normal object literal
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // 1)
  // openingHours: openingHours, // pre ES6
  openingHours, // ES6 enhanced object literals: when property key & value are equal >> we can omit one

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 1,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  // 2)
  // pre ES6
  // orderPasta: function (ing1, ing2, ing3) {
  // ES6 >> remove : & function keyword
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} & ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//---------------------------------------------
console.log("------------- 1 ------------");
//---------------------------------------------

console.log(restaurant);
