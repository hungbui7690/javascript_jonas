const runOnce = function () {
  console.log(`This will never run again`);
};

runOnce();

// IIFE >> use (function)()
// this is not the feature of JS >> this is just the pattern that devs use
(function () {
  console.log(`This will never run again!! 🎉`);
})();

(() => console.log(`This will ALSO never run again! ✈️ `))();
