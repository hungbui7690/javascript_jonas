const restaurant = {
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for-of looop: we can still use the continue & break keywords
for (const item of menu) console.log(item);

//--------------------------------------
console.log("--------- Get Index ---------");
//--------------------------------------

// get index from for-of loop
for (const item of menu.entries()) {
  console.log(item);
  console.log(`${item[0] + 1}: ${item[1]}`); // old way
}

console.log("--------- NEW WAY ---------");
for (const [i, element] of menu.entries()) {
  // new way
  console.log(i + 1, element);
}
