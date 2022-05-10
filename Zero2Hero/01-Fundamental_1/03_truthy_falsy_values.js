// there are 5 falsy values: 0, '', undefined, null, NaN >> these 5 will be converted to 0 or false automatically
// everything else are truthy values

// in the real world, we will never do this, everything will be converted automatically by coercion
console.log(Boolean(0)); // false
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(""));

//-----------------------------------

console.log("------1------");

console.log(Boolean("Abc"));
console.log(Boolean({})); // true

// ----------------------------------
console.log("------2------");

const money = 0;
if (money) console.log(`Don't spend it all`);
else console.log(`You should get a job`);

// ----------------------------------
console.log("------3------");

let height;
if (height) console.log(`YAY!!! Height is defined!`);
else console.log("Height is UNDEFINED !!!!!!");
