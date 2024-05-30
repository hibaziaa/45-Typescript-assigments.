//1st method.
var transportationmodes = [
  "Sports Car",
  "Private Jet",
  "Heavy Bike",
  "Bicycle",
];
var msg = "I would like to own a";
console.log(msg, transportationmodes[0]);
console.log(msg, transportationmodes[1]);
console.log(msg, transportationmodes[2]);
console.log(msg, transportationmodes[3]);

//2nd method.
var transportationmodes = [
  "Sports Car",
  "Private Jet",
  "Heavy Bike",
  "Bicycle",
];

transportationmodes.forEach((abc) => {
  console.log(`I would like to own a ${abc}`);
});
