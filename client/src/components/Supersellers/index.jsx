// SuperSellers.js

import React from 'react';
import Card from "react-bootstrap/Card";
import './index.css'

function SuperSellers() {
  const superSellersData = [
    { id: 1, name: 'Super Seller 1', image: 'seller1.jpg' },
    { id: 2, name: 'Super Seller 2', image: 'seller2.jpg' },
    { id: 3, name: 'Super Seller 3', image: 'seller3.jpg' },
    
  ];

  return (
<div id="Supersellers">
    <div className="super-sellers">
      <h2>Super Sellers</h2>
      <div>
        {superSellersData.map((seller) => (
          <Card key={seller.id}>
            <Card.Img variant="top" src={seller.image} alt={seller.name} />
            <Card.Body>
              <Card.Title>{seller.name}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  </div>
  );
};

export default SuperSellers;

