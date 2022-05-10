const btnCheck = document.querySelector('.check');
const lblMessage = document.querySelector('.message');
const lblScore = document.querySelector('.score');
const lblHighscore = document.querySelector('.highscore');
const btnAgain = document.querySelector('.again');

let highscore = 0;

// Math.random() >> return random # between 0 and 1
// Math.random() * 20 >> random # between 0 and 19.999999 >>> so to get 0 to 20, we need to add 1 >> Math.random() * 20 + 1
// Math.trunc() >> truncate: remove the decimal, keep the integer
let secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = secretNumber; // dev

let score = 20; //initial score: when player chooses the wrong number, score will be decreased!

// function is like a value, so we can pass it as an argument to another function. we don't call the anonymouse function in the addEventListener(). we just define it here, so that when we click on the button (as soon as the event happens), the function will be called.
btnCheck.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess); // when we get data from input field, we will get back String >> so we have to convent it to Number

  // no input
  if (!guess) lblMessage.textContent = 'No Number!⛔';
  // player wins
  else if (guess === secretNumber) {
    lblMessage.textContent = 'Correct Number!🎉🎉';

    // css manipulation
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // set highscore
    if (score > highscore) {
      highscore = score;
      lblHighscore.textContent = highscore;
    }

    // wrong number
  } else if (score > 1) {
    // number is too low
    if (guess < secretNumber) lblMessage.textContent = 'Too Low!📉';
    // number is too high
    else lblMessage.textContent = 'Too High!📈';

    score--;
    lblScore.textContent = score;

    // player lost
  } else if (score === 1 && (guess < secretNumber || guess > secretNumber)) {
    lblMessage.textContent = 'You lost !!! 👎';
    score = 0;
    lblScore.textContent = score;
  } else {
    lblMessage.textContent = 'You lost !!! 👎';
  }
});

// reset game
btnAgain.addEventListener('click', function () {
  lblMessage.textContent = 'Start guessing...';
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
