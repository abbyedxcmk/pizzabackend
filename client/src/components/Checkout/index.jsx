import React from 'react';
import moreIcon from '../../assets/icons/more.png';
import lessIcon from '../../assets/icons/less.png';

function Checkout() {
  return (
    <div className='container-fluid pe-5 py-5'>
      <div className='row pe-5'>
        <h2 className='display-5 mb-5 fw-bold'>Checkout</h2>
      </div>
      <div className='row pe-5 row-cols-1'>
        <div className="col my-3">
          <div className="card d-flex flex-row rounded-3 border border-3 border-dark">
            <div className="card-body p-4 pb-2 border-dark">
              <div className='d-flex mb-2 justify-content-between color-1 border-bottom border-1 border-light'>
                <p className="card-title fs-5 fw-bold pizza-size-checkout">SUBTOTAL</p>
                <p className="card-title fs-5 fw-bold pizza-size-checkout">£28.00</p>
              </div>
              <div className='d-flex mb-2 justify-content-between color-1 border-bottom border-1 border-light'>
                <p className="card-title fs-5 fw-bold pizza-size-checkout">DELIVERY FEE</p>
                <p className="card-title fs-5 fw-bold pizza-size-checkout">£2.50</p>
              </div>
              <div className='d-flex justify-content-between color-2'>
                <h3 className='fw-bold'>TOTAL</h3>
                <h3 className='fw-bold'>£45</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="col my-3">
          <div className="card d-flex flex-row rounded-3 border border-3 border-dark">
            <div className="card-body p-4 pb-2 border-dark">
              <h3 className='fw-bold mb-3'>BILLING ADDRESS</h3>
              <div className='d-flex gap-5 justify-content-between'>
                <div className='col d-flex flex-column'>
                  <label for="firstName" class="form-label fs-5 mt-3 color-1">First Name</label>
                  <input type="text" class="border border-3 border-dark form-control" id="firstName" placeholder="" value="" required></input>
                </div>
                <div className='col d-flex flex-column'>
                  <label for="lastName" class="form-label fs-5 mt-3 color-1">Last Name</label>
                  <input type="text" class="border border-3 border-dark form-control" id="lastName" placeholder="" value="" required></input>
                </div>
              </div>
              
              <div className='d-flex gap-5 my-2 justify-content-between'>
                <div className='col d-flex flex-column'>
                  <label for="email" class="form-label fs-5 mt-3 color-1">Email</label>
                  <input type="email" class="border border-3 border-dark form-control" id="email" placeholder="you@example.com" value="" required></input>
                </div>
                <div className='col d-flex flex-column'>
                  <label for="lastName" class="form-label fs-5 mt-3 color-1">Last Name</label>
                  <input type="text" class="border border-3 border-dark form-control" id="lastName" placeholder="" value="" required></input>
                </div>
              </div>

              <div className='d-flex gap-5 my-2 justify-content-between'>
                <div className='col d-flex flex-column'>
                  <label for="firstName" class="form-label fs-5 mt-3 color-1">First Name</label>
                  <input type="text" class="border border-3 border-dark form-control" id="firstName" placeholder="" value="" required></input>
                </div>
                <div className='col d-flex flex-column'>
                  <label for="lastName" class="form-label fs-5 mt-3 color-1">Last Name</label>
                  <input type="text" class="border border-3 border-dark form-control" id="lastName" placeholder="" value="" required></input>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Checkout;