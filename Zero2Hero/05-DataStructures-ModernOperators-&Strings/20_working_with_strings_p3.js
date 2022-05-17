//-----------------------------------------
console.log(`------------ 1 -----------`);
//-----------------------------------------

// SPLIT(): return array
// JOIN(): merge array into string

console.log("a+very+nice+string".split("+"));
console.log("Joe Doe".split(" "));

const [firstName, lastName] = "Joe Doe".split(" ");
console.log(firstName, lastName);

const newName = ["Mr.", firstName, lastName].join(" ");
console.log(newName);

//-----------------------------------------
console.log(`------------ 2 -----------`);
//-----------------------------------------

// Fix capitalization
const passenger = "jessica ann smith davis";

const capitalization = function (name) {
  const names = name.split(" ");
  const nameUpper = [];
  for (const x of names) {
    // nameUpper.push(x[0].toUpperCase() + x.slice(1)); // method 1

    nameUpper.push(x.replace(x[0], x[0].toUpperCase(0))); // method 2: replace()
  }
  console.log(nameUpper.join(" "));
};

capitalization(passenger);
capitalization("john bucacha");

//-----------------------------------------
console.log(`------------ 3 -----------`);
//-----------------------------------------

// Padding: add to string until string reaches the desire length
const msg = "Go to gate 23!";
console.log(msg.padStart(25, "+")); // insert more string at the beginning until reaching 25 chars
console.log("Joe".padStart(25, "-"));
console.log("Joe".padStart(25, "-").padEnd(35, "`"));
//-----------------------------------------

console.log(`------------ 4 -----------`);
//-----------------------------------------

// Padding applies to credit cards
const maskCreditCard = function (number) {
  const str = number + "";
  const lastFour = str.slice(-4);
  return lastFour.padStart(str.length, "*");
};
console.log(maskCreditCard(45345223234423));
console.log(maskCreditCard("234234234156876787687"));

//-----------------------------------------
console.log(`------------ 5 -----------`);
//-----------------------------------------

// Repeat >> we usually see it at the airport
const message = "Bad weather...All Departures Delayed...";
console.log(message.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"✈️".repeat(5)}`);
};
planesInLine(5);
