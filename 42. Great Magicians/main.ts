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

//storing function inside a variable
let great_magicians = make_great(magicians_name);
// calling show_magicians to see if the list have been modified
show_magicians(great_magicians);
