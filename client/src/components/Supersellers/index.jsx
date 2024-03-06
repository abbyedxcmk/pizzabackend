import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import superseller1 from "../../assets/pizza-images/01.png";
import superseller2 from "../../assets/pizza-images/02.png";
import superseller3 from "../../assets/pizza-images/03.png";
import './index.css';

function GroupExample() {
  return (
    
    <CardGroup id="cards">
      <Card id="card1">
        <Card.Img variant="top" src={superseller1} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
      
      <Card id="card2">
        <Card.Img variant="top" src={superseller2} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
      </Card>

      <Card id="card3">
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


