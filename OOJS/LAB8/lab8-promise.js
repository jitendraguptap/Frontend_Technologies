//8. [Promise] Use promise to show a warning message if item contain one or more Non-Veg Item

//Step1: Get all the items. (Note: Class name of li items is 'list-group-item').
//var items = 'Write code here'

var items=document.querySelectorAll('.list-group-item');

//Step2: Create the function displayItemMessage(someMsg) for displaying 
//the warning message in div with id 'warning-mess'.
//Write code here
function displayItemMessage(someMsg){
    document.getElementById('warning-mess').innerText=someMsg;
}

//Step3: Create a promise where declare a boolean variable 'checkVeg'. Iterate through the items and if any item doesn't have "Veg" in it then set 'checkVeg' as false.
//Write code here

let myPromise=new Promise((myResolve,myReject)=>
{
   let checkVeg=true;
   items.forEach(item=>{
    if(!item.innerText.includes("Veg")){
        checkVeg=false;
    }
   });
   if(checkVeg){
    myResolve("It does not contain any Non-Veg Item");
   }
   else
   {
    myReject("Warning! It contains one or more Non-Veg Item");
   }
});

//Step4: If promise is fulfilled the pass "It doesnot contain any Non-Veg Item" to the function created in step2 otherwise pass error message "Warning! It contains one or more Non-Veg Item".
//Write code here

myPromise.then(value=>{displayItemMessage(value);
}).catch(error=>{
    displayItemMessage(error);
});