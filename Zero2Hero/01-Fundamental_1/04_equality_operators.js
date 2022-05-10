// strict equality vs loose equality
const age = "18";

if (age === 18) console.log(`You just became an adult :D (strict)`);

//----------------------
console.log("--------");

const age1 = "18";
if (age1 == 18) console.log(`You just became an adult :D (loose)`);

// when using loose equality (==), coercion will be used to convert string to #
// that's why we try to avoid using loose equality (==) in our code >> general rule of clean code

//----------------------
console.log("--------");

// const favNubmer = Number(prompt(`What's your fav # ????`));
// console.log(favNubmer);
// console.log(typeof favNubmer); // string
