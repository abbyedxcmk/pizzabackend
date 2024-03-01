import React from 'react';

function Checkout() {
  return (
    <div className='container-fluid pe-5 py-5 bg-danger'>
      <div className='row pe-5'>
        <h2 className='display-5 mb-5 fw-bold'>Checkout</h2>
      </div>
      <div className='row pe-5 row-cols-1'>
        <div className="col my-3 bg-warning">
          <h3>LEFT</h3>
        </div>
      </div>
    </div>
  );
};

export default Checkout;