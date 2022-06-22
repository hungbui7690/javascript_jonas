///////////////////////////////////////////////
// ============ SELECT ELEMENTS ===============
///////////////////////////////////////////////

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
const header = document.querySelector('.header');

/* 
=================== 1 ==================
*/
console.log('====== 1 ======');

// * return nodelist với querySelectorAll()
// * lưu ý: chúng ta có thể sử dụng querySelector() cũng như querySelectorAll() không chỉ với document, mà còn có thể sử dụng trực tiếp lên element. Và chúng ta sử dụng cách này để lấy ra child elements

const allSections = document.querySelectorAll('section');
console.log(allSections);

document.getElementById('#section--1');

/* 
=================== 2 ==================
*/
console.log('====== 2 ======');

/* 
 * thằng getElementsByTagName() sẽ không trả về nodelist giống như querySelectorAll(), mà sẽ trả về HTMLCollection >> và thằng này khác với nodelist ở chỗ nó support "LIVE CHANGES": tức là nếu trên html có gì thay đổi thì thằng HTMLCollection này sẽ đc update ngay lập tức

* giả sử vào Inspector và delete bất kỳ 1 nút nào đó, sau đó select lại allButtons trong console, chúng ta sẽ thấy mất đi 1 element trong HTML Collection

* nhưng trong trường hợp nodeList, giả sử chúng ta xóa đi 1 section trong inspector thì khi chạy allSections sẽ vẫn thấy còn nguyên như ban đầu
*/

const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
/* 
=================== 3 ==================
*/
console.log('====== 3 ======');

// * cũng trả về HTML Collection
console.log(document.getElementsByClassName('btn'));

// ! thông thường thì chúng ta chỉ sử dụng querySelector(), cũng như querySelectorAll(). trong 1 số trường hợp đặc biệt, cần Live Update thì mới phải select để lấy ra HTML Collection

///////////////////////////////////////////////
// ========== END SELECT ELEMENTS =============
///////////////////////////////////////////////

///////////////////////////////////////////////
// ============= CREATE ELEMENTS ==============
///////////////////////////////////////////////
/* 
=================== 4 ==================
*/
console.log('====== 4 ======');
/*
 * thường thì chúng ta sử dụng insertAdjacentElement() để insert (check lại chỗ insert movements ở những bài trước)
 */

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies to improve functionality & analytics!'; // method 1
message.innerHTML = `We use cookies to improve functionality & analytics! <button class="btn btn--close-cookie">Got it!</button>`;

// ! chúng ta sử dụng prepend() cũng như append() cùng lúc, nhưng chỉ add đc duy nhất 1 lần >> lý do là vì thằng message lúc này là live element, nên chỉ có thể xuất hiện 1 lần duy nhất trong dom
// header.prepend(message); // as first child of header
// header.append(message); // as last child of header

/* 
=================== 5 ==================
*/

// ! nếu muốn insert ở nhiều chỗ thì chúng ta sẽ phải copy thằng message ra
// header.append(message.cloneNode(true));

/* 
=================== 6 ==================
*/

// ! lưu ý: để chạy đc những thằng này thì phải tắt prepend(), cũng như append() ở trên đi
// header.before(message); // nằm trước header
header.after(message); // nằm sau header

///////////////////////////////////////////////
// ========== END CREATE ELEMENTS =============
///////////////////////////////////////////////

///////////////////////////////////////////////
// ============= DELETE ELEMENTS ==============
///////////////////////////////////////////////

/* 
=================== 7 ==================
*/
console.log('====== 7 ======');

document
  .querySelector('.cookie-message')
  .addEventListener('click', function () {
    // * trước đây, không có thằng remove(), mà chỉ có removeChild() >> phải select parent, rồi traverse tới thằng child rồi mới remove đc
    message.parentElement.removeChild(message); // cách cũ

    // message.remove(); // cách mới
  });
