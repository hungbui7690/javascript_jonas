
// function expression
const calcAge2 = function(birthYear){
    return 2022 - birthYear;
}


// arrow function >> has no "this" keyword
const calcAge3 = birthYear => 2022 - birthYear;

const age3 = calcAge3(1990);
console.log(age3);


//----------
console.log('-----');


const yearUntilRetirement = (birthYear, firstName) => {
    return `${firstName} retires in ${birthYear + 65}`;
}

console.log(yearUntilRetirement(1990, 'John'));
console.log(yearUntilRetirement(1987, 'Bob'));

