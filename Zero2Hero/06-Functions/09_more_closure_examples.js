//-------------------------------------------
console.log("--------- 1 ----------");
//-------------------------------------------

// Example 1
let f;

const g = function () {
  const a = 4;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 10;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f); // closure: a = 4

h();
f();

console.dir(f); // at this time, Closure just contains ONLY b = 10

//-------------------------------------------
console.log("--------- 2 ----------");
//-------------------------------------------

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3; // if we comment this line >> perGroup = 1000 (line 47)

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each will ${perGroup} passengers`);
  }, 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000; // this is to prove closure has higher priority than global scope chain
boardPassengers(180, 3);
