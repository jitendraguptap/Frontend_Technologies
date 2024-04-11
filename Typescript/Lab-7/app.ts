function totalPrice(n1:number,n2:number,showRes:boolean,str:string){
    const result=n1+n2;
    if(showRes)
    {
        
         console.log(`${str} Rs ${result}`);
    }
    else{
     return n1+n2;
    }
 }
 
 const itemPrice=50;
 const deliveryCharge=15.6;
 const printRes=true;
 const cusString='Result is :';
 const result=totalPrice(itemPrice,deliveryCharge,printRes,cusString);
 //console.log("Total price of the order is Rs "+result);