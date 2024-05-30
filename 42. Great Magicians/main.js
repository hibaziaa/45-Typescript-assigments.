//starting with exercise 41..
// Make a array of magician’s names.
var magicians_name = [
    "David Copperfield",
    "Dynamo",
    "Penn & Teller",
    "Derren Brown",
];
//Pass the array to a function called show_magicians(), which prints the name of each magician in the array.using for each method
function show_magicians(magicians) {
    magicians.forEach(function (names) { return console.log(names); });
}
// making another function that modifies the array of magicians_name
function make_great(magicians) {
    return magicians.map(function (names) { return "The Great ".concat(names); });
}
//storing function inside a variable
var great_magicians = make_great(magicians_name);
// calling show_magicians to see if the list have been modified
show_magicians(great_magicians);
