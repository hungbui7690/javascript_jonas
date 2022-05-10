// 1st data structure in JS

const friend1 = "Micheal";
const friend2 = "Stephen";
const friend3 = "Bob";

// method 1: literal syntax
const friends = ["Micheal", "Steven", "Peter"];
console.log(friends);

// method 2
const years = new Array(1991, 1992, 1900, 1983);
console.log(years);

//-----------------------------------
console.log("-------1-------");
//-----------------------------------

console.log(friends[0]);
console.log(friends.length);

// get last element in the array
console.log(friends[friends.length - 1]);

// mutate array
// we declare with const, but we still can change
// because array is not primitive value >> it works because the way javascript stores data in memory (heap)
friends[2] = "Jay";
console.log(friends);

// we cannot replace the whole array
// this won't work
// friends = ['a', 'b', 'c'];

//-----------------------------------
console.log("-------2-------");
//-----------------------------------

// array can store multiple type of data (includes expression)
const firstName = "Joe";
const person = [firstName, "Doe", 2022 - 1990, "dev", friends];

console.log(person);
console.log(person.length);

//-----------------------------------
console.log("-------3-------");
//-----------------------------------

// Exercise
const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const years1 = [1990, 1987, 1879, 2012];
console.log(calcAge(years1)); // NaN
console.log(calcAge(years1[0]));
console.log(calcAge(years1[years1.length - 1]));

// can put expressions into array
const ages = [
  calcAge(years1[0]),
  calcAge(years1[1]),
  calcAge(years1[years1.length - 1]),
];
console.log(ages);
