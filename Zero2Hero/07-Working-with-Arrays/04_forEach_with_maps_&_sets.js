//-----------------------------------------
console.log(`--------- MAPS ---------`);
//-----------------------------------------

// MAP
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

// function(value, key, entireMap)
currencies.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});

//-----------------------------------------
console.log(`--------- SETS ---------`);
//-----------------------------------------

// SET
const currenciesUnique = new Set(["USD", "VND", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);

// with Sets, value === key in forEach()
currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});

console.log(`-----`);

// _ : throw away variable
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value} : ${value}`);
});
