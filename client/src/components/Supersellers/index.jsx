// // SuperSellers.js

// import React from 'react';
// import Card from "react-bootstrap/Card";
// import './index.css'
// import superseller1 from "../../assets/pizza-images/01.png";
// import superseller2 from
// import superseller3 from

// function SuperSellers() {
//   const superSellersData = [
//     { id: 1, name: 'Super Seller 1', image: superseller1 },
//     { id: 2, name: 'Super Seller 2', image: superseller2 },
//     { id: 3, name: 'Super Seller 3', image: superseller3 },
    
//   ];

//   return (
// <div id="Supersellers">
//     <div className="super-sellers">
//       <h2>Super Sellers</h2>
//       <div>
//         {superSellersData.map((seller) => (
//           <Card key={seller.id}>
//             <Card.Img variant="top" src={seller.image} alt={seller.name} />
//             <Card.Body>
//               <Card.Title>{seller.name}</Card.Title>
//             </Card.Body>
//           </Card>
//         ))}
//       </div>
//     </div>
//     </div>

//   );
// };

// export default SuperSellers;

import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import superseller1 from "../../assets/pizza-images/01.png";
import superseller2 from "../../assets/pizza-images/02.png";
import superseller3 from "../../assets/pizza-images/03.png";

function GroupExample() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={superseller1} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src={superseller2} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src={superseller3} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>
  );
}

export default GroupExample;


