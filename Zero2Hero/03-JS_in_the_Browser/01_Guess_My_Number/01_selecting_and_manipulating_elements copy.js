// DOM: Document Object Model >> connection point between HTML and JS
// DOM Methods & Properties are not part of JS. They are WEB APIs that are provided by the BROWSERS.

// label >> textContent
console.log(document.querySelector('.message').textContent);

// input >> value
console.log(document.querySelector('.guess').value);

// setter (textContent & value)
document.querySelector('.message').textContent = 'Correct Number! 🎉';
document.querySelector('.guess').value = 23;

const msg = document.querySelector('.message');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const lblHighscore = document.querySelector('.label-highscore');
const guess = document.querySelector('.guess');
const btnCheck = document.querySelector('.check');
