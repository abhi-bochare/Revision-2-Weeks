const transactions = [
  {
    date: "2024-01-15",
    category: "Food",
    items: [
      { name: "Groceries", amount: 50 },
      { name: "Restaurant", amount: 75 },
    ],
  },
  {
    date: "2024-01-16",
    category: "Transport",
    items: [
      { name: "Gas", amount: 40 },
      { name: "Parking", amount: 10 },
    ],
  },
  {
    date: "2024-01-17",
    category: "Food",
    items: [{ name: "Coffee", amount: 5 }],
  },
];

function aggregateTransactions(transactions) {
  return transactions.reduce((acc, { category, items }) => {
    if (!acc[category]) {
      acc[category] = { total: 0, count: 0 };
    }

    for (const item of items) {
      acc[category].total += item.amount;
      acc[category].count += 1;
    }

    return acc;
  }, {});
}

console.log(aggregateTransactions(transactions));
