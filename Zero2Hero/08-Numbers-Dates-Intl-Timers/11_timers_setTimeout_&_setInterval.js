/* 

************************************
========== START HERE ==============
************************************

* setInterval() => run forever until we stop it
* setTimeout(callback, time) => run just once after defined time
*/

setTimeout(() => {
  console.log(`Here is your apples! 🍎🍏`);
}, 1000);

// * =========== setTimout(): parameters ===========
// * nếu muốn pass args vào cb function thì thêm vào ngay sau parameter time

const ingredients1 = ['spinach', 'mushroom'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => {
    console.log(`Here is your pizza with ${ing1} & ${ing2} 🍕`);
  },
  2000,
  ...ingredients1
);

// * =========== clearTimeout(): hamburger ===========

const ingredients2 = ['tomatoes', 'beef'];
const hamburgerTimer = setTimeout(
  (ing1, ing2) => {
    console.log(`Here is your hamburgur 🍔 with ${ing1} & ${ing2} 🍕`);
  },
  3000,
  ...ingredients2
);

if (ingredients2.includes('tomatoes')) clearTimeout(hamburgerTimer);

// * ===== setInterval(): current time countdown =====

let x = 2;
const timeInterval1 = setInterval(() => {
  const now = new Date();
  console.log(now);
}, 1000);

// * ===== clearInterval() =====

let y = 2;
const timeInterval2 = setInterval(() => {
  if (y === 0) clearInterval(timeInterval2);

  const now = new Date();
  console.log(now);
  y--;
  console.log(y);
}, 1000);
