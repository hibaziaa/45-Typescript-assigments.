// starting fron exercise 14.
let guestsname = ["Imran Khan", "Muhammad Ali Jinnah", "William Shakespeare"];
let inv_msg =
  "We are pleased to extend a formal invitation to you for the upcoming dinner at 'THE GRAND PALACE'. We would be honores if you could join us.";

// printing unavailable guest name and a statement.
let notcoming_guest = "Imran Khan";
console.log(notcoming_guest, "unfortunately can not make it to the dinner");

//replacing him with a new guest.
let new_guest = "Kamran Tessori";
guestsname[0] = new_guest;

//printing a news of getting bigger table.
console.log(
  "It is to inform you that fortunately we have arranged a bigger table to invite more respectable guests"
);

//adding three more names in guest list's array.
//adding name in the beginning of array.
guestsname.unshift("Babar Azam");

//adding name in the middle of array.
guestsname.splice(2, 0, "Virat Kohli");

//adding name in the ending of array.
guestsname.push("Bilal Abbas Khan");

//printing new set of invitations separately for each guest.
console.log("Dear,", guestsname[0], inv_msg);
console.log("Dear,", guestsname[1], inv_msg);
console.log("Dear,", guestsname[2], inv_msg);
console.log("Dear,", guestsname[3], inv_msg);
console.log("Dear,", guestsname[4], inv_msg);
console.log("Dear,", guestsname[5], inv_msg);
