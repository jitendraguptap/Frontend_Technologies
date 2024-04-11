function totalPrice(n1, n2, showRes, str) {
    var result = n1 + n2;
    if (showRes) {
        console.log("".concat(str, " Rs ").concat(result));
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
