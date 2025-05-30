import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        const newQuantity = Math.min(existing.quantity + quantity, 9);
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: newQuantity } : item
        );
      } else {
        return [...prev, { ...product, quantity: Math.min(quantity, 9) }];
      }
    });
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart}}>
      {children}
    </CartContext.Provider>
  );
}

