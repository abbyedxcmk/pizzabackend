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
              <form>
                <h3 className='fw-bold mb-3'>BILLING ADDRESS</h3>
                <div className='d-flex gap-5 justify-content-between'>
                  <div className='col d-flex flex-column'>
                    <label for="firstName" className="form-label fs-5 mt-3 color-1">First Name</label>
                    <input type="text" className="border border-3 border-dark form-control" id="firstName" placeholder="" value="" required></input>
                  </div>
                  <div className='col d-flex flex-column'>
                    <label for="lastName" className="form-label fs-5 mt-3 color-1">Last Name</label>
                    <input type="text" className="border border-3 border-dark form-control" id="lastName" placeholder="" value="" required></input>
                  </div>
                </div>
                
                <div className='d-flex gap-5 my-2 justify-content-between'>
                  <div className='col d-flex flex-column'>
                    <label for="email" className="form-label fs-5 mt-3 color-1">Email</label>
                    <input type="email" className="border border-3 border-dark form-control" id="email" placeholder="you@example.com" value="" required></input>
                  </div>
                  <div className='col d-flex flex-column'>
                    <label for="address" className="form-label fs-5 mt-3 color-1">Address</label>
                    <input type="text" className="border border-3 border-dark form-control" id="address" placeholder="2024 Parliament Square" value="" required></input>
                  </div>
                </div>

                <div className='d-flex gap-5 my-2 justify-content-between'>
                  <div className='col d-flex flex-column'>
                    <label for="cityName" className="form-label fs-5 mt-3 color-1">City Name</label>
                    <input type="text" className="border border-3 border-dark form-control" id="cityName" placeholder="London" value="" required></input>
                  </div>
                  <div className='col d-flex flex-column'>
                    <label for="postcode" className="form-label fs-5 mt-3 color-1">Postcode</label>
                    <input type="text" className="border border-3 border-dark form-control" id="postcode" placeholder="" value="" required></input>
                  </div>
                </div>

                <div className='d-flex gap-5 my-2 justify-content-between'>
                  <div className='col d-flex flex-column'>
                    <p className='fs-5 p-2 mt-3 color-4 bg-color-3'>Delivery address is the same as billing address</p>
                  </div>
                </div>

                {/* <h3 className='fw-bold mb-3 color-2'>PAYMENT</h3>
                <div className='d-flex gap-5 justify-content-between'>
                  <div className='col-6 d-flex flex-column'>
                    <label for="cc-number" className="form-label fs-5 mt-3 color-1">Credit Card Number</label>
                    <input type="text" className="border border-3 border-dark form-control" id="cc-number" placeholder="0120 0230 0340 0540" value="" required></input>
                  </div>
                  <div className='col d-flex flex-column'>
                    <label for="cc-expiration" className="form-label fs-5 mt-3 color-1">Expiration</label>
                    <input type="text" className="border border-3 border-dark form-control" id="cc-expiration" placeholder="2030" value="" required></input>
                  </div>
                  <div className='col d-flex flex-column'>
                    <label for="cc-cvv" className="form-label fs-5 mt-3 color-1">CCV</label>
                    <input type="text" className="border border-3 border-dark form-control" id="cc-cvv" placeholder="123" value="" required></input>
                  </div>
                </div> */}
                <hr className="my-4"></hr>
                <button type="button" className="w-100 p-3 mb-4 btn btn-lg btn-paynow fw-bold">PAY NOW</button>
              </form>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Checkout;