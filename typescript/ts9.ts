/*Define a CustomerID alias for string.

Create a Customer object alias with id: CustomerID, name: string, and optional email?: string.

Implement a processOrder function type alias that accepts orderId: number and a callback (status: OrderStatus) => void.

Use the Container<T> generic to wrap a Customer object.*/

type CustomerID = string;

type Customer={
id: CustomerID;
name:string;
email?:string;

}
type OrderStatus = "pending" | "shipped" | "returned";

type processOrder=(orderId: number, callback: (status: OrderStatus) => void) => void;

const warehouseProcess: processOrder = (orderId, callback) => {
  console.log(`Processing Order #${orderId}...`);
  callback("shipped"); 
};

type Container<T> = {
  value: T;
  timestamp: Date;
};

const customerObj: Customer = { id: "C-99", name: "Sarah" };

const wrappedCustomer: Container<Customer> = {
  value: customerObj,
  timestamp: new Date()
};

console.log(wrappedCustomer);