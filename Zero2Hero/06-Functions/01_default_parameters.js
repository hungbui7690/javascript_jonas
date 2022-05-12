"use strict";

// default parameters can container expression (i.e: 199 * 2)

const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1; // old way >> pre ES6
  // price = price || 199; // old way >> pre ES6

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 5);
createBooking("LH123", 2, 350);

// we cannot skip the numPassengers
// >> createBooking('LH123', 1000) >> the numPassengers = 1000, not the price
// But there is a nice trick to pass this >> undefined
createBooking("XS318", undefined, 500);
