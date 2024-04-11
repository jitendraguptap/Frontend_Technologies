//Create an array 'foodItems' 
const foodItems=["Sandwich","Pizza","Pasta"]

//sample function
function sayHello(){
    console.log('It is working');
}

//Update the forEach to print the Sl No and items
//Example:
//1. Sandwich
//2. Pizza
foodItems.forEach(function(item,index){
    console.log(`${index+1}-- ${item}`);
});