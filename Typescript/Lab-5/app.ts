function totalPrice(n1:number,n2:number,showRes:boolean){
   if(showRes)
   {
        console.log(n1+n2);
   }
   else{
    return n1+n2;
   }
}

const itemPrice=50;
const deliveryCharge=15.6;
const printRes=false;
let e:number[]=[1,2,3];
let arr:any[]=[1,true,'a',false];
const result=totalPrice(itemPrice,deliveryCharge,printRes);
console.log("Total price of the order is Rs "+result);