import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartCount,
  selectCartVisible,
} from '../../store/cart/cart.selector';
import { setCartVisible } from '../../store/cart/cart.action.js';

import { ShoppingIcon, IconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  const cartVisible = useSelector(selectCartVisible);

  const toggleIsCartVisible = () => dispatch(setCartVisible(!cartVisible));

  return (
    <IconContainer onClick={toggleIsCartVisible}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </IconContainer>
  );
};

export default CartIcon;
