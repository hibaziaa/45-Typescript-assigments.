//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//If the list is empty, print the message We need to find some users!
//Remove all of the usernames from your array, and make sure the correct message is printed.
var userNames = ["Moosa", "Hamna", "Admin", "Fahad", "Asad"];
userNames = [];
if (userNames.length === 0) {
    console.log("We need to find some users!");
}
else {
    userNames.forEach(function (oneUserName) {
        if (oneUserName === "Admin") {
            console.log("Hello! ".concat(oneUserName, ", would you like to see a status report? "));
        }
        else {
            console.log("Hello ".concat(oneUserName, ", thank you for logging in again."));
        }
    });
}
