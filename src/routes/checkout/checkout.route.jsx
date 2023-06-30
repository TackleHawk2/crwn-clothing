import { useSelector } from 'react-redux';
import PaymentForm from '../../components/payment-form/payment-form.components';

import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';

import CheckOutItem from '../../components/check-out-item/check-out-item.component';

import './checkout.styles.scss';
import { setCartVisible } from '../../store/cart/cart.action';

const CheckOutRoute = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
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
      <PaymentForm />
    </div>
  );
};

export default CheckOutRoute;
