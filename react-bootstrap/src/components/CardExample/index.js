import React from "react";
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";

const CardExample = ({cardName, cardImage,cardDescription}) => {
  return (
    <>
      <Card style={{ width: "18rem", float:'left', margin:10 }}>
        <Card.Img variant="top" src={cardImage} />
        <Card.Body>
          <Card.Title>{cardName}</Card.Title>
          <Card.Text>
            {cardDescription}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardExample;
