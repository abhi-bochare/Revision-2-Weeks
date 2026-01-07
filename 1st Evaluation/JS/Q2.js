const transactions = [
  { id: 1, category: "Food", amount: 45.5, date: "2024-01-15" },
  { id: 2, category: "Transport", amount: 20.0, date: "2024-01-16" },
  { id: 3, category: "Food", amount: 30.75, date: "2024-01-17" },
  { id: 4, category: "Entertainment", amount: 50.0, date: "2024-01-18" },
  { id: 5, category: "Food", amount: 25.25, date: "2024-01-19" },
  { id: 6, category: "Transport", amount: 15.5, date: "2024-01-20" },
];

function aggregateData(transactions) {
  let res = transactions.reduce((acc, txn) => {
    let { category, amount } = txn;

    if (!acc[category]) {
      acc[category] = {
        total: 0,
        count: 0,
        highest: amount,
        lowest: amount,
      };
    }

    acc[category].total += amount;
    acc[category].count += 1;
    acc[category].highest = Math.max(acc[category].highest, amount);
    acc[category].lowest = Math.min(acc[category].lowest, amount);

    acc[category].average = Number(
      (acc[category].total / acc[category].count).toFixed(2)
    );

    return acc;
  }, {});

  return res;
}

const result = aggregateData(transactions);
console.log(result);
