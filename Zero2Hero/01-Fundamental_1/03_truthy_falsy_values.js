// there are 5 falsy values: 0, '', undefined, null, NaN >> these 5 will be converted to 0 or false automatically 
// Everything else are truthy values



// in the real world, we will never do this, everything will be converted automatically by coercion
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(''));

//-----------------------------------

console.log('-------------');

console.log(Boolean('Abc'));
console.log(Boolean({}));

// ----------------------------------
console.log('-------------');


const money = 0;
if(money)
    console.log(`Don't spend it all`);
else 
    console.log(`You should get a job`);


// ----------------------------------
console.log('-------------');


let height;
if(height)
    console.log(`YAY!!! Height is defined!`);
else 
    console.log('Height is UNDEFINED !!!!!!');