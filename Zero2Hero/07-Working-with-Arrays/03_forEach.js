const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]; //positive: deposit >< negative: withdraw

//-------------------------------------------
console.log(`---------- for-of ----------`);
//-------------------------------------------

// for-of
for (const movement of movements) {
  if (movement > 0) console.log(`You deposit ${movement}`);
  else console.log(`You withdraw ${movement}`);
}

//-------------------------------------------
console.log(`---------- forEach() ----------`);
//-------------------------------------------

// forEach() >> higher order function
// 0: function(200)
// 1: function(450)
// 2: function(-400)
// ....
movements.forEach(function (movement) {
  if (movement > 0) console.log(`You deposit ${movement}`);
  else console.log(`You withdraw ${movement}`);
});

//-------------------------------------------
console.log(`-------- for-of: index -------`);
//-------------------------------------------

// movements.entries() >> return array of array >> [index, element]
for (const [i, movement] of movements.entries()) {
  if (movement > 0) console.log(`${i + 1}: You deposit ${movement}`);
  else console.log(`${i + 1}: You withdraw ${movement}`);
}

//-------------------------------------------
console.log(`------- forEach(): index ------`);
//-------------------------------------------
movements.forEach(function (movement, index, array) {
  if (movement > 0) console.log(`${index + 1}: You deposit ${movement}`);
  else console.log(`${index + 1}: You withdraw ${movement}`);
});

// the names of the parameters don't matter >> but the order of the parameters is matter: element, index, entire array

// When will we use for-of, and when use forEach()??
// >>> forEach(): we can NOT use BREAK & CONTINUE
