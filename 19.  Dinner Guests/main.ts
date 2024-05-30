// starting fron exercise 14.
var guestsname = ["Imran Khan", "Muhammad Ali Jinnah", "William Shakespeare"];
// var inv_msg =
//   "We are pleased to extend a formal invitation to you for the upcoming dinner at 'THE GRAND PALACE'. We would be honores if you could join us.";
// // printing unavailable guest name and a statement.
// var notcoming_guest = "Imran Khan";
// console.log(notcoming_guest, "unfortunately can not make it to the dinner");
// //replacing him with a new guest.
// var new_guest = "Kamran Tessori";
// guestsname[0] = new_guest;
// //printing a news of getting bigger table.
// console.log(
//   "It is to inform you that fortunately we have arranged a bigger table to invite more respectable guests"
// );
// //adding three more names in guest list's array.
//adding name in the beginning of array.
guestsname.unshift("Babar Azam");
//adding name in the middle of array.
guestsname.splice(2, 0, "Virat Kohli");
//adding name in the ending of array.
guestsname.push("Bilal Abbas Khan");
// //printing new set of invitations separately for each guest.
// console.log("Dear,", guestsname[0], inv_msg);
// console.log("Dear,", guestsname[1], inv_msg);
// console.log("Dear,", guestsname[2], inv_msg);
// console.log("Dear,", guestsname[3], inv_msg);
// console.log("Dear,", guestsname[4], inv_msg);
// console.log("Dear,", guestsname[5], inv_msg);
// //printing a message saying that you can invite only two people for dinner.
// console.log(
//   "We're extremley sorry to our guests but we can not invite more than two people for the upcoming dinner."
// );
// // Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//while (guestsname.length > 2) {
// var removedGuests = guestsname.pop();
//   console.log(
//   `Unfortunately due to some inconvenience we can't invite ".${
//       removedGuests},
//        to the dinner.`
//     )
//   ;
// }
//printing message to the the remaining two invited people.
// var new_message = "Luckily, You're still invited to our dinner";
// console.log("Dear", guestsname[0], new_message);
// console.log("Dear", guestsname[1], new_message);
//Removing the last two names from your list, so we have an empty list.
while (guestsname.length > 0) {
  var removedGuests = guestsname.pop();
}
//Printing empty guest list.
// console.log("Empty guest list:", guestsname);

//exercise 19.
//printing a message to indicate number of guests you're inviting.
console.log(`TOTAL number of guests are: ${guestsname.length}`);
