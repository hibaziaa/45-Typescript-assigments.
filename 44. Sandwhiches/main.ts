//Making a function that accepts an array of items with the help of rest parameter.
function making_sandwhich(...items: string[]) {
  console.log("\nYour sandwhich is ready having these ingredients:\n");
  items.forEach((items1) => console.log(items1));
}

//Calling our function making_sandwhich thrice with different number of ingredients.
making_sandwhich("bread", "butter");
making_sandwhich("bread", "butter", "cheese", "chicken");
making_sandwhich(
  "bread",
  "butter",
  "cheese",
  "chicken",
  "lettuce",
  "tomato",
  "mayo"
);
