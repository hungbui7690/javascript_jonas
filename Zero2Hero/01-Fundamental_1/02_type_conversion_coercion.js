// data type that we get from the "input" in html will be converted to string no matter we put string or number in there >> type coercion


// type conversion
const inputYear = '1990';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 32); // 199032
console.log(Number(inputYear) + 32); // 2022

console.log(Number('inputYear')); // NaN

console.log(typeof NaN); // number

console.log(String(23), 23);


// type coercion
console.log('I\'m ' + 23 + ' years old'); // 23 will be automatically converted to string >> type coercion

console.log('23' - '10' - 3); // type coercion
console.log('10' * 3); // type coercion

console.log('23' + '10' + 3); // won't be converted >> + does not work


let n = '1' + 1; // 11
n = n - 1; // 10
console.log(n); // 10


console.log(2 + 3 + 4 + '5'); // 95 >>> 2+3+4 = 9 + '5' = 95







