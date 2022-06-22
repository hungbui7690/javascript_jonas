const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

/* 

************************************
========== START HERE ==============
************************************

*/
/* 
----------------------------------------
*/
console.log('=========== 0 ===========');
/* 
======================== 0 =================
*/

// có 4 cách để tạo date trong JS
const now = new Date();
console.log(now);

// cách 2: parseDate từ date string
console.log(new Date('Aug 02 2020 13:59:25'));
console.log(new Date('December 25 2020 '));

/* 
  "2019-11-18T21:31:17.178Z"
  Z là UTC: Coordinate Universal Time (London)

*/
console.log(new Date(account1.movementsDates[0]));

/* 
----------------------------------------
*/
console.log('=========== 1 ===========');
/* 
======================== 1 =================
*/

console.log(new Date(2037, 10, 19, 15, 23, 5)); // 10 nhưng sẽ ra tháng 11 >> zero base

console.log(new Date(2037, 10, 31)); // 31 Nov không tồn tại >> sẽ trả về 01 DEC

console.log(new Date(2037, 10, 33)); // tương tự cũng như nếu để ngày 33 >> 03 DEC

/* 
----------------------------------------
*/
console.log('=========== 2 ===========');
/* 
======================== 2 =================
*/

console.log(new Date(0)); // Initial UNIX Time
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // 3 ngày sau đó: 1 ngày 24h, 1 giờ 60p, 1p = 60s, 1s = 1000ms
console.log(3 * 24 * 60 * 60 * 1000); // timestamp

/* 
----------------------------------------
*/
console.log('=========== 3 ===========');
/* 
======================== 3 =================
*/

// Working with Date
const future = new Date(2037, 10, 19);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate()); // ngày trong tuần, chứ không phải ngày trong tháng
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getMilliseconds());

/* 
----------------------------------------
*/
console.log('=========== 4 ===========');
/* 
======================== 4 =================
*/

console.log(future.toISOString()); // convert thành string

/* 
----------------------------------------
*/
console.log('=========== 5 ===========');
/* 
======================== 5 =================
*/

console.log(future.getTime()); // return timestamp
console.log(new Date(2142176400000)); // convert thành date từ timestamp

console.log(Date.now());

/* 
----------------------------------------
*/
console.log('=========== 6 ===========');
/* 
======================== 6 =================
*/

future.setFullYear(2040);
console.log(future);
