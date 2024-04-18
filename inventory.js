// Create a new function named shoes
// Object constructors
function shoes(name, product_code, quantity, value_per_item){
    this.name = name;
    this.product_code = product_code;
    this.quantity = quantity
    this.value_per_item = value_per_item;
}
// Creating the instances of the shoes object
let shoe1 = new shoes("Adidas", "A1234", 5, 80);
let shoe2 = new shoes("NB", "NB1123", 5, 90);
let shoe3 = new shoes("Clarks", "CKL23", 2, 50);
let shoe4 = new shoes("Vans", "VAN5555", 6, 60);
let shoe5 = new shoes("Nike", "NK0001", 8, 101);
// Pushing all items to the array
let allShoes = [shoe1, shoe2, shoe3, shoe4, shoe5];
// Function to search any shoe within the array
function searchShoe(item){
    // Loop through each item of an shoes array
    for (let i = 0; i < allShoes.length; i++){
    // Search item with the name and product_code
        if (allShoes[i].name === item || allShoes[i].product_code === item){
            return allShoes[i];
        } 
    }
};
// Displaying on the console
console.table(allShoes);
console.log("--------Table according to the given value---------")
console.table(searchShoe("Nike"));
// Function to find the lowest item per value
// Also it will give the value per item in ascending order/ Which has the less value per item
function lowestValue(item){
    item.sort((firstShoe, secondShoe) =>
    firstShoe.value_per_item < secondShoe.value_per_item ? -1 : 1
);
// Use template and string literals to dispaly the details
console.log(`The item with the less value per item is ${item[0].name}, 
which value is ${item[0].value_per_item}.`);
};
// Calling thr function
lowestValue(allShoes);
// Displaying on the console
console.log("-----------------Table in ascending order------------------")
console.table(allShoes);
console.log("-------------------------------------------------------")
// Function to find highest value per item
// Function to arrange table
function highestValue(item){
    item.sort((firstItem, secondItem) =>
    firstItem.value_per_item > secondItem.value_per_item ? -1 : 1
);
// Use template and string literals to dispaly the details
console.log(`The item with the high value per item is ${item[0].name}, 
which value is ${item[0].value_per_item}`);
}
highestValue(allShoes);
// Function to eidt all four properties for each of five shoe
function editProperties(allShoes, item, newItem){
// Try catch block if any error occur while running the code below
    try{
    for (let i = 0; i < allShoes.length; i++){
// Checking each item according to the given item and replacing with new one
        if (allShoes[i].name === item){
            allShoes[i]["name"] = newItem;
        } else if (allShoes[i].product_code === item) {
            allShoes[i]["product_code"] = newItem;
        } else if (allShoes[i].quantity == item) {
            allShoes[i]["quantity"] = newItem;
        } else if (allShoes[i].value_per_item == item){
            allShoes[i]["value_per_item"] = newItem;
            return allShoes[i];
        }
    };
// If any error then it will catches and throw the erro massage 
} catch (err){
    console.log(err);
}
}
//calling the editProperties functions with the older value to be replaced with new value
editProperties(allShoes, 6, 7);
console.log("\nThe updated table: ");
// Prints the array in table format on the console
console.table(allShoes);