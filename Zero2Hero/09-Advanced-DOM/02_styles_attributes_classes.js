const header = document.querySelector('.header');

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = `We use cookies to improve functionality & analytics! <button class="btn btn--close-cookie">Got it!</button>`;

header.append(message);
document
  .querySelector('.cookie-message')
  .addEventListener('click', function () {
    message.remove();
  });

///////////////////////////////////////////////
// ================ START HERE ===============
///////////////////////////////////////////////

/* 
=================== 1 ==================
*/
console.log('====== 1 ======');

message.style.backgroundColor = '#37383d';
message.style.width = '120%'; // check trong inspector

console.log(message.style.height); // ! ra empty vì set kiểu này chỉ work với inline style
console.log(message.style.backgroundColor); // thằng này sẽ ra vì đây là inline style
console.log(message.style.color); // ! ra empty, mặc dù chúng ta có thể tìm thấy trong css file, nhưng không xuất hiện trong đây, do chúng ta không set trong JS

/*
 * =================== getComputedStyle() ==================
 */
console.log('====== 2 ======');

// * để lấy đc thì chúng ta phải sử dụng getComputedStyle()
console.log(getComputedStyle(message)); // trả về huge object
console.log(getComputedStyle(message).color); // trong practice, chúng ta sẽ chỉ lấy ra những property chúng ta cần
console.log(getComputedStyle(message).height); // mặc dù chúng ta không define trong css, nhưng do máy đã tự calc cho chúng ta nên vẫn hiển thị ra trong đây
/* 
=================== 3 ==================
*/
console.log('====== 3 ======');

message.style.height = getComputedStyle(message).height + 40 + 'px'; // ! thằng này sẽ không work do thằng height ở trên trả về px >> chúng ta phải parse từ string để lấy ra number trong đó
console.log(message.style.height); // ! ra empty do ở trên không work

/* 
=================== 4 ==================
*/
console.log('====== 4 ======');

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';
console.log(message.style.height); // * lúc này đã ra kết quả

/*
 * ====== WORK WITH CSS CUSTOM PROPERTY (CSS VAR) ======
 * :root{} trong css file = document.documentElement trong JS file
 */
console.log('====== 5 ======');

document.documentElement.style.setProperty('--color-primary', 'orangered');

// ! với custom property, đây là cách duy nhất để change >> sử dụng document.documentElement.style.setProperty()

/*
 * ====== ATTRIBUTES ======
 */
console.log('====== 6 ======');

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src); // trả ra abs url, trong khi ở file html là relative url
console.log(logo.className); // ! class là keyword >> phải đổi thành className, nếu không sẽ return undefined

console.log(logo.designer); // ! mặc dù chúng ta có att designer trong file html, nhưng vẫn ra undefined >> vì đây không phải là standard att >> NON-STANDARD

// * để fix >> getAttribute()
console.log(logo.getAttribute('designer'));

/* 
=================== 7 ==================
*/
console.log('====== 7 ======');

logo.alt = 'Beautiful Minimalist Logo'; // check trong inspector
console.log(logo.alt);

logo.setAttribute('company', 'superweb');
console.log(logo.getAttribute('company'));

/* 
=================== 8 ==================
*/
console.log('====== 8 ======');

console.log(logo.src); // absolute url
console.log(logo.getAttribute('src')); // relative url

// * tương tự với href
console.log('-------');

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

/*
 * ==== DATA ATTRIBUTES ====
 * work với những attribute bắt đầu với chữ data
 */
console.log('====== 9 ======');

console.log(logo.dataset.versionNumber);

/*
 * ==== CLASS ====
 */
console.log('====== 10 ======');

// chỉ có add() và remove() có thể work với multiple classname
logo.classList.add('test', 'logoZ');
logo.classList.remove('test', 'logoZ');
logo.classList.toggle('test');
console.log(logo.classList.contains('test'));
