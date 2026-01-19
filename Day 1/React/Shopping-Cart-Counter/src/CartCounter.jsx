import { useState } from "react";

const UNIT_PRICE = 29.99;

export default function CartCounter() {
  const [quantity, setQuantity] = useState(1);

  const hasDiscount = quantity >= 5;
  const subtotal = quantity * UNIT_PRICE;
  const discount = hasDiscount ? subtotal * 0.1 : 0;
  const total = subtotal - discount;

  return (
    <div>
      <h3>Product</h3>

      <p>Unit Price: ${UNIT_PRICE.toFixed(2)}</p>

      <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>-</button>
      <span> {quantity} </span>
      <button onClick={() => setQuantity((q) => q + 1)}>+</button>

      {hasDiscount && <p>10% Bulk Discount Applied</p>}

      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      {hasDiscount && <p>Discount: -${discount.toFixed(2)}</p>}
      <strong>Total: ${total.toFixed(2)}</strong>
    </div>
  );
}
