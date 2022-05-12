const flight = "LH234";
const joe = {
  name: "Joe Doe",
  passport: 123456,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 123456) console.log("Checked in");
  else console.log("Wrong passport");
};

checkIn(flight, joe);
console.log(flight); // not changed >> primitives
console.log(joe); // changed >> ref type

// when we pass the flightNum to the function, we pass the copy of that variable
// but when we pass the passenger variable, we pass the ref to the function
// it similar to what we will do next
let flightNum = flight;
let passenger = joe;
flightNum = "LH999";
passenger.name = "xxx";
console.log(flight, joe);

// ------------------------------------------------
console.log("---------- 1 ----------");
// ------------------------------------------------

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(joe);
checkIn(flight, joe); // wrong passport >> because the newPassport() changed the passport #

// JS does not have "passing by ref", though it looks like we use passing by ref, but it is not >> we pass the ref but NOT pass by ref
