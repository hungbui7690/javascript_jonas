// Sets was introduced in ES6
// Collection of unique value

// new Set(iterable: array, str...)
const orderSet = new Set(["Pasta", "Pizza", "Pizza", "Risotto", "Pasta"]);
console.log(orderSet); // show unique values

console.log(new Set("Joe"));

//--------------------------------------
console.log("----------1----------");
//--------------------------------------

console.log(orderSet.size); // size, not length
console.log(orderSet.has("Pizza")); // like includes() in array
console.log(orderSet.has("Bread"));

//--------------------------------------
console.log("----------2----------");
//--------------------------------------

orderSet.add("Garlic Bread");
orderSet.delete("Risotto");

console.log(orderSet);

//--------------------------------------
console.log("----------3----------");
//--------------------------------------

console.log(orderSet[0]); // there's no way to get data out of set; because of data in set is unique >> there's no need to get data out of set

//--------------------------------------
console.log("----------4----------");
//--------------------------------------

// orderSet.clear(); // remove all items in the set

// console.log(orderSet);

//--------------------------------------
console.log("----------5----------");
//--------------------------------------

// We can loop like normal array
for (const order of orderSet) console.log(order);

//--------------------------------------
console.log("----------6----------");
//--------------------------------------

// Example: to remove all the duplications to find unique positions in the restaurant
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

const staffUnique = new Set(staff);
console.log(staffUnique);

// Sets are iterable, so we can use spread operator to convert it to array
const arrStaffUnique = [...staffUnique]; // convert to array
console.log(arrStaffUnique);

//--------------------------------------
console.log("----------6----------");
//--------------------------------------

console.log(new Set("Hung Thanh Bui").size); // get unique letter in a string
