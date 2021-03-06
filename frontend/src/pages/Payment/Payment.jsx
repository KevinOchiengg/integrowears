import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { savePaymentMethod } from '../../actions/cartActions';
import Checkout from '../../components/Checkout/Checkout';

const Payment = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const history = useHistory();
  if (!shippingAddress.address) {
    history.push('/shipping');
  }
  const [paymentMethod, setPaymentMethod] = useState('PayPal');
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push('/placeorder');
  };
  return (
    <div>
      <Checkout step1 step2 step3></Checkout>
      <form className='form' onSubmit={submitHandler}>
        <div>
          <h1>Payment Method</h1>
        </div>
        <div>
          <div>
            <input
              type='radio'
              id='paypal'
              value='PayPal'
              name='paymentMethod'
              required
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor='paypal'>PayPal</label>
          </div>
        </div>
        <div>
          <div>
            <input
              type='radio'
              id='stripe'
              value='Stripe'
              name='paymentMethod'
              required
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor='stripe'>Stripe</label>
          </div>
        </div>
        <div>
          <label />
          <button className='primary' type='submit'>
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};
export default Payment;
