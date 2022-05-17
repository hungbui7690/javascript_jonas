const labelBalance = document.querySelector(".balance__value");

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

//----------------------------------------------
//----------------------------------------------

// REDUCE() >> condense array into one value
// reduce(cb, initialValue)
// initial value can be 0, '', {}, []
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// -------- Find Total of Movements --------
// function(accumulator, currentElement, currenIndex, entireArray)
// accumulator >> SNOWBALL
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i + 1}: ${acc}`);
  return acc + cur;
}, 0);

console.log(movements);
console.log(balance);

//--------------------------------------------
console.log(`----------- 1 ----------`);
//--------------------------------------------

// FOR-OF
let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}
console.log(balance2);

//---------------------------------------------
console.log(`----------- 2 ----------`);
//--------------------------------------------

// ARROW
const balanceArrow = movements.reduce((acc, mov) => acc + mov, 0);
console.log(balanceArrow);

//---------------------------------------------
console.log(`----------- 3 ----------`);
//--------------------------------------------

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};
calcDisplayBalance(account1.movements);

//---------------------------------------------
console.log(`----------- 4 ----------`);
//--------------------------------------------

// Check Maximum Value
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const max = movements.reduce((acc, mov, i) => {
  if (acc > mov) return acc;
  else return mov; // NOT acc = mov >> must have return keyword
}, movements[0]);

console.log(max);
