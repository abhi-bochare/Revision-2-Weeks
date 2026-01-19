const products = [
  ["Electronics", "Laptop", 999],
  ["Clothing", "Shirt", 29],
  ["Electronics", "Mouse", 25],
  ["Clothing", "Pants", 49],
  ["Electronics", "Keyboard", 75],
  ["Clothing", "Jacket", 89],
];

// let result = {};

// for (let i = 0; i < products.length; i++) {
//   let category = products[i][0];
//   let name = products[i][1];
//   let price = products[i][2];

//   if (!result[category]) {
//     result[category] = [];
//   }

//   result[category].push({ name, price });
// }

// for (let category in result) {
//   result[category].sort((a, b) => a.price - b.price);
// }

// console.log(result);

let result = products.reduce((obj, item) => {
  let category = item[0];
  let name = item[1];
  let price = item[2];

  if (!obj[category]) {
    obj[category] = [];
  }

  obj[category].push({ name, price });

  return obj;
}, {});

for (let category in result) {
  result[category].sort((a, b) => a.price - b.price);
}

console.log(result);
