// Methods 1: Using object literals
let car = {
    // Object properties
    brand: "Tesla",
    model: "Model S",
    year: 2024,
    color: "Grey",
    // Object method
    howOld: function(){
        return 'The car was build in year ${this.year}';
    },
};
console.table(car);

// Method 2: Using object constructors
function carDescription(brand, model, year, color){
    //object properties 
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
}
// Create object instance
let car1 = new carDescription("Tesla", "Model S", 2024, "Red&");
let car2 = new carDescription("Mercedes", "G-Wagon", 2024, "Grey");
// Dot notation
console.log(car1.color);
console.log(car2.model);
// Bracket[] - Ther properties key is passed as a string enclosed within quotation marks
console.log(car1["model"]);
console.log(car2["color"]);