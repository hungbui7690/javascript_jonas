// parameters: placeholders to receive input values. Like local variables of a function

// arguments: actual values of function parameters, to input data.

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples & ${oranges} oranges.`;
  return juice;
}

const juice = fruitProcessor(5, 1);
console.log(juice);

console.log(fruitProcessor(5, 2));
