const restaurant1 = {
  name: "Capri",
  numGuest: 25,
};

const restaurant2 = {
  name: "La Pizza",
  owner: "Giovanni Rossi",
};

// OR assignment operator
restaurant1.numGuest = restaurant1.numGuest || 10;
restaurant2.numGuest = restaurant2.numGuest || 10;
// restaurant1.numGuest ||= 10; // short-hand

console.log(restaurant1);
console.log(restaurant2);

//-------------------------------------
console.log("---------- 1 ----------");
//-------------------------------------

// Because numGuest = 0 >> we can not the OR operator
const restaurant3 = {
  name: "D&D",
  numGuest: 0,
};

const restaurant4 = {
  name: "LLL",
  owner: "De Rossi",
};

// nullish assigment operator
restaurant3.numGuest ??= 10; // rest 3 won't be effected
restaurant4.numGuest ??= 10;

console.log(restaurant3);
console.log(restaurant4);

//-------------------------------------
console.log("---------- 2 ----------");
//-------------------------------------

restaurant3.owner &&= "<ANONYMOUS"; // won't be effected
restaurant4.owner &&= "<ANONYMOUS";
console.log(restaurant3);
console.log(restaurant4);
