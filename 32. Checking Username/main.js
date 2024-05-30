// Make a list of five or more usernames called current_users.
var current_users = ["Ali", "Zohaib", "Rohaan", "Abdullah", "Maryam"];
// Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
var new_users = ["Wahaj", "Anabia", "ZOHAIB", "Hamzah", "AbduLLah"];
// Loop through new users to check usernames availablity.
new_users.forEach(function (new_users_1) {
    if (current_users.some(function (current_users_one) {
        return current_users_one.toLowerCase() === new_users_1.toLowerCase();
    })) {
        console.log("You need to enter a new username. This username ".concat(new_users_1, " is already taken."));
    }
    else {
        console.log("Username ".concat(new_users_1, " is available."));
    }
});
