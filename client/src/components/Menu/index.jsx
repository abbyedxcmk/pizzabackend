import React, { useState, useEffect } from "react";
import pizzasData from "../../pizzas.json";
import axios from "axios";

function Menu() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    //get data from server
    axios.get("/api/inventory").then((response) => {
      setPizzas(response.data);
    });
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="container-fluid p-5">
      <div className="row px-5">
        <h2 className="display-5 mb-5 fw-bold">Explore Our Menu</h2>
      </div>
      <div className="row px-5 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
        {pizzas.map((pizza) => (
          <div className="col my-3" key={pizza.id}>
            <div className="card rounded-3 border border-3 border-dark">
              <div className="card-header border-bottom border-3 border-dark p-4">
                <img
                  src={pizza.imageUrl}
                  className="img-fluid"
                  alt={pizza.productName}
                />{" "}
                {/* Add alt text */}
                <button
                  type="button"
                  className="w-100 p-3 btn btn-lg btn-outline-dark fw-bold"
                >
                  QUICK ADD
                </button>
              </div>
              <div className="card-body p-4 pb-2 bg-color-1">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="card-title fs-1 fw-bold pricing-card-title color-4">
                    £{pizza.smPrice}
                  </p>
                  <div className="d-flex gap-3">
                    <p className="card-title fs-6 fw-bold pizza-size">SMALL</p>
                    <p className="card-title fs-6 fw-bold pizza-size">LARGE</p>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="fw-bold color-2">{pizza.productName}</h3>
                  <p className="fs-5 mt-3 px-0 px-lg-3 color-4">
                    {pizza.ingredients.join(", ")}
                  </p>{" "}
                  {/* Display ingredients */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
