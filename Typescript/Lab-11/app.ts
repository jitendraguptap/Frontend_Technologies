//Interfaces

//enum declaration
enum RestaurantType {'FastFood', 'Cafeteria', 'CoffeeHouse', 'Cafe', 'Bistros'};

//Restaurant Interface declaration
interface RestaurantInfo{
    Name: string,
    Address: string,
    Phone: Number,
    Type: string
}

//Declaring Restaurant
//we should have a contract
let restaurant1: RestaurantInfo ={
    Name: 'subway',
    Address: '123/D',
    Phone: 456895,
    Type: RestaurantType[RestaurantType.FastFood]
}
let restaurant2: RestaurantInfo ={
    Name: 'MTR',
    Address: '143/D',
    Phone: 589895,
    Type: RestaurantType[RestaurantType.Bistros]
}
let restaurant3: RestaurantInfo ={
    Name: 'Paradise',
    Address: '153/D',
    Phone: 2457895,
    Type: RestaurantType[RestaurantType.CoffeeHouse]
}

let RestaurantDetails= (rest:RestaurantInfo)=>{
    console.log(`Name : ${rest.Name}  Address : ${rest.Address}  Phone : ${rest.Phone} Type : ${rest.Type}`);
}

// RestaurantDetails(restaurant1);

//====================================================================
//Create a list of restaurants

let restaurants:RestaurantInfo[] =[];
restaurants.push(restaurant1);
restaurants.push(restaurant2);
restaurants.push(restaurant3);

//Push restaurant1 in the list


//Function declaration to get the list of restaurants
let GetRestaurantList = (r:RestaurantInfo[]) =>{
    r.forEach((rest,index)=> {
        console.log(`Restaurant Number is ${index+1}`);
        //console.log(Name : ${rest.Name}  Address : ${rest.Address}  Phone : ${rest.Phone} Type : ${rest.Type});
        RestaurantDetails(rest);
    });
}

//Function call
GetRestaurantList(restaurants);