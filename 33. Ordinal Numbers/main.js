// Storing the numbers 1 through 9 in a array.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Loop through the array. Using for..of loop.
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var num = numbers_1[_i];
    var ordinalEnding = void 0;
    //  Use an if-else chain inside the loop to print the proper ordinal ending for each number
    if (num === 1) {
        ordinalEnding = "st";
    }
    else if (num === 2) {
        ordinalEnding = "nd";
    }
    else if (num === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log("".concat(num).concat(ordinalEnding));
}
