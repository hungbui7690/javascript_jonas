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

//--------------------------------------------------
//--------------------------------------------------

// compute username >> Sarah Smith = ss; Jessica Davis = jd
// instead of calling map() later, we use chaining because .split() return array

// -----------------------------------------------
// ---------------Test 1 -------------------------
// longer version
const user = "Steven Thomas Williams".toLowerCase().split(" ");
console.log(user);

const username1 = user
  .map((word, i) => {
    return word[0];
  })
  .join(""); // because .map() returns a brand new array, so we can use .join() to merge
console.log(username1);

//--------------------------------------------------
//-----------------Test 2 --------------------------
// shorter version >> chaining + arrow function
const username2 = "Steven Thomas Williams"
  .toLowerCase()
  .split(" ")
  .map((word, i) => word[0])
  .join("");

console.log(username2);

//==============================================
console.log("------------------------------");
//==============================================

const createUsernames = function (accounts) {
  accounts.forEach((acc, i) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((word, i) => word[0])
      .join(""); // create property username in each account
  });
};

createUsernames(accounts);
console.log(accounts);
