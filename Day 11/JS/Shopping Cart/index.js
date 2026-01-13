const products = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Mouse", price: 25 },
  { id: 3, name: "Keyboard", price: 75 },
  { id: 4, name: "Monitor", price: 299 },
];

const cart = {};

const productsDiv = document.getElementById("products");
const cartDiv = document.getElementById("cart");
const summaryDiv = document.getElementById("summary");

function renderProducts() {
  productsDiv.innerHTML = "";
  products.forEach((p) => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      ${p.name} - Rs.${p.price}
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    productsDiv.appendChild(div);
  });
}

function addToCart(id) {
  cart[id] = cart[id]
    ? { ...cart[id], qty: cart[id].qty + 1 }
    : { ...products.find((p) => p.id === id), qty: 1 };

  renderCart();
}

function updateQty(id, change) {
  cart[id].qty += change;
  if (cart[id].qty <= 0) delete cart[id];
  renderCart();
}

function removeItem(id) {
  delete cart[id];
  renderCart();
}

function renderCart() {
  cartDiv.innerHTML = "";
  let subtotal = 0;

  Object.values(cart).forEach((item) => {
    subtotal += item.price * item.qty;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      ${item.name} (Rs.${item.price}) × ${item.qty}
      <button onclick="updateQty(${item.id}, 1)">+</button>
      <button onclick="updateQty(${item.id}, -1)">-</button>
      <button onclick="removeItem(${item.id})">Remove</button>
    `;
    cartDiv.appendChild(div);
  });

  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  summaryDiv.innerHTML = `
    Subtotal: Rs.${subtotal.toFixed(2)} <br>
    Tax (10%): Rs.${tax.toFixed(2)} <br>
    <b>Total: Rs.${total.toFixed(2)}</b>
  `;
}

renderProducts();
