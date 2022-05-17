const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

//-----------------------------------------
console.log("-------- 1 --------");
//-----------------------------------------

// Object.keys(obj)
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}

console.log(openStr);

//-----------------------------------------
console.log("-------- 2 --------");
//-----------------------------------------

// Object.values(obj)
const values = Object.values(openingHours);
console.log(values);

//-----------------------------------------
console.log("-------- 3 --------");
//-----------------------------------------

// Loop through entire object:
// Object.entries() >> return keys + values
const entries = Object.entries(openingHours);
console.log(entries);

console.log("#############");

// const x = const [key, value] = const [key, {open, close}]
for (const [key, { open, close }] of entries) {
  console.log(`On ${key}, we open at ${open} and close at ${close}`);
}
