/*
  1)  new Map()
      set() 
  3)  new Map([
      [key, value],
      [key, value]
  ])
  2) new Map(Object.entries(obj{obj}))

  map.entries()
  map.keys()
  map.values()
*/

const openingHours = {
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
};

const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Try again! 👎"],
]); // array of arrays [key, value]
console.log(question);

console.log(`Object.entries()`, Object.entries(openingHours)); // array of arrays

// we can use question map & Object.entries(object) have the same structure of data (Array of arrays [key, value]) >> so we can convert object to map easily by using Object.entries(object)

const hoursMap = new Map(Object.entries(openingHours));
console.log("hoursMap", hoursMap);

//-------------------------------------------
console.log("---------- 1 ----------");
//-------------------------------------------

// Quiz app
console.log(question.get("question"));
// Because maps are iterable >> we can use for-of to looop
for (const [key, value] of question) {
  if (typeof key == "number") console.log(`Answer ${key} : ${value}`);
}

// const answer = Number(prompt("Your answer"));

// answer === question.get("correct")
//   ? console.log(question.get(true))
//   : console.log(question.get(false));

//-------------------------------------------
console.log("---------- 2 ----------");
//-------------------------------------------

// Sometimes, we need to convert Maps back to Arrays >> spread operator
console.log([...question]);

//-------------------------------------------
console.log("---------- 3 ----------");
//-------------------------------------------

// 3 methods below will return Iterator
console.log(question.entries()); // get data from maps
console.log(question.keys());
console.log(question.values());
