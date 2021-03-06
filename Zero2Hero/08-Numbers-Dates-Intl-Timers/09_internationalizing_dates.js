'use strict';

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2021-11-18T21:31:17.178Z',
    '2022-06-21T07:42:02.383Z',
    '2022-06-22T09:15:04.904Z',
    '2022-04-01T10:17:24.185Z',
    '2022-05-08T14:11:59.604Z',
    '2022-05-27T17:01:17.194Z',
    '2022-06-15T23:36:17.929Z',
    '2021-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Functions

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);

    const daysPassed = calcDayPassed(new Date(), date);
    console.log(daysPassed);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${
          daysPassed <= 7
            ? formatDateDiff(daysPassed)
            : displayDate(date, false)
        }</div>
        <div class="movements__value">${mov.toFixed(2)}???</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}???`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}???`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out.toFixed(2))}???`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}???`;
};

// FAKE LOGIN
let currentAccount;
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

/* 
----------------------------------------
*/

// DRY >> t???o function
function displayDate(date, time = true) {
  const day = date.getDate().toString().padStart(2, 0); // n???u ng??y < 10 th?? s??? th??m s??? 0 ?????ng tr?????c
  const month = (date.getMonth() + 1).toString().padStart(2, 0);
  const year = date.getFullYear();
  const hour = date.getHours().toString().padStart(2, 0);
  const min = date.getMinutes().toString().padStart(2, 0);

  if (time) return `${day}/${month}/${year}, ${hour}:${min}`;
  else return `${day}/${month}/${year}`;
}

function calcDayPassed(date1, date2) {
  return Math.round(Math.abs(date2 - date1) / 1000 / 60 / 60 / 24);
}

const days1 = calcDayPassed(
  new Date(2037, 11, 20),
  new Date('2019-11-18T21:31:17.178Z')
);

const days2 = calcDayPassed(new Date(), new Date(2037, 1, 18));
console.log(days1, days2);

/* 
  sau khi t??nh ra date diff >>> ch??ng ta mu???n hi???n th??? ra "Yesterday, Today, 7 days ago..."
  
*/

function formatDateDiff(numOfDays) {
  if (numOfDays === 0) return 'Today';
  else if (numOfDays === 1) return 'Yesterday';
  else if (numOfDays <= 7) return `${numOfDays} days ago`;
}

/* 

************************************
========== START HERE ==============
************************************

  ????y l?? m???t API m???i gi??p ch??ng ta format date v?? time, money t??y theo t???ng zone 

*/
/* 
----------------------------------------
*/
console.log('=========== 0 ===========');
/* 
======================== 0 =================
*/

// * DateTimeFormat('locale') = t???o ra formatter
// * locale: 'language-COUNTRY'
// * en-US, en-GB, ar-SY >> lookup ISO language Code Table (lingoes.net)
const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric', // '2-digit': 2022 = 22
  weekday: 'long',
};

// l???y ra locale t??? client's browser
const locale = navigator.language;
console.log(locale);

labelDate.textContent = new Intl.DateTimeFormat('en-US', options).format(now);
/* 
----------------------------------------
*/
console.log('=========== 1 ===========');
/* 
======================== 1 =================
*/

// * trong m???i account ?????u c?? property local >> ch??ng ta s??? hi???n th??? theo locale ngay sau khi user login
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long',
      year: 'numeric', // '2-digit': 2022 = 22
      weekday: 'long',
    };

    // l???y ra locale t??? client's browser
    const locale = currentAccount.locale;

    labelDate.textContent = new Intl.DateTimeFormat('en-US', options).format(
      now
    );

    // Update UI
    updateUI(currentAccount);
  }
});

// * ngo??i ra ch??ng ta c??ng c?? th??? displayMovements Date d???a theo locale (t??? l??m)
// * check th??m v??? Intl tr??n Mozilla
