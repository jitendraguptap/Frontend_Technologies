//Create an array 'foodItems' 
var foodItems = ["Sandwich", "Pizza", "Pasta"];
//sample function
function sayHello() {
    console.log('It is working');
}
//Update the forEach to print the Sl No and items
//Example:
//1. Sandwich
//2. Pizza
foodItems.forEach(function (item, index) {
    console.log("".concat(index + 1, "-- ").concat(item));
});
