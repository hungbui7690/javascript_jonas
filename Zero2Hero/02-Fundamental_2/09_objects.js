// using array 
const firstName = 'Joe';
const person = [firstName, 'Doe', 2022 - 1990, 'dev'];


// objects: key-value pairs
// in object, the order does not matter, because we use the key to retrieve the value, not by using index like array
// >> we use array for more ordered data, and objects for unordered data
const john = {
    firstName : 'John',
    lastName : 'Doe',
    age : 2022 - 1990,
    job : 'dev',
    friends : ['Micheal', 'Peter', 'Stephen']
};
console.log(john);


console.log('---------1--------');


// To get the properties of object, we use dot notation or bracket notation

// DOT NOTATION
console.log(john.lastName);

// BRACKET NOTATION: by using bracket notation, we can put expression in the bracket 
console.log(john['lastName']);

const nameKey = 'Name';
console.log(john['first' + nameKey]); // using expression in bracket 


console.log('-----------------');


// const interestedIn = prompt('What do you want to know about John: firstName, lastName, age, job, and friends');

// if(john[interestedIn])
//     console.log(john[interestedIn]);
// else
//     console.log('Wrong request !!!');


console.log('---------2--------');

// Add more properties to object
john.location = 'England';
john['twitter'] = '@johndoe';
console.log(john);


console.log('---------3--------');


// Challenge 
// John has [3] friends, and his best friend is called [Micheal]
// Write the above sentence using DOT NOTATION and STRING LITERAL
console.log(`${john.firstName} has ${john.friends.length} friends, and his best friend is called ${john.friends[0]}.`);




