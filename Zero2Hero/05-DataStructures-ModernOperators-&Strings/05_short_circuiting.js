const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//-------------------------------------------
console.log("------------- OR ------------");
//-------------------------------------------

// first truthy value will be the result
console.log(3 || "Joe"); // 3
console.log("" || "Joe"); // Joe
console.log(true || 0); // true
console.log(undefined || null); // null

console.log(undefined || 0 || "Hello" || 23 || null); // Hello

//-------------------------------------------
console.log("------------- 1 ------------");
//-------------------------------------------

// restaurant.numGuest = 23;
const guests1 = restaurant.numGuest ? restaurant.numGuest : 10; // old method
console.log(`guests1: `, guests1);

// short-circuiting
const guests2 = restaurant.numGuest || 10;
console.log(`guests2: `, guests2);

//-------------------------------------------
console.log("------------- AND ------------");
//-------------------------------------------

// last truthy value will be the result
console.log(0 && "Joe"); // 0
console.log(7 && "Joe"); // Joe
console.log("Hello" && 23 && null && "joe"); // null

//-------------------------------------------
console.log("------------- 2 ------------");
//-------------------------------------------

// if the function orderPizza() exists, then...
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushroom", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushroom", "spinach");
