// Methods 1: Using object literals
let car = {
    // Object properties
    brand: "Tesla",
    model: "Model S",
    year: 2024,
    color: "Grey",
    // Object method
    howOld: function(){
        return `The car was build in year ${this.year}`;
    },
};
console.log(car.howOld());

// Method 2: Using object constructors
function carDescription(brand, model, year, color){
    //object properties 
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
}
// Create object instance
let car1 = new carDescription("Tesla", "Model S", 2024, "Red");
let car2 = new carDescription("Mercedes", "G-Wagon", 2024, "Grey");
let car3 = new carDescription("Land ROver", "Valar", 2022, "Gray Green");
// Created the new transmission and engine type properties which do not exist
car1["transmission"] = "Automatic";
car2.engineType = "Electric";
// Note: in this case, either bracket or dot notation can be used to add these properties to the car object
console.log(car1["transmission"]);
console.log(car2.engineType);
// Dot notation
console.log(car1.color);
console.log(car2.model);
// Bracket[] - Ther properties key is passed as a string enclosed within quotation marks
console.log(car1["model"]);
console.log(car2["color"]);
// Create and array to store car objects
let cars = [car1, car2, car3];

// Define a function to find most recently manufactured
function findNewCar(array){
// Sort the array of cars based on the manufacturing year in descending order
    array.sort((firstCar, secondCar) =>
    firstCar.year > secondCar.year ? -1: 1
);
// Use template and string literals to dispaly the details
console.log(`The most recently manufactured car is the ${array[0].brand}
${array[0].model}, which was made in ${array[0].year}`);
}
// Call the findNewCar function
findNewCar(cars);