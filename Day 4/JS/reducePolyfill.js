Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator;
  let startIndex;

  if (initialValue !== undefined) {
    accumulator = initialValue;
    startIndex = 0;
  } else {
    accumulator = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    if (i in this) {
      accumulator = callback(accumulator, this[i], i, this);
    }
  }

  return accumulator;
};

const nums = [1, 2, 3, 4, 5];
const sum = nums.myReduce((acc, curr) => acc + curr, 0);
console.log(sum);

const items = [
  { category: "fruit", name: "apple" },
  { category: "vegetable", name: "carrot" },
  { category: "fruit", name: "banana" },
];
const grouped = items.myReduce((acc, item) => {
  if (!acc[item.category]) acc[item.category] = [];
  acc[item.category].push(item.name);
  return acc;
}, {});
console.log(grouped);
