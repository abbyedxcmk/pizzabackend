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
    <>
      <h1 id="Supersellers">Supersellers</h1>
    </>
  );
};

export default SuperSellers;

