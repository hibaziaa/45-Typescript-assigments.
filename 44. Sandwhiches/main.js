//Making a function that accepts an array of items with the help of rest parameter.
function making_sandwhich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nYour sandwhich is ready having these ingredients:\n");
    items.forEach(function (items1) { return console.log(items1); });
}
//Calling our function making_sandwhich thrice with different number of ingredients.
making_sandwhich("bread", "butter");
making_sandwhich("bread", "butter", "cheese", "chicken");
making_sandwhich("bread", "butter", "cheese", "chicken", "lettuce", "tomato", "mayo");
