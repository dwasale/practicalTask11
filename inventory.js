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
function searchShoe(product_code){
    // Loop through each item of an shoes array
    for (let i in allShoes){
        if (allShoes[i].product_code == product_code){
            console.log(`${product_code} item found!`);
            console.table(allShoes[i]);
        }
    }
}
// Displaying on the console
console.table(allShoes);
searchShoe("NK0001");
console.log("----------------------------------------------------------");
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
console.log("\n-------------------------------------------------------")
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
// Calling function highestValue as required to see the highest value item
highestValue(allShoes);
// Function to eidt the properties for each of five shoe
function editProperties(product_code, quantity, value_per_item){
// Storing the index value of the shoe item in a variable through checking the product_code
    const productIndex = allShoes.findIndex((shoes) => shoes.product_code === product_code);
// Try catch block if any error occur while running the code below
    try{
    // Checking if the index value is not less than -1
    if (productIndex !== -1){
        // Changing the shoe quantity and value_per_item as given from the user
        allShoes[productIndex]["quantity"] = quantity;
        allShoes[productIndex]["value_per_item"] = value_per_item;
        console.log(`${product_code} has been edited/updated successfully!`)
    } else {
        console.log(`${product_code} item cannot be FOUND!!`);
    }
// If any error then it will catches and throw the erro massage 
    } catch (err){
        console.log(err);
    }
}
//calling the editProperties functions with the older value to be replaced with new value
editProperties("CKL23", 5, 10);
// console.log("The updated table: ");
// Prints the array in table format on the console
console.table(allShoes);