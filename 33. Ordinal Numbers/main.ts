// Storing the numbers 1 through 9 in a array.
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Loop through the array. Using for..of loop.
for (let num of numbers) {
  let ordinalEnding: string;
  //  Use an if-else chain inside the loop to print the proper ordinal ending for each number
  if (num === 1) {
    ordinalEnding = "st";
  } else if (num === 2) {
    ordinalEnding = "nd";
  } else if (num === 3) {
    ordinalEnding = "rd";
  } else {
    ordinalEnding = "th";
  }
  console.log(`${num}${ordinalEnding}`);
}
