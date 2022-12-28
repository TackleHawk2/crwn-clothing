import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartContext } from '../../contexts/cart.context';

import './cart-icon.styles.scss';

const CartIcon = () => {
  const { cartVisible, setCartVisible, cartCount } = useContext(CartContext);

  const toggleIsCartVisible = () => setCartVisible(!cartVisible);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartVisible}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
