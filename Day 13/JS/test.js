const products = [
  ["Electronics", "Laptop", 999],
  ["Clothing", "Shirt", 29],
  ["Electronics", "Mouse", 25],
  ["Clothing", "Pants", 49],
  ["Electronics", "Keyboard", 75],
  ["Clothing", "Jacket", 89],
];

// let res = products.reduce((acc, item) => {
//   let category = item[0];
//   let name = item[1];
//   let price = item[2];

//   if (!acc[category]) {
//     acc[category] = [];
//   }

//   acc[category].push({ name, price });

//   return acc;
// }, {});

// for (let category in res) {
//   res[category].sort((a, b) => a.price - b.price);
// }
// console.log(res);

let res = {};

for (let i = 0; i < products.length; i++) {
  let category = products[i][0];
  let name = products[i][1];
  let price = products[i][2];

  if (!res[category]) {
    res[category] = [];
  }

  res[category].push({ name, price });
}

for (let category in res) {
  res[category].sort((a, b) => a.price - b.price);
}

console.log(res);
