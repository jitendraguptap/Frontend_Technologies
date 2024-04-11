//9. [Async/await] Use Async Programming for displaying a Thank You message if customer gives rating more than 3.

//Step1: Get the form whose id is 'ratingForm'. 
//var form = 'Write Code Here'
var form=document.getElementById("ratingForm");

form.addEventListener('submit',setInterval(rateFunction));

//Step2: Create a async function rateFunction.


//Step2.a: Get the rating value from select id 'ratingId'.
//Step2.b: Create a promise to get the succes message "Thank You!" if rating is greater then 3.
//Step2.c: Use 'await' to make sure async function is executed and diaplay the message of promise in 'p' id of 'rateMessage'.



function replyToCustomer(rating){
    return new Promise((resolve,reject)=>{
        if(rating>3){
            resolve("Thank You!");
        }
        else{
            reject("We Will Improve Thank You for Your Feedback");
        }
    })
}



async function rateFunction(){
    try{
        var rating = parseInt(document.getElementById("ratingId").value);
        const customerRating= await replyToCustomer(rating);
        document.getElementById("rateMessage").innerHTML=customerRating;
    }
    catch(error){
        document.getElementById("rateMessage").innerHTML=error;
    }
    
}

