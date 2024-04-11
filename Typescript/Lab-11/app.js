//Interfaces
//enum declaration
var RestaurantType;
(function (RestaurantType) {
    RestaurantType[RestaurantType["FastFood"] = 0] = "FastFood";
    RestaurantType[RestaurantType["Cafeteria"] = 1] = "Cafeteria";
    RestaurantType[RestaurantType["CoffeeHouse"] = 2] = "CoffeeHouse";
    RestaurantType[RestaurantType["Cafe"] = 3] = "Cafe";
    RestaurantType[RestaurantType["Bistros"] = 4] = "Bistros";
})(RestaurantType || (RestaurantType = {}));
;
//Declaring Restaurant
//we should have a contract
var restaurant1 = {
    Name: 'subway',
    Address: '123/D',
    Phone: 456895,
    Type: RestaurantType[RestaurantType.FastFood]
};
var restaurant2 = {
    Name: 'MTR',
    Address: '143/D',
    Phone: 589895,
    Type: RestaurantType[RestaurantType.Bistros]
};
var restaurant3 = {
    Name: 'Paradise',
    Address: '153/D',
    Phone: 2457895,
    Type: RestaurantType[RestaurantType.CoffeeHouse]
};
var RestaurantDetails = function (rest) {
    console.log("Name : ".concat(rest.Name, "  Address : ").concat(rest.Address, "  Phone : ").concat(rest.Phone, " Type : ").concat(rest.Type));
};
// RestaurantDetails(restaurant1);
//====================================================================
//Create a list of restaurants
var restaurants = [];
restaurants.push(restaurant1);
restaurants.push(restaurant2);
restaurants.push(restaurant3);
//Push restaurant1 in the list
//Function declaration to get the list of restaurants
var GetRestaurantList = function (r) {
    r.forEach(function (rest, index) {
        console.log("Restaurant Number is ".concat(index + 1));
        //console.log(Name : ${rest.Name}  Address : ${rest.Address}  Phone : ${rest.Phone} Type : ${rest.Type});
        RestaurantDetails(rest);
    });
};
//Function call
GetRestaurantList(restaurants);
