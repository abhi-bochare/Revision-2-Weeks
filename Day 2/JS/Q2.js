const orders = [
  {
    orderId: "A1",
    customer: { name: "John", location: { city: "NYC", country: "USA" } },
    items: [
      { product: "Laptop", quantity: 1, price: 999 },
      { product: "Mouse", quantity: 2, price: 25 },
    ],
  },
  {
    orderId: "A2",
    customer: { name: "Jane", location: { city: "LA", country: "USA" } },
    items: [{ product: "Keyboard", quantity: 1, price: 75 }],
  },
];

let res = orders.reduce((acc, order) => {
  let totalAmount = 0;

  order.items.forEach((item) => {
    totalAmount += item.quantity * item.price;
  });

  acc.push({
    orderId: order.orderId,
    customerName: order.customer.name,
    city: order.customer.location.city,
    totalAmount: totalAmount,
  });

  return acc;
}, []);

console.log(res);
