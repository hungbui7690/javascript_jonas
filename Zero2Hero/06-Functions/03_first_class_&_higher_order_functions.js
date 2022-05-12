// First Class Functions:
// JS treats functions as "first-class citizens" >> this means that functions are "simply values" & another "type of object"
// >> 1) we can store functions in variables or properties
// >> 2) we can pass function as arguments to other functions
// >> 3) we can RETURN functions FROM functions
// >> 4) we can call methods on functions >> bind(), apply()

// Higher-Order Functions:
// is a function that "receives" another function as an argument (addEventListener(event, callback Fn)), that "returns" a new function, or "both"
// function count() {
//   // higher-order fn
//   let counter = 0;
//   return function () {
//     // returned fn
//     couter++;
//   };
// }

// >>> First-Class is just a theory >> fn is a value >> no first-class function in practice

//-----------------------------------------------------

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
  console.log("####");
};

transformer("Javascript is the best!", upperFirstWord);
transformer("Javascript is the best!", oneWord);

//---------------------------------------------
console.log(`-------- 1 ---------`);
//---------------------------------------------

const high5 = function () {
  console.log("👏");
};
document.body.addEventListener("click", high5);

//---------------------------------------------
console.log(`-------- 2 ---------`);
//---------------------------------------------

["Jonas", "Martha", "Adam"].forEach(high5);

// JS uses callbacks all the time:
// - help us split & organize our code >> reusable & create inter-connection
// - allow us to create abstraction (hide the detail of code implementation)
