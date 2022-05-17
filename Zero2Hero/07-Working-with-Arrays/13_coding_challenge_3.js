///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀

const calcAverageHumanAge = function (dogAges) {
  const humanAges = dogAges.map((dogAge) =>
    dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
  );
  console.log("humanAges", humanAges);
  const adults = humanAges.filter((humanAge) => humanAge >= 18);
  console.log("adults", adults);

  const average = adults.reduce((acc, age, i, arr) => {
    return acc + age / arr.length;
  }, 0); // method 1

  return average;
};

*/

const calcAverageHumanAge = function (dogAges) {
  const average = dogAges
    .map((dogAge) => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter((humanAge) => humanAge >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0); // method 1

  return average;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1);
console.log(avg2);
