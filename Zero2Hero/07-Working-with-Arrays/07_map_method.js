// unlike forEach(), the map() method will always return a brand new array

// suppose those movements are in EUR
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// we want to convert to USD

const eurToUSD = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * eurToUSD;
  // return 23;
});

console.log(movements, movementsUSD);

// --------------------------------------
console.log(`---------- 1 ----------`);
// --------------------------------------

// for-of
const movementsUSDFor = [];
for (const mov of movements) {
  movementsUSDFor.push(mov * eurToUSD);
}
console.log(movementsUSDFor);

// --------------------------------------
console.log(`---------- 2 ----------`);
// --------------------------------------

// arrow function
const movementsUSDArrow = movements.map((mov) => mov * eurToUSD);
// return 23;
console.log(movementsUSDArrow);

// --------------------------------------
console.log(`---------- 3 ----------`);
// --------------------------------------

// access to index
const movementsDescriptions = movements.map((mov, i, arr) => {
  if (mov > 0) return `${i + 1}: You deposit ${mov}`;
  else return `${i + 1}: You withdraw ${mov}`;
});

console.log(movementsDescriptions);

// better version: omit "return" keyword
const movDesc = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
      mov
    )}`
);
console.log(movDesc);
