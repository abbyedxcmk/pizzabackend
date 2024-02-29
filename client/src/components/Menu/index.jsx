import React from 'react';

function Menu() {
  return (
    <div className='container-fluid p-5'>
      <div className='row '>
        <h2 className='display-5 mb-5 fw-bold'>Explore Our Menu</h2>
      </div>
      <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4'>
        <div class="col">
          <div class="card rounded-3 border border-3 border-dark">
            <div class="card-header border-bottom border-3 border-dark p-4">
              <img src="https://github.com/abbyedxcmk/pizzabackend/blob/main/client/src/assets/pizza-images/01.png?raw=true" className='img-fluid' alt="" max-width={400} height={400} />
              <button type="button" class="w-100 p-3 btn btn-lg btn-outline-dark fw-bold">QUICK ADD</button>
            </div>
            <div class="card-body p-4 pb-2">
              <div className='d-flex justify-content-between align-items-center'>
                <p class="card-title fs-1 fw-bold pricing-card-title">£14</p>
                <div className='d-flex gap-3'>
                  <p class="card-title fs-6 fw-bold pricing-card-title">SMALL</p>
                  <p class="card-title fs-6 fw-bold pricing-card-title">LARGE</p>
                </div>
              </div>
              <div className='text-center'>
                <h3 className='fw-bold'>MARGHERITA</h3>
                <p className='fs-5 mt-3'>Tomato Sauce, Fior di Latte Mozzarella, extra virgin olive oil & fresh basil</p>
              </div>
            </div>
          </div>
          
        </div>

        

      </div>
    </div>
  );
};

export default Menu;