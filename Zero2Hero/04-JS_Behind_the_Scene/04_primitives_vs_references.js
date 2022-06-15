// primitives
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

// object
const me = {
  name: "Joe",
  age: 30,
};

const friend = me; // at this time, both point to the same object in the heap
friend.age = 27;
console.log("Friend: ", friend);
console.log("Me: ", age); // age was chaged to 27

// ---------------------------------------------------------
console.log("------- 1 -------");
// ---------------------------------------------------------

// Copy objects
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};

// This method can only copy the first level. It means that when we have objects inside an object, it won't copy everything but the outter object. >>> shallow copy (copy just 1st level), not deep clone (copy everything)
const jessicaCopy = Object.assign({}, jessica);

jessicaCopy.lastName = "Davis";
console.log("Jessica: ", jessica);
console.log("Jessica Copy: ", jessicaCopy);

// ---------------------------------------------------------
console.log("------- 2 -------");
// ---------------------------------------------------------

// shallow copy >> so when we change the array, both object will be changed
// deep clone is very hard to achive >> so we use "lodash" library
jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");
console.log("Jessica: ", jessica);
console.log("Jessica Copy: ", jessicaCopy);
