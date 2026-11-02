// components/AddToCartButton.jsx
"use client";

import { useCart } from '../context/CartContext';

export default function AddToCartButton({ product, className = "btn btn--primary btn--sm" }) {
  const { addToCart } = useCart();

  return (
    <button 
      onClick={() => addToCart(product)} 
      className={className}
    >
      В корзину
    </button>
  );
}