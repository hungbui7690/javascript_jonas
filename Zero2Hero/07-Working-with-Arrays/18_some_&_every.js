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

const displayMovements = function (movements) {
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
displayMovements(account1.movements);

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

//----------------------------------------
//-------- START HERE --------------------

// SOME() >> return true if at least 1 element in the array matches the condition

// .includes() is used to test "EQUALITY" only
console.log(`includes() `, movements.includes(-130));

// What if we want to test if there are any deposit in the account? >> test "CONDITION"
const anyDeposits = movements.some((mov) => mov > 0);
console.log(`some() `, anyDeposits);

// We also can use .some() to test Equality as well
// but it doesn't make sense, since we can use .includes() in this case
console.log(
  `some() equality: `,
  movements.some((mov) => mov === -130)
);

//----------------------------------------
//----------------------------------------

// Now we will use some() to work on the functionality: Request Loan
// Just can request loan only if there is at least 1 deposit and = 10% of loan amount

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  // now, if the maximum deposit in the account is 3,000 >> user can request 30,000
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    // Add movement to array
    currentAccount.movements.push(amount);
    // update UI
    updateUI(currentAccount);
    // clear fields
    inputLoanAmount.value = "";
    inputLoanAmount.blur(); // remove focus
  }
});

//----------------------------------------
console.log(`-------EVERY()---------`);
//----------------------------------------

// EVERY() will return true only if all the elements match the condition
console.log(movements.every((mov) => mov > 0));

// const account4 = {
//   owner: "Sarah Smith",
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };
console.log(account4.movements.every((mov) => mov > 0));

//----------------------------------------
console.log(`-------Separated Callbacks---------`);
//----------------------------------------

// can reuse easily
const deposits = (mov) => mov > 0;
console.log(movements.some(deposits));
console.log(movements.every(deposits));
console.log(movements.filter(deposits));
