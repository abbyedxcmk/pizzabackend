import React from 'react';
import Order from '../Order'
import Checkout from '../Checkout'

function OrderCheckout() {
  return (
    <div className='d-flex flex-column flex-lg-row gap-3'>
      <Order />
      <Checkout />
    </div>
  );
};

export default OrderCheckout;