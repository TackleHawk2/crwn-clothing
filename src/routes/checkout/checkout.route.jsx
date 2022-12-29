import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import CheckOutItem from '../../components/check-out-item/check-out-item.component';

import './checkout.styles.scss';

const CheckOutRoute = () => {
  const { cartItems, setCartVisible, cartTotal } = useContext(CartContext);
  setCartVisible(false);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total Cost: ${cartTotal}</span>
    </div>
  );
};

export default CheckOutRoute;
