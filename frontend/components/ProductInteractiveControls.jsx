// components/ProductInteractiveControls.jsx
"use client";

import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function ProductInteractiveControls({ product }) {
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product, qty);
    // Убрали alert!
  };

  return (
    <div className="product__buy">
      <div className="qty">
        <button type="button" className="qty__btn" onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
        <input className="qty__input" type="number" value={qty} readOnly />
        <button type="button" className="qty__btn" onClick={() => setQty(qty + 1)}>+</button>
      </div>
      <button type="button" className="btn btn--primary btn--lg" onClick={handleAdd}>
        В корзину
      </button>
    </div>
  );
}