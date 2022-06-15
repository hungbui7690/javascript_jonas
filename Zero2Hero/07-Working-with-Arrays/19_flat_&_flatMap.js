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

//----------------------------------
//------------START HERE------------

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
const arr1 = [[1, [2, 3]], [4, 5, 6], 7, 8];

// release in 2019
console.log(arr.flat());
console.log(arr1.flat()); // just can go 1 level deep

console.log(arr1.flat(2)); // default parameter = 1 >>> go deeper with parameter higher than 1

//------------------------------------
console.log(`------- 1 -------`);
//------------------------------------

const accountMovements = accounts.map((acc) => acc.movements);
console.log("accountMovements = ", accountMovements);
const allMovements = accountMovements.flat();
console.log("allMovements = ", allMovements);

const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log("overallBalance = ", overallBalance);

//------------------------------------
console.log(`------- 2 -------`);
//------------------------------------

// Chaining
const overallBalance1 = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance1);

//------------------------------------
console.log(`------- 3 -------`);
//------------------------------------

// We can see that we use MAP(), then FLAT()  >>> FLATMAP()

const overallBalance2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log("FLATMAP()", overallBalance2);

// FLATMAP() can go ONLY 1 level deep >> if we want to go deeper, we need to use FLAT(parameter) instead of FLATMAP()
