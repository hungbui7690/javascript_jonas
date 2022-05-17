const airline = "TAP Air Portugal";

//-----------------------------------------
console.log(`------------ 1 -----------`);
//-----------------------------------------
console.log(airline.toUpperCase());
console.log(airline.toLowerCase());

//-----------------------------------------
console.log(`------------ 2 -----------`);
//-----------------------------------------

// Fix capitalization
const passenger = "ArMstrONg"; // Armstrong
console.log(passenger[0].toUpperCase() + passenger.toLowerCase().slice(1));

//-----------------------------------------
console.log(`------------ 3 -----------`);
//-----------------------------------------

// Comparing Email
const email = "hello@jonas.io";
const loginEmail = "   Hello@Jonas.IO \n";

// old method
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

// new method >> chaining
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

//-----------------------------------------
console.log(`------------ 4 -----------`);
//-----------------------------------------

// replace
const priceGB = "288,97#";
const priceUS = priceGB.replace("#", "$").replace(",", "."); // chaining
console.log(priceUS);

const annoucement = `All passenger come to boarding door 23. Boarding door 23!`;
console.log(annoucement);

console.log(annoucement.replace("door", "gate")); // only replace the 1st occurance

// old method: regex
console.log(annoucement.replace(/door/g, "gate"));

// new method
console.log(annoucement.replaceAll("door", "gate")); // replace all

//-----------------------------------------
console.log(`------------ 5 -----------`);
//-----------------------------------------

// boolean
const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));

console.log(plane.startsWith("Air"));
console.log(plane.startsWith("A320"));

if (plane.startsWith("Air") && plane.endsWith("neo"))
  console.log(`Part of New Airbus family!`);

//-----------------------------------------
console.log(`------------ 5 -----------`);
//-----------------------------------------

// Practice Exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase(); // remember to convert to lower case first
  if (baggage.includes("knife") || baggage.includes("gun"))
    console.log(`NOT allow`);
  else console.log(`Welcome! 😊`);
};

checkBaggage("I have a laptop, some food, and a pocket knife");
checkBaggage("Socks & Camera");
checkBaggage("Snacks & a Gun for protection");
