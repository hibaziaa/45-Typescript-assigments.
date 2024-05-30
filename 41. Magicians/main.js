// Make a array of magician’s names.
var magicians_name = [
    "David Copperfield",
    "Dynamo",
    "Penn & Teller",
    "Derren Brown",
];
//Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    magicians.forEach(function (names) { return console.log(names); });
}
show_magicians(magicians_name);
