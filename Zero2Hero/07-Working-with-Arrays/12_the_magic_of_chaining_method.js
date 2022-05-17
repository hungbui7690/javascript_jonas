const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const labelBalance = document.querySelector(".balance__value");

const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

// --------------------------------
// 05_create_DOM_elements
// --------------------------------
const displayMovements = function (movements) {
  movements.forEach(function (mov, i) {
    const type = mov < 0 ? "withdrawal" : "deposit";

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>s
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};
calcDisplayBalance(account1.movements);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUSD = 1.1;

//---------------------------------
//-------------START HERE ---------

/*
  1) Get all deposits
  2) Convert to USD 
  3) Total
*/

// PIPELINE: shorter, but HARD to DEBUG
const totalDepositUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUSD)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositUSD);

// ------------------------------------
console.log(`---------- 1 ----------`);
// ------------------------------------

// if the condition in filter is wrong >> return negative #
// check array parameter in .map() >> check the next chain
const totalDepositUSDTest = movements
  .filter((mov) => mov < 0)
  .map((mov, i, arr) => {
    console.log(arr); // HERE
    return mov * eurToUSD;
  })
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositUSDTest);

// ------------------------------------
console.log(`---------- 2 ----------`);
// ------------------------------------
const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes}€`;

  const outcomes = movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + Math.abs(mov), 0);

  labelSumOut.textContent = `${outcomes}€`;

  // if interest = 1.2%
  // const interest = movements
  //   .filter((mov) => mov > 0)
  //   .map((deposit) => deposit * 0.12)
  //   .reduce((acc, int) => acc + int, 0);

  // bank changes the rule >> just keep the interests which are greater than 1$
  // if interest = 1.2% & interest >= 1$
  const interest = movements
    .filter((mov) => mov > 0)
    .map((deposit) => deposit * 0.012)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}€`;
};

calcDisplaySummary(account1.movements);
