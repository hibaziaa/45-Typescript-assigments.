//starting with exercise 41..
// Make a array of magician’s names.
let magicians_name: string[] = [
  "David Copperfield",
  "Dynamo",
  "Penn & Teller",
  "Derren Brown",
];
//Pass the array to a function called show_magicians(), which prints the name of each magician in the array.using for each method
function show_magicians(magicians: string[]) {
  magicians.forEach((names) => console.log(names));
}

// making another function that modifies the array of magicians_name
function make_great(magicians: string[]) {
  return magicians.map((names) => `The Great ${names}`);
}

// making a copy of orignal array.
let copiedArray = magicians_name.slice();

// modify the copied array with "the great" with their names.
let copied_magicians = make_great(copiedArray);

// calling both orignal and copied array.
show_magicians(magicians_name);
console.log(copied_magicians);
