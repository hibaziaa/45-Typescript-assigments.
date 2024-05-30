// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
function make_shirt(
  size: string = "large",
  message: string = "I love TypeScript"
) {
  console.log(
    `It is a ${size} shirt with a message of ${message} printed on it.`
  );
}
make_shirt();
//Make a large shirt and a medium shirt with the default message.
make_shirt("Medium");

//and a shirt of any size with a different message.
make_shirt("Small", "I love JavaScript");
