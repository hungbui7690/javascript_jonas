const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey"); // greeterHey now is a function
greeterHey("Jonas"); // we can pass the argument to the function definition above because of the 'Closure'
greeterHey("Steven");

greet("Hello")("Joe");

// Challenge
const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArrow("Hi")("Jason");
