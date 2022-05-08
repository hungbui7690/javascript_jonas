const btnCheck = document.querySelector('.check');

// function is like a value, so we can pass it as an argument to another function
// we don't call the anonymouse function in the addEventListener(). we just define it here, so that when we click on the button (as soon as the event happens), the function will be called.

btnCheck.addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  console.log(guess, typeof guess); // when we get data from input field, we will get back String >> so we have to convent it to Number

  if (!guess)
    document.querySelector('.message').textContent = 'Correct Number!! 🎉';
});
