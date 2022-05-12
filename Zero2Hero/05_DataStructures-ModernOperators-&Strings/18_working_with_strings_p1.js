const airline = "TAP Air Portugal";
const plane = "A320";

//-----------------------------------------
console.log(`------------ 1 -----------`);
//-----------------------------------------

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B321"[0]);

//-----------------------------------------
console.log(`------------ 2 -----------`);
//-----------------------------------------

console.log(airline.length);
console.log("B321".length);

//-----------------------------------------
console.log(`------------ 3 -----------`);
//-----------------------------------------

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("potugal")); // -1 >> not found because of "case sensitive"

//-----------------------------------------
console.log(`------------ 4 -----------`);
//-----------------------------------------

// TAP Air Portugal

console.log(airline.slice(4)); // from index 4 to end of string >> the result is always the new string >> we did not modify the original string >> because string is unmutable (primitives)
console.log(airline.slice(4, 7)); // from 4 to 6

console.log(airline.slice(0, airline.indexOf(" "))); // in case we don't know the index
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2)); // get last 2 characters
console.log(airline.slice(1, -1));

//-----------------------------------------
console.log(`------------ 5 -----------`);
//-----------------------------------------

// B & E are middle seats
const checkMidSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("Middle Seat 👎");
  else console.log("You are lucky (not middle seat)! 🎉");
};
checkMidSeat("11B");
checkMidSeat("23C");
checkMidSeat("3E");

//-----------------------------------------
console.log(`------------ 6 -----------`);
//-----------------------------------------

// Behind the Scene
// JS uses boxing to box the string into String Object so that it will have all the properties and methods that we can use with string
console.log(new String("Joe")); // boxing >> we can check in the log and see all the properties and methods that string can have
console.log(typeof new String("Joe"));
// and when we are done with the properties & methods, JS will convert it back to normal string (primitives)
console.log(typeof new String("Joe").slice(1));
