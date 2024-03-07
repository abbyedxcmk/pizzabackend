import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import superseller1 from "../../assets/pizza-images/01.png";
import superseller2 from "../../assets/pizza-images/02.png";
import superseller3 from "../../assets/pizza-images/03.png";
import './index.css';

function GroupExample() {
  return (

    <CardGroup id='Supersellers' className="cards">
      <Card id="card1">
        {/* <h1 id="supersellertitle">Our Supersellers...</h1> */}
        <Card.Img variant="top" src={superseller1} />
        <Card.Body>
          <Card.Title id="cardtitle1">Margherita</Card.Title>
          {/* <Card.Text id="cardtext">text</Card.Text> */}
        </Card.Body>
      </Card>
      
      <Card id="card2">
      <Card.Title id="cardtitle2">Fiorentina</Card.Title>
      {/* <Card.Text id="cardtext">text</Card.Text> */}
        <Card.Img variant="top" src={superseller2} />
        <Card.Body> 
        </Card.Body>
      </Card>

      <Card id="card3">
        <Card.Img variant="top" src={superseller3} />
        <Card.Body>
          <Card.Title id="cardtitle3">Diavola</Card.Title>
          {/* <Card.Text id="cardtext"> 
            text
          </Card.Text> */}
        </Card.Body>
        
      </Card>
    </CardGroup>

  );
}

export default GroupExample;


