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

/* 


------------------------------------------------
---------------- START HERE -------------------- 


*/

// 1. Lấy tổng deposit trong tất cả các tài khoản
const bankDepositSum = accounts
  .map((acc) => acc.movements)
  .flat()
  .filter((mov) => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum);

//--------------------------------------
console.log(`-----------1----------`);
//--------------------------------------

// 2. Có bao nhiêu account đã deposit ít nhất 1000
const numDeposit1000 = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov >= 1000).length;
console.log(numDeposit1000);

//--------------------------------------
console.log(`-----------2----------`);
//--------------------------------------

// 2. cách 2: sử dụng reduce()
// không thể sử dụng count++ mà phải sử dụng count + 1
const numDeposit1k = accounts
  .flatMap((acc) => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
console.log(numDeposit1k);

//--------------------------------------
console.log(`-----------3----------`);
//--------------------------------------

let a = 10;
console.log(a++); // lúc này vẫn là 10
console.log(a); // lúc này mới là 11 >> đó là lý do vì sao không sử dụng ++ đc trong trường hợp ở trên

console.log(++a); // có thể sử dụng các này
console.log(a);

//--------------------------------------
console.log(`-----------4----------`);
//--------------------------------------
// 3.dùm reduce() để tính ra tổng deposit cũng như withdraws >>> trả về object
const { deposits, withdrawals } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      // method 1
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);

      // method 2
      sums[cur > 0 ? "deposits" : "withdrawals"] += cur;

      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals);

//--------------------------------------
console.log(`-----------5----------`);
//--------------------------------------
// 4. convert any string to title case:
// this is a nice title => This Is a Nice Title
const convertTitleCase = function (title) {
  // danh sách các từ không bị title case
  const exceptions = ["a", "an", "the", "but", "or", "on", "in", "with", "and"];

  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

  /* 
    1. lấy từ từ trong câu ra sử dụng lệnh split()
    2. check với danh sách trên, nếu không nằm trong danh sách trên thì capitalize nó 
    3. nối lại bằng lệnh join()
  */
  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) => (exceptions.includes(word) ? word : capitalize(word)))
    .join(" ");

  // sở dĩ phải gọi capitalize() khi return là vì 1 số thằng có từ đầu tiên nằm trong exceptions[] nên sẽ không bị capitalize (i.e: and)
  return capitalize(titleCase);
};

console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a Long Title"));
console.log(convertTitleCase("and here is another title with an EXAMPLE"));
