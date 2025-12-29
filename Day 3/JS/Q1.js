Array.prototype.myMap = function (callback) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(callback(this[i], i, this));
  }

  return res;
};

const nums = [1, 2, 3, 4, 5];
const doubled = nums.myMap((x) => x * 2);
console.log(doubled);

const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
];
const names = users.myMap((u) => u.name);
console.log(names);
