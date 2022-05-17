///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.






GOOD LUCK 😀
*/

//---------------------------------------
console.log(`----------- 1 -----------`);
//---------------------------------------

// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4. >>> map()
// 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old) >>> filter()
// 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉) >>> reduce()

const calcAverageHumanAge = function (dogAges) {
  const humanAges = dogAges.map((dogAge) =>
    dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
  );
  console.log("humanAges", humanAges);
  const adults = humanAges.filter((humanAge) => humanAge >= 18);
  console.log("adults", adults);

  // average: method 1
  // const average =
  //   adults.reduce((acc, humanAge) => {
  //     return acc + humanAge;
  //   }, 0) / adults.length;

  // average: method 2 >> (2 + 3) / 2 = 2/2 + 3/2 = 1 + 1.5 = 2.5
  const average = adults.reduce((acc, age, i, arr) => {
    return acc + age / arr.length;
  }, 0); // method 1

  return average; // remember to have this line or it will return undefined
};

// 4. Run the function for both test datasets
// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1);
console.log(avg2);
