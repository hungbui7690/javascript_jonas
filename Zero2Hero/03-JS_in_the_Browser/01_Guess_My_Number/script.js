const btnCheck = document.querySelector('.check');
const lblMessage = document.querySelector('.message');
const lblScore = document.querySelector('.score');

// Math.random() >> return random # between 0 and 1
// Math.random() * 20 >> random # between 0 and 19.999999 >>> so to get 0 to 20, we need to add 1 >> Math.random() * 20 + 1
// Math.trunc() >> truncate: remove the decimal, keep the integer
const secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = secretNumber; // dev

let score = 20; //initial score: when player chooses the wrong number, score will be decreased!

// function is like a value, so we can pass it as an argument to another function
// we don't call the anonymouse function in the addEventListener(). we just define it here, so that when we click on the button (as soon as the event happens), the function will be called.

btnCheck.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess); // when we get data from input field, we will get back String >> so we have to convent it to Number

  if (!guess) lblMessage.textContent = 'No Number!⛔';
  else if (guess === secretNumber)
    lblMessage.textContent = 'Correct Number!🎉🎉';
  else if (score > 1) {
    if (guess < secretNumber) lblMessage.textContent = 'Too Low!📉';
    else lblMessage.textContent = 'Too High!📈';

    score--;
    lblScore.textContent = score;
  } else if (score === 1 && (guess < secretNumber || guess > secretNumber)) {
    lblMessage.textContent = 'You lost !!! 👎';
    score = 0;
    lblScore.textContent = score;
  } else {
    lblMessage.textContent = 'You lost !!! 👎';
  }
});
