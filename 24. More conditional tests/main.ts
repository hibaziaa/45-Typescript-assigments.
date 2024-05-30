// Creating variables and array.
let fruit: string = "Mango";
let number: number = 50;
let friendsName: string[] = ["Hania", "Zamda", "Ramsha"];

// Tests for equality and inequality with strings.
// For equality.
console.log("Is fruit equals to Mango?");
console.log(fruit == "Mango");

// For inequality.
console.log("\n Is fruit not equals to Mango?");
console.log(fruit != "Mango");

// Tests using the lower case function.
// For equality.
console.log("\n Is APPLE equal to apple after converting it into lowecase?");
console.log("APPLE".toLowerCase() == "apple");

// For inequality.
console.log(
  "\n Is APPLE not equal to apple after converting it into lowecase?"
);
console.log("APPLE".toLowerCase() != "apple");

//Numerical tests.
// For equality.
console.log("\n Is 100 equal to 100?");
console.log("100" == "100");

// For inequality.
console.log("\n Is 100 not equal to 100?");
console.log("100" != "100");

// For greater than.
console.log("\n Is 100 greater than 50?");
console.log("100" > "50");

// For less than.
console.log("\n Is 100 less than 50?");
console.log("100" < "50");

// For greater than or equal to.
console.log("\n Is 5 greatar than or equal to 2?");
console.log("5" >= "2");

// For less than or equal to.
console.log("\n Is 20 less than or equal to 20?");
console.log("20" <= "20");

// Tests using "AND" operators.
//with both true statements.
console.log("\n Is 100 greater than 10 and 10 is not equal to 50");
console.log("100" > "10" && 10 != number);

//with one true and one false statement.
console.log("\n Is 100 greater than 10 and 50 is not equal to 50");
console.log("100" > "10" && 50 != number);

// Tests using "OR" operators.
//with both false statements.
console.log("\n Is 100 is equal to 50 or 30 is greater than 50");
console.log(100 == number || 30 > number);

//with one true and one false statement.
console.log("\n Is 100 greater than 10 or 50 is not equal to 50");
console.log("100" > "10" || 50 != number);

// Test whether an item is in an array.
console.log("\n Is Hania available in friendsName array?");
console.log(friendsName.includes("Hania"));

//Test whether an item is not in an array.
console.log("\n Is Ramsha available in friendsName array?");
console.log(!friendsName.includes("Ramsha"));
