const hasDriverLicense = true;
const hasGoodVision = false;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);


//-----------------
console.log(`-------`);


const shouldDrive = hasDriverLicense && hasGoodVision;

if(shouldDrive)
    console.log(`be able to drive`);
else
    console.log('someone else should drive...');
