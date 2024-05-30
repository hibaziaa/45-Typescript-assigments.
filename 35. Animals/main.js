// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list.
var animals = ["Dog", "Cat", "Rabbit"];
// use a for loop to print out the name of each animal.
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal1 = animals_1[_i];
    //  Modify your program to print a statement about each animal, such as A dog would make a great pet.
    console.log("A ".concat(animal1, " would make great pet."));
}
//Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
console.log("Dogs, rabbits, and cats are all mammals with fur and give birth to live young.");
