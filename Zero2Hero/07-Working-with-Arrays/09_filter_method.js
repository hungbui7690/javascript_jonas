const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// FILTER() >>  returns brand new array
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);
console.log(movements);

//------------------------------------
console.log("--------- 1 ---------");
//------------------------------------

// FOR-OF
const depositsFor = [];
for (const mov of movements) {
  depositsFor.push(mov > 0);
}
console.log(depositsFor);
console.log(movements);

//------------------------------------
console.log("--------- 2 ---------");
//------------------------------------

// ARROW
const withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals);
