const sales = [
  { month: "Jan", product: "A", amount: 100 },
  { month: "Jan", product: "B", amount: 150 },
  { month: "Feb", product: "A", amount: 120 },
  { month: "Feb", product: "B", amount: 180 },
  { month: "Mar", product: "A", amount: 110 },
  { month: "Mar", product: "B", amount: 160 },
];

function pivotSalesData(sales) {
  return sales.reduce((pivot, { month, product, amount }) => {
    if (!pivot[product]) {
      pivot[product] = { total: 0 };
    }

    pivot[product][month] = amount;
    pivot[product].total += amount;

    return pivot;
  }, {});
}

console.log(pivotSalesData(sales));
