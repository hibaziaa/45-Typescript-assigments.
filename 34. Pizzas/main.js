//Think of at least three kinds of your favorite pizza. Store these pizza names in a array.
var Pizzas = ["Pepperoni", "Sicilian", "Veggie"];
//use a for loop to print the name of each pizza.
for (var _i = 0, Pizzas_1 = Pizzas; _i < Pizzas_1.length; _i++) {
    var pizza1 = Pizzas_1[_i];
    // Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
    console.log("I like ".concat(pizza1, " Pizza"));
}
// Add a line at the end of your program, outside the for loop, such as I really love pizza!
console.log("I really love Pizzas!");
