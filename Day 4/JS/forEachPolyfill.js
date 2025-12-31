Array.prototype.myForEach = function (callback, thisArgs) {
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      callback.call(thisArgs, this[i], i, this);
    }
  }
};

const nums = [1, 2, 3, 4, 5];
const result = [];
nums.myForEach((num, index) => {
  result.push(num * index);
});
console.log(result);
