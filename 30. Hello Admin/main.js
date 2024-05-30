// Making an array of usernames including admin.
var userNames = ["Moosa", "Hamna", "Admin", "Fahad", "Asad"];
// Using forEach loop on array.
userNames.forEach(function (oneUserName) {
    if (oneUserName === "Admin") {
        console.log("Hello! ".concat(oneUserName, ", would you like to see a status report? "));
    }
    else {
        console.log("Hello ".concat(oneUserName, ", thank you for logging in again."));
    }
});
