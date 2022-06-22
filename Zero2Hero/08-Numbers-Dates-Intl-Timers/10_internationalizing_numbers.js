/* 

************************************
========== START HERE ==============
************************************

* Intl for Number & Currency

*/
/* 
----------------------------------------
*/
console.log('=========== 0 ===========');
/* 
======================== 0 =================
*/

const num = 3_884_764.24;
const options = {
  style: 'currency', // percent, currency, unit
  unit: 'celsius', // celsius, mile-per-hour
  currency: 'EUR',
  useGrouping: true, // false = no separator, default = true
};

console.log('US: ', new Intl.NumberFormat('en-US', options).format(num));
console.log('GER: ', new Intl.NumberFormat('de-DE', options).format(num));
console.log('SYRIA: ', new Intl.NumberFormat('ar-SY', options).format(num));
console.log(
  'BROWSER: ',
  new Intl.NumberFormat(navigator.language, options).format(num)
);

// ! apply vào trong app (tự làm)
// ! function formatCur = (value, local, currency)
