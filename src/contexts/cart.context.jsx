import { createContext, useState } from 'react';

export const CartContext = createContext({
  cartVisible: false,
  setCartVisible: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartVisible, setCartVisible] = useState(false);
  const value = { cartVisible, setCartVisible };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
