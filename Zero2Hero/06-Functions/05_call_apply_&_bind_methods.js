const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}-${flightNum}`
    );
    this.bookings.push({
      flight: `${this.airline} flight ${this.iataCode}-${flightNum}`,
      name, // name : name
    });
  },
};

lufthansa.book(239, "Joe Doe");
lufthansa.book(211, "John Smith");
console.log(lufthansa.bookings);

//----------------------------------------
console.log("--------- 1 ---------");
//----------------------------------------

// APPLY()

// After some year, the Lufthansa create a new group of airline
const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book; // book() is now a value >> first-class
// book(23, "Sarah"); // undefined because this is a regular function call
// so how do we tell JS which object call that function >> call(), apply(), and bind(): to set the "this" keyword

// .call(object, parameters)
book.call(lufthansa, 239, "Mary Copper"); //functions are objects >> functions have methods

book.call(eurowings, 120, "Dick Jaspers");
console.log(lufthansa);
console.log(eurowings);

//----------------------------------------
console.log("--------- 2 ---------");
//----------------------------------------

const swiss = {
  airline: "Swiss",
  iataCode: "SW",
  bookings: [],
};

book.call(swiss, 999, "Mary Copper");
console.log(swiss);

//----------------------------------------
console.log("--------- 2 ---------");
//----------------------------------------

// APLLY()
// the difference between call() and apply() is call(object, parameters) >> apply(object, [parameters]) >> apply() receives array as parameters

const flightData = [583, "George Doss"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
console.log(swiss);

//----------------------------------------
console.log("--------- 3 ---------");
//----------------------------------------

// BIND()
// the difference is BIND() does not call the function, but return the new function with the "this" keyword was bound
// thằng này rất tiện khi dùng với các function mà chúng ta cần sử dụng lại nhiều lần

const bookEW = book.bind(eurowings); // this will not call the book function
const bookLH = book.bind(lufthansa);
const bookSW = book.bind(swiss);

bookEW(123, "Stephen Chau");
console.log(eurowings);

//----------------------------------------
console.log("--------- 3 ---------");
//----------------------------------------

// pre-defined parameter with BIND()

const bookEW23 = book.bind(eurowings, 23); // flightNum is always 23 now
bookEW23("James Bond");
bookEW23("Tony Harden");
console.log(eurowings);

//----------------------------------------
console.log("--------- 3 ---------");
//----------------------------------------

// Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
};

lufthansa.buyPlane(); // this = lufthansa

// document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane); // "this" = .buy button >> we have to use bind() to fix

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

//----------------------------------------
console.log("--------- 3 ---------");
//----------------------------------------

// Partial Application: application that we can preset parameter (i.e: tax rate)
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 100));
console.log(addTax(0.1, 200));

// VAT: always the same >> preset >> use BIND()
const addVAT = addTax.bind(null, 0.23); // always 23%
console.log(addVAT(100));
console.log(addVAT(200));

//----------------------------------------
console.log("--------- 3 ---------");
//----------------------------------------

// Challenge: From the tax example above, use functions return functions to re-write
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(200));
