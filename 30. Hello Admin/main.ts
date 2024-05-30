// Making an array of usernames including admin.
let userNames = ["Moosa", "Hamna", "Admin", "Fahad", "Asad"];

// Using forEach loop on array.
userNames.forEach((oneUserName) => {
  if (oneUserName === "Admin") {
    console.log(
      `Hello! ${oneUserName}, would you like to see a status report? `
    );
  } else {
    console.log(`Hello ${oneUserName}, thank you for logging in again.`);
  }
});
