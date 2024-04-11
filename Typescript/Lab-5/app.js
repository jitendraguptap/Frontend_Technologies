function totalPrice(n1, n2, showRes) {
    if (showRes) {
        console.log(n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
var itemPrice = 50;
var deliveryCharge = 15.6;
var printRes = true;
var e = [1, 2, 3];
var arr = [1, true, 'a', false];
var result = totalPrice(itemPrice, deliveryCharge, printRes);
console.log("Total price of the order is Rs " + result);
