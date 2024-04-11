function totalPrice(n1, n2, showRes, str) {
    if (showRes) {
        console.log(str + n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
var itemPrice = 50;
var deliveryCharge = 15.6;
var printRes = true;
var cusString = 'Result is :';
var result = totalPrice(itemPrice, deliveryCharge, printRes, cusString);
//console.log("Total price of the order is Rs "+result);
