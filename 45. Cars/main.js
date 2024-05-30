//Define a function to crate a car object with optional parameters.
function makingCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //initialize a car object with manufacturer and model
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    // add optional parameter to the car object.
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//Call the function to create a car object.
var myCar = makingCar("Honda", "Civic", "Color : Black", " Year : 2022");
//Printing the variable to ensure all the information is stored correctly in car object.
console.log(myCar);
