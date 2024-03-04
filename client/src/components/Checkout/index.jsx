import React, { useState } from 'react';
import customersData from '../../customersData.json';
import moreIcon from '../../assets/icons/more.png';
import lessIcon from '../../assets/icons/less.png';

function Checkout({ subtotal, total }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    cityName: '',
    postcode: '',
    ccNumber: '',
    ccExpiration: '',
    ccCode: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Find the corresponding data in the JSON file
    const matchingData = customersData.find(item => (
      item.firstName === formData.firstName &&
      item.lastName === formData.lastName &&
      item.email === formData.email &&
      item.address === formData.address &&
      item.cityName === formData.cityName &&
      item.postcode === formData.postcode &&
      item.ccNumber === formData.ccNumber &&
      item.ccExpiration === formData.ccExpiration &&
      item.ccCode === formData.ccCode
    ));

    // If data matches, display an alert
    if (matchingData) {
      alert('The data is correct!');
    } else {
      alert('The data is incorrect.');
    }
  };

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
                <p className="card-title fs-5 fw-bold pizza-size-checkout">£{subtotal}</p>
              </div>
              <div className='d-flex mb-2 justify-content-between color-1 border-bottom border-1 border-light'>
                <p className="card-title fs-5 fw-bold pizza-size-checkout">DELIVERY FEE</p>
                <p className="card-title fs-5 fw-bold pizza-size-checkout">£2.50</p>
              </div>
              <div className='d-flex justify-content-between color-2'>
                <h3 className='fw-bold'>TOTAL</h3>
                <h3 className='fw-bold'>£{total}</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="col my-3">
          <div className="card d-flex flex-row rounded-3 border border-3 border-dark">
            <div className="card-body p-4 pb-2 border-dark">
              <form onSubmit={handleSubmit}>
                <h3 className='fw-bold mb-3'>BILLING ADDRESS</h3>
                <div className='d-flex gap-5 justify-content-between'>
                  <div className='col d-flex flex-column'>
                    <label for="firstName" className="form-label fs-5 mt-3 color-1">First Name</label>
                    <input type="text" className="border border-3 border-dark form-control" id="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="" required></input>
                  </div>
                  <div className='col d-flex flex-column'>
                    <label for="lastName" className="form-label fs-5 mt-3 color-1">Last Name</label>
                    <input type="text" className="border border-3 border-dark form-control" id="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="" required></input>
                  </div>
                </div>
                
                <div className='d-flex gap-5 my-2 justify-content-between'>
                  <div className='col d-flex flex-column'>
                    <label for="email" className="form-label fs-5 mt-3 color-1">Email</label>
                    <input type="email" className="border border-3 border-dark form-control" id="email" value={formData.email} onChange={handleInputChange} placeholder="you@example.com" required></input>
                  </div>
                  <div className='col d-flex flex-column'>
                    <label for="address" className="form-label fs-5 mt-3 color-1">Address</label>
                    <input type="text" className="border border-3 border-dark form-control" id="address" value={formData.address} onChange={handleInputChange} placeholder="2024 Parliament Square" required></input>
                  </div>
                </div>

                <div className='d-flex gap-5 my-2 justify-content-between'>
                  <div className='col d-flex flex-column'>
                    <label for="cityName" className="form-label fs-5 mt-3 color-1">City Name</label>
                    <input type="text" className="border border-3 border-dark form-control" id="cityName" value={formData.cityName} onChange={handleInputChange} placeholder="London" required></input>
                  </div>
                  <div className='col d-flex flex-column'>
                    <label for="postcode" className="form-label fs-5 mt-3 color-1">Postcode</label>
                    <input type="text" className="border border-3 border-dark form-control" id="postcode" value={formData.postcode} onChange={handleInputChange} placeholder="" required></input>
                  </div>
                </div>

                <div className='d-flex gap-5 my-2 justify-content-between'>
                  <div className='col d-flex flex-column'>
                    <p className='fs-5 p-2 mt-3 color-4 bg-color-3'>Delivery address is the same as billing address</p>
                  </div>
                </div>

                <h3 className='fw-bold mb-3 color-2'>PAYMENT</h3>
                <div className='d-flex gap-5 justify-content-between'>
                  <div className='col-6 d-flex flex-column'>
                    <label for="ccNumber" className="form-label fs-5 mt-3 color-1">Credit Card Number</label>
                    <input type="text" className="border border-3 border-dark form-control" id="ccNumber" value={formData.ccNumber} onChange={handleInputChange} placeholder="0120 0230 0340 0540" required></input>
                  </div>
                  <div className='col d-flex flex-column'>
                    <label for="ccExpiration" className="form-label fs-5 mt-3 color-1">Expiration</label>
                    <input type="text" className="border border-3 border-dark form-control" id="ccExpiration" value={formData.ccExpiration} onChange={handleInputChange} placeholder="2030" required></input>
                  </div>
                  <div className='col d-flex flex-column'>
                    <label for="ccCode" className="form-label fs-5 mt-3 color-1">CCV</label>
                    <input type="text" className="border border-3 border-dark form-control" id="ccCode" value={formData.ccCode} onChange={handleInputChange} placeholder="123" required></input>
                  </div>
                </div>
                <hr className="my-4"></hr>
                <button id='payNow' type="submit" className="w-100 p-3 mb-4 btn btn-lg btn-paynow fw-bold" >PAY NOW</button>
              </form>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Checkout;