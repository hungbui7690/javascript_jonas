const friends = ["Micheal", "Steven", "Peter"];
console.log(friends);

//----------------------------------------------
console.log("--------1-------");
//----------------------------------------------

friends.push("Jay"); // add to end
console.log(friends);

const newLength = friends.push("Joe"); // most of the time we don't do this
console.log(newLength);

friends.unshift("John");
console.log(friends); // add to beginning

//----------------------------------------------
console.log("--------2-------");
//----------------------------------------------

friends.pop(); // remove last
console.log(friends);

const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // remove first
console.log(friends);

//----------------------------------------------
console.log("--------3-------");
//----------------------------------------------

console.log(friends.indexOf("Steven")); // return index
console.log(friends.indexOf("Bob"));

//----------------------------------------------
console.log("--------4-------");
//----------------------------------------------

// includes() >> ES6 >> return true/false
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));

// includes() uses strict equality
friends.push(23);
console.log(friends);
console.log(friends.includes("23"));
console.log(friends.includes(23));
