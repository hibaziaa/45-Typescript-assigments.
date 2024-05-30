//Define a function to crate a car object with optional parameters.
function makingCar(manufacturer: string, model: string, ...options: string[]) {
  //initialize a car object with manufacturer and model
  let car = {
    manufacturer: manufacturer,
    model: model,
  };
  // add optional parameter to the car object.
  options.forEach((option) => {
    let [key, value] = option.split(":");
    car[key.trim()] = value.trim();
  });
  return car;
}

//Call the function to create a car object.
let myCar = makingCar("Honda", "Civic", "Color : Black", " Year : 2022");

//Printing the variable to ensure all the information is stored correctly in car object.
console.log(myCar);
