// Make a list of five or more usernames called current_users.
let current_users = ["Ali", "Zohaib", "Rohaan", "Abdullah", "Maryam"];

// Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users = ["Wahaj", "Anabia", "ZOHAIB", "Hamzah", "AbduLLah"];

// Loop through new users to check usernames availablity.
new_users.forEach((new_users_1) => {
  if (
    current_users.some(
      (current_users_one) =>
        current_users_one.toLowerCase() === new_users_1.toLowerCase()
    )
  ) {
    console.log(
      `You need to enter a new username. This username ${new_users_1} is already taken.`
    );
  } else {
    console.log(`Username ${new_users_1} is available.`);
  }
});
