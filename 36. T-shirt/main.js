// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it.
function make_shirt(size, message) {
    console.log("It is a ".concat(size, " shirt with a message of ").concat(message, " printed on it."));
}
//Call the function.
make_shirt("small", "HELLO WORLD!");
