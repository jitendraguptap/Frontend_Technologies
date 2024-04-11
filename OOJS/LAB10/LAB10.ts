import {restaurant} from  "./Required_TS_File/restaurant";
import {Customer} from  "./Required_TS_File/customer";
import {RegCustomer} from "./Required_TS_File/regcustomer";
import {order} from "./Required_TS_File/order";
import {item} from "./Required_TS_File/item";
import {orderitem} from "./Required_TS_File/orderitem";

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
const amazon = new restaurant('Amazon');

//Create 4 items: 'Bag' with price of 500, 'Books' with price of 1000, 'Pen' with price of 200 and 'Box' with price of 100.
const bag = new item(500, 'Bag');
const books = new item(1000, 'Books');
const pen = new item(200, 'Pen');
const box = new item(100, 'Box');

//Add The 4 items to the company 'Amazon'
amazon.item.push(bag);
amazon.item.push(books);
amazon.item.push(pen);
amazon.item.push(box);

//Create two orderitem objects. One with 3 quantity of bag and other with 4 quantity of books
const orderItem1 = new orderitem(3, [bag]);
const orderItem2 = new orderitem(4, [books]);

//Create an object of order and add the above two orderitems in it
const order1 = new order();
order1.orderitem.push(orderItem1);
order1.orderitem.push(orderItem2);

//Create another two orderitem objects. One with 4 quantity of pen and other with 5 quantity of box.
const orderItem3 = new orderitem(4, [pen]);
const orderItem4 = new orderitem(5, [box]);

//Create another object of order and add the above two orderitems in it
const order2 = new order();
order2.orderitem.push(orderItem3);
order2.orderitem.push(orderItem4);

//Create a new customer with name 'Shaurya'
const shaurya = new Customer('Shaurya');

//Create a new reg customer with name 'Agnihotri' which will get a discount of 10%
const agnihotri = new RegCustomer('Agnihotri', 10);

//Add order1 for customer 'Shaurya'
shaurya.order.push(order1);

//Add order2 for the reg customer 'Agnihotri'
agnihotri.order.push(order2);

//Push both the customer in 'Amazon' company
amazon.customer.push(shaurya);
amazon.customer.push(agnihotri);

//Print all the details of the customers and orders
console.log('restaurant name is:', amazon.name);

amazon.customer.forEach(customer => {
    console.log('customer is:', customer.getName());
    console.log('customerid is:', customer.getcustomerId());

    customer.order.forEach(order => {
        console.log('orderid is:', order.getOrderid());

        order.orderitem.forEach((item, index) => {
            console.log(`ordered quantity of item${index + 1}:`, item.quantity);
            console.log(`description(item${index + 1}) is:`, item.item[0].descripion);
            console.log(`price of item${index + 1} is`, item.totalprice);
            console.log(`itemid for item${index + 1}:`, item.item[0].itemId);
        });
    });
});

//Print details of regular customers and their orders
amazon.customer.forEach(customer => {
    if (customer instanceof RegCustomer) {
        console.log('reg customer is:', customer.getName());
        console.log('regcostomerid is:', customer.getcustomerId());

        customer.order.forEach(order => {
            console.log('regcustomer orderid :', order.getOrderid());

            order.orderitem.forEach((item, index) => {
                console.log(`ordered quantity:`, item.quantity);
                console.log(`description(item${index + 1} in order2) is:`, item.item[0].descripion);
                console.log(`price of item${index + 1} is`, item.totalprice);
                console.log(`itemid for item${index + 1}:`, item.item[0].itemId);
            });
        });
    }
});
