//Interfaces

//enum declaration
//Define enum RestaurantType to store the type of restaurants
enum RestaurantType{'FastFood','Cafeteria','CoffeHouse','Bistros'};

//Restaurant Interface declaration
interface RestaurantInfo{
    Name:string,
    Address: string,
    Phone: number,
    Type: string
}

//Declaring Restaurant using the contract
let subwayRestaurant:RestaurantInfo={
    Name: 'Subway',
    Address: '123/A',
    Phone: 876769,
    Type: RestaurantType[RestaurantType.Cafeteria]
}

//Modify the function RestaurantDetails to accepts a type of the contract defined, to view the restaurant details.
let RestaurantDetails = (rest:RestaurantInfo) =>{
	//display the restaurant details
    console.log(`Name: ${rest.Name}  Address: ${rest.Address} Phone: ${rest.Phone} Restaurant Type: ${rest.Type}`)
}

//call the function to view the result
RestaurantDetails(subwayRestaurant);

