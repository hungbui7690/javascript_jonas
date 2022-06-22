/* 

************************************
========== START HERE ==============
************************************

với các số bình thường: sử dụng 64 bits >> chỉ có 53 bits dùng để chứa số, phần còn lại đc dùng để chứa vị trí của decimal point, cũng như sign >> và bởi vì chỉ có 53 bits dùng để chứa số, nên sẽ có limit 

*/

/* 
----------------------------------------
*/
console.log('=========== 0 ===========');
/* 
======================== 0 =================
*/

console.log(2 ** 53 - 1); // số lớn nhất mà 64 bits JS có thể thể hiện 1 cách an toàn, nếu lớn hơn cũng có thể represent, nhưng đôi khi không an toàn (đôi khi ra sai)
console.log(Number.MAX_SAFE_INTEGER);

/* 
----------------------------------------
*/
console.log('=========== 1 ===========');
/* 
======================== 1 =================
*/

console.log(2 ** 53 + 0);
console.log(2 ** 53 + 1); // 1 thằng là +0, 1 thằng là +1, nhưng 2 thằng đều ra kết quả giống nhau >>> đây là không an toàn

/* 
----------------------------------------
*/
console.log('=========== 2 ===========');
/* 
======================== 2 =================
*/

// ES2020: new primitive đã đc thêm vào >> BIG INT
console.log(4848484848423434234234234324243243); // số thường
console.log(4848484848423434234234234324243243n); // thêm n đằng sau >> sẽ biến thành BIG INT

console.log(BigInt(4848484848423434234234234324243243)); // cách này ra khác cách trên, mặc dù cũng convert sang BIGINT, nhưng bởi vì phải represent số đó ra số bình thường trước rồi mới convert, nên dễ bị sai >> ưu tiên cách trên

// cách dưới nên dùng với các số nhỏ
console.log(BigInt(483434));

/* 
----------------------------------------
*/
console.log('=========== 3 ===========');
/* 
======================== 3 =================
*/

// Operations
console.log(10000n + 10000n);
console.log(234567890123456788901234567890n * 10000n); // số lớn vẫn OK

const huge = 234234234234324324423423423432n;
const num = 23;
//console.log(huge * num); // error since we cannot mix Big Int & regular #
console.log(huge * BigInt(num));

/* 
----------------------------------------
*/
console.log('=========== 4 ===========');
/* 
======================== 4 =================
*/

console.log(20n > 15);
console.log(20n === 20); // ra sai vì type của 2 thằng khác nhau

console.log(typeof 20n, typeof 20);

console.log(20n == 20); // true >> loose equality

/* 
----------------------------------------
*/
console.log('=========== 5 ===========');
/* 
======================== 5 =================
*/

console.log(huge + ' is BIG !!!'); // tự động convert sang string

// không thể sử dụng một số MATH operators như number
// console.log(Math.sqrt(huge); // báo lỗi

console.log(10n / 3n); // phần decimal sẽ bị cắt bỏ
console.log(10 / 3);
