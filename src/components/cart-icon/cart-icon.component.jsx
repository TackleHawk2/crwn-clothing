import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import { ShoppingIcon, IconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
  const { cartVisible, setCartVisible, cartCount } = useContext(CartContext);

  const toggleIsCartVisible = () => setCartVisible(!cartVisible);

  return (
    <IconContainer onClick={toggleIsCartVisible}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </IconContainer>
  );
};

export default CartIcon;
