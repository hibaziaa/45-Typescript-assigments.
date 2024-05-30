//storing a name in a variable.
let abc = "hiba zia";

//printing variable's value in lowercase.
console.log(abc.toLowerCase());

//printing variable's value in UPPERCASE.
console.log(abc.toUpperCase());

//printing variable's value in TitleCase.
console.log(abc.replace(/\b\w/g, (char) => char.toUpperCase()));
