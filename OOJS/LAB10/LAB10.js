"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var restaurant_1 = require("./Required_TS_File/restaurant");
var customer_1 = require("./Required_TS_File/customer");
var regcustomer_1 = require("./Required_TS_File/regcustomer");
var order_1 = require("./Required_TS_File/order");
var item_1 = require("./Required_TS_File/item");
var orderitem_1 = require("./Required_TS_File/orderitem");
//Create an object for company with name 'amazom'
//Create 4 items: 'Bag' with price of 500, 'Books' with price of 1000, 'pen' with price of 200 and box with price of 100.
//Add The 4 items to the company 'Amazon'
//Create two orderitem object. One with 3 quantity of bag and other with 4 quantity of books
//Create an object of order and add the above two orderitem in it
//Create another two orderitem object. One with 4 quantity of pen and other with 5 quantity of box.
//Create another object of order and add the above two orderitem in it
//Create a new customer with name 'Shaurya'
//Create a new reg customer with name 'Agnihotri' which will get a discount of 10%
//Add order1 for customer 'Shaurya'
//Add order2 for the reg customer 'Agnihotri'
//Push both the customer in 'amazon' company
//Print all the details of the customer and orders as shown below:
// restaurant name is: amazon
// customer is: charan
// customerid is: 1
// orderid is: 1
// ordered quantity of item1: 3 
// ordered quantity of item2: 4 
// description(item1) is:  bag  
// description(item2) is:  books
// price of item1 is500
// price of item2 is1000
// iteamid for item1: 1
// iteamid for item2: 2
// reg customer is: satya
// regcostomerid is: 2
// regcustomer orderid :2
// ordered quantity: 4
// ordered quantity: 5
// description(item1 in order2) is:  pen
// description(item2 in order2) is:  box
// price of item3 is200
// price of item4 is100
// iteamid for item3: 3
// iteamid for item4: 4
//Create an object for company with name 'Amazon'
var amazon = new restaurant_1.restaurant('Amazon');
//Create 4 items: 'Bag' with price of 500, 'Books' with price of 1000, 'Pen' with price of 200 and 'Box' with price of 100.
var bag = new item_1.item(500, 'Bag');
var books = new item_1.item(1000, 'Books');
var pen = new item_1.item(200, 'Pen');
var box = new item_1.item(100, 'Box');
//Add The 4 items to the company 'Amazon'
amazon.item.push(bag);
amazon.item.push(books);
amazon.item.push(pen);
amazon.item.push(box);
//Create two orderitem objects. One with 3 quantity of bag and other with 4 quantity of books
var orderItem1 = new orderitem_1.orderitem(3, [bag]);
var orderItem2 = new orderitem_1.orderitem(4, [books]);
//Create an object of order and add the above two orderitems in it
var order1 = new order_1.order();
order1.orderitem.push(orderItem1);
order1.orderitem.push(orderItem2);
//Create another two orderitem objects. One with 4 quantity of pen and other with 5 quantity of box.
var orderItem3 = new orderitem_1.orderitem(4, [pen]);
var orderItem4 = new orderitem_1.orderitem(5, [box]);
//Create another object of order and add the above two orderitems in it
var order2 = new order_1.order();
order2.orderitem.push(orderItem3);
order2.orderitem.push(orderItem4);
//Create a new customer with name 'Shaurya'
var shaurya = new customer_1.Customer('Shaurya');
//Create a new reg customer with name 'Agnihotri' which will get a discount of 10%
var agnihotri = new regcustomer_1.RegCustomer('Agnihotri', 10);
//Add order1 for customer 'Shaurya'
shaurya.order.push(order1);
//Add order2 for the reg customer 'Agnihotri'
agnihotri.order.push(order2);
//Push both the customer in 'Amazon' company
amazon.customer.push(shaurya);
amazon.customer.push(agnihotri);
//Print all the details of the customers and orders
console.log('restaurant name is:', amazon.name);
amazon.customer.forEach(function (customer) {
    console.log('customer is:', customer.getName());
    console.log('customerid is:', customer.getcustomerId());
    customer.order.forEach(function (order) {
        console.log('orderid is:', order.getOrderid());
        order.orderitem.forEach(function (item, index) {
            console.log("ordered quantity of item".concat(index + 1, ":"), item.quantity);
            console.log("description(item".concat(index + 1, ") is:"), item.item[0].descripion);
            console.log("price of item".concat(index + 1, " is"), item.totalprice);
            console.log("itemid for item".concat(index + 1, ":"), item.item[0].itemId);
        });
    });
});
//Print details of regular customers and their orders
amazon.customer.forEach(function (customer) {
    if (customer instanceof regcustomer_1.RegCustomer) {
        console.log('reg customer is:', customer.getName());
        console.log('regcostomerid is:', customer.getcustomerId());
        customer.order.forEach(function (order) {
            console.log('regcustomer orderid :', order.getOrderid());
            order.orderitem.forEach(function (item, index) {
                console.log("ordered quantity:", item.quantity);
                console.log("description(item".concat(index + 1, " in order2) is:"), item.item[0].descripion);
                console.log("price of item".concat(index + 1, " is"), item.totalprice);
                console.log("itemid for item".concat(index + 1, ":"), item.item[0].itemId);
            });
        });
    }
});
