const age = '18';

if(age === 18) console.log(`You just became an adult :D (strict)`);


//----------------------
console.log('--------');

const age1 = '18';
if(age1 == 18) console.log(`You just became an adult :D (loose)`);

// the reason is because with loose equality (==), it will use the coercion to convert string to # 
// that's why we try to avoid using loose equality (==) in our code >> general rule of clean code
