function deepClone(value, seen = new WeakMap()) {
  if (value === null || typeof value !== "object") {
    return value;
  }

  if (seen.has(value)) {
    return seen.get(value);
  }

  const clone = Array.isArray(value) ? [] : {};

  seen.set(value, clone);

  for (let key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      clone[key] = deepClone(value[key], seen);
    }
  }

  return clone;
}

const obj = {
  name: "John",
  address: {
    city: "NYC",
    coords: { lat: 40, lng: -74 },
  },
  hobbies: ["reading", "gaming"],
};

obj.self = obj;
const clonedObj = deepClone(obj);
