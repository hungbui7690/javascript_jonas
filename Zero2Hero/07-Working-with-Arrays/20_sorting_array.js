const labelWelcome = document.querySelector(".welcome");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");

const btnLogin = document.querySelector(".login__btn");
const btnLoan = document.querySelector(".form__btn--loan");
const btnSort = document.querySelector(".btn--sort");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//------------------------------------
//------------------------------------

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

// add 2nd parameters
const displayMovements = function (movements, sort = false) {
  // sort here
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movements.forEach(function (mov, i) {
    const type = mov < 0 ? "withdrawal" : "deposit";

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
// displayMovements(account1.movements);

const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes}€`;

  const outcomes = account.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + Math.abs(mov), 0);

  labelSumOut.textContent = `${outcomes}€`;

  const interest = account.movements
    .filter((mov) => mov > 0)
    .map((deposit) => deposit * account.interestRate)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

calcDisplaySummary(account1);

const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${account.balance}€`;
};

const updateUI = function (acc) {
  // Display Balance
  calcDisplayBalance(acc);
  // Display Summary
  calcDisplaySummary(acc);
  // Display Movements
  displayMovements(acc.movements);
};

// Login
let currentAccount;
btnLogin.addEventListener("click", function (e) {
  e.preventDefault(); // prevent page from refreshing when button is clicked

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI & Welcome Msg
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    // // Set Opacity
    containerApp.style.opacity = 1;

    updateUI(currentAccount);

    // clear fields
    inputLoginPin.value = inputLoginUsername.value = "";
    inputLoginPin.blur(); // remove focus
  }
});

//--------------------------------------
//---------------START HERE-------------

// Sort Strings
const owners = ["A", "D", "C", "B"];
console.log(owners.sort());

console.log(owners); // >>>>> mutate the original array

//--------------------------------------
console.log(`-----------1----------`);
//--------------------------------------

// Sort Numbers
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.sort()); // does not show the correct result >> the problem is the sort() is sorting based on string >> negative first, then positive >>> we need to use callback function

// a, b: current & next values
// if return < 0 >> a before b
// if return > 0 >> b before a
movements.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
});
console.log(movements);

// short hand
movements.sort((a, b) => {
  return b - a;
});
console.log(movements);

//--------------------------------------
console.log(`-----------2----------`);
//--------------------------------------

// 1) Go back to displayMovements() & add 2nd parameter
// 2) working on the button
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, true);
});
