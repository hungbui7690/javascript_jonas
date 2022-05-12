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
console.dir(f);

h();
f();

console.dir(f); // at this time, Closure just contains ONLY b = 10
