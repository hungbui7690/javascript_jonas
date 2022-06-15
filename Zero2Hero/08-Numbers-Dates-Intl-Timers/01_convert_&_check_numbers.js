/* 

============= START HERE ==============

*/

// Every numbers in JS are representing in decimal
console.log(23 === 23.0); // đây là lý do chỉ có 1 kiểu # trong JS

// Base 10: 0 - 9
// Base 2: 0 - 1
console.log(0.1 + 0.2); // rất khó để represent những số fraction kiểu này trong JS
console.log(0.1 + 0.2 === 0.3); // false >> không có cách để thay đổi điều này khi work với JS

/* 
----------------------------------------
*/
console.log('=========== 1 ===========');
/* 
==================== 1 =================
*/

// 2 cách để convert # trong JS
console.log(typeof Number('23'));
console.log(typeof +'23');

/* 
  Parsing: để thằng này work thì string phải bắt đầu bằng #
  .parseInt('str', radix or base)
*/
console.log(Number.parseInt('30px'));
console.log(Number.parseInt('e23')); // thằng này sẽ ko work

console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e23', 10));

console.log(Number.parseInt('  2.5rem  '));
console.log(Number.parseFloat('  2.5rem  '));

console.log(parseFloat('  2.5rem  ')); // đây là cách cũ, nhưng bây giờ người ta thường sử dụng namespace (Number) đằng trước cho rõ ràng

/* 
----------------------------------------
*/
console.log('=========== 2 ===========');
/* 
==================== 2 =================
*/

console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20X')); // true >> có thể bỏ thằng vào trong console (Chrome) để test

/* 
----------------------------------------
*/
console.log('=========== 3 ===========');
/* 
==================== 3 =================
*/

console.log(23 / 0);
console.log(Number.isNaN(23 / 0));

/* 
----------------------------------------
*/
console.log('=========== 4 ===========');
/* 
==================== 4 =================
*/

// đây là cách TỐT NHẤT để check xem 1 số có phải là NUMBER hay không
console.log(Number.isFinite(20));
console.log(Number.isFinite(20.3));
console.log(Number.isFinite(+'20'));

console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));

// nhưng thông thường người ta thường hay dùng Number.isInteger() để check Integer >> nhưng cách trên vẫn là cách tốt nhất

/* 
----------------------------------------
*/
console.log('=========== 5 ===========');
/* 
==================== 5 =================
*/
