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

  // V1: nhận vào object
  // orderDelivery: function (obj) {
  //   console.log(obj);
  // },

  // V2: destructuring function parameters
  // orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
  //   console.log(
  //     `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
  //   );
  // },

  // V3: destructuring + set default value
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
};

//---------------------------------------------------
console.log("---------- 1 -----------");
//---------------------------------------------------

// destructuring object >> we use {}
// remember that with object, the order does not matter
// very useful when work with modern application >> getting data from APIs
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//---------------------------------------------------
console.log("---------- 2 -----------");
//---------------------------------------------------

// changing the variable name
const {
  name: restaurantName, // oldName : newName
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//---------------------------------------------------
console.log("---------- 3 -----------");
//---------------------------------------------------

// default value: to prevent undefined value
// we can see that both of them have default values, but "menu" does not exists, so it will use the default value instead
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//---------------------------------------------------
console.log("---------- 4 -----------");
//---------------------------------------------------

// mutate variable when destructuring
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // if we don't have () >> error because JS will think {} is a code block
console.log(a, b); // 23, 7 >> we mutated a, and b >> a was 111, b was 999

//---------------------------------------------------
console.log("---------- 5 -----------");
//---------------------------------------------------

// nested objects
const { fri } = openingHours;
console.log(fri);

// get open and close hours from fri
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

// get open and close + change name
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

//---------------------------------------------------
console.log("---------- 6 -----------");
//---------------------------------------------------

restaurant.orderDelivery({
  time: "22:30",
  address: "Via Vara",
  mainIndex: 2,
  starterIndex: 2,
});
