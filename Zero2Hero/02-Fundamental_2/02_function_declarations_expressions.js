// function declaration
function calcAge1(birthYear) {
  return 2022 - birthYear;
}

console.log(calcAge1(1990));

const age1 = calcAge1(1990);
console.log(age1);

//-------------------------------------
console.log("-----------");
//-------------------------------------

// function expression
// anonymous function (no name)
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};
const age2 = calcAge2(1990);
console.log(age2);

// difference: we can't call function express before declare it >> bacause of hoisting
