import React from 'react';
import moreIcon from '../../assets/icons/more.png';
import lessIcon from '../../assets/icons/less.png';

function Order({ orderItems }) {
  return (
    <div className='container-fluid ps-5 py-5'>
      <div className='row ps-5'>
        <h2 className='display-5 mb-5 fw-bold'>Your Order</h2>
      </div>
      <div className='row ps-5 row-cols-1'>
        {orderItems.map((pizza, index) => (
        <div className="col my-3" key={index}>
          <div className="card d-flex flex-row rounded-3 border border-3 border-dark">
            <div className="card-header border-end border-3 border-dark p-4">
              <img src='https://github.com/abbyedxcmk/pizzabackend/blob/main/client/src/assets/pizza-images/08.png?raw=true' className='img-fluid' width={120} alt='' />
            </div>
            <div className="card-body p-4 pb-2 border-dark">
              <div className='d-flex text-start justify-content-between align-items-start'>
                <div className=''>
                  <h3 className='fw-bold color-2'>{pizza.productName}</h3>
                  <p className="card-title fs-6 fw-bold pizza-size-checkout color-2">SIZE: <span className='color-1'>X</span></p>
                </div>
                <div className='d-flex gap-5'>
                  <div className='d-flex gap-3'>
                    <p className="card-title fs-5 fw-bold pizza-size-checkout color-2">QTY: <span className='color-1'>1</span></p>
                    <a href=""><img src={moreIcon} alt="" /></a>
                    <a href=""><img src={lessIcon} alt="" /></a>
                  </div>
                </div>
              </div>
              <div className='d-flex justify-content-between text-start'>
                <p className='fs-5 mt-3 color-1'>{pizza.ingredients.join(', ')}</p>
                <h3 className='fs-1 fw-bold color-1'>£{pizza.price}</h3>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Order;