// A lot more useful than Sets
// like object, but the key in maps can be any type (keys in object are string)

/*
  get()
  set()
  has()
  delete()
  clear()
  size
*/

const restaurant = new Map(); //create empty map
restaurant.set("name", "Classico Italiano"); // add new item to map
restaurant.set(1, "Firenze, Italy"); // key in map can be any type
restaurant.set(2, "Lisbon, Portugal");
console.log(restaurant);

//----------------------------------------
console.log("-------------- 1 -------------");
//----------------------------------------

restaurant
  .set("categories", ["Italian", "Pizerria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :("); // can chain methods in map

console.log(restaurant);
console.log(restaurant.get("name"));
console.log(restaurant.get(true));
console.log(restaurant.get("true")); // undefined >> must be correct in type to get the value
console.log(restaurant.get("1")); // undefined

//----------------------------------------
console.log("-------------- 2 -------------");
//----------------------------------------

const time = 21; // 9:00pm
console.log(
  restaurant.get(
    time > restaurant.get("open" && time < restaurant.get("close"))
  )
); // check if the restaurant is closed or not

//----------------------------------------
console.log("-------------- 3 -------------");
//----------------------------------------

console.log(restaurant.has("categories"));
restaurant.delete(2);
// restaurant.clear();
console.log("After deleted ", restaurant);
console.log(restaurant.size);

//----------------------------------------
console.log("-------------- 4 -------------");
//----------------------------------------

restaurant.set([1, 2], "Test"); // key is an array
console.log(restaurant.get([1, 2])); // undefined >> because array are ref type >> the array in set() and get() are not the same array in the heap in memory

// to make it work
const arr = [1, 2];
restaurant.set(arr, "Test");
console.log(restaurant.get(arr));

//----------------------------------------
console.log("-------------- 5 -------------");
//----------------------------------------

restaurant.set(document.querySelector("h1"), "Heading 1");
console.log(restaurant);
