import React from "react";
import Card from "react-bootstrap/Card";

import "./HomeCard.scss";

function HomeCard({ image, title, children }) {
  return (
    <Card className="home-card">
      <Card.Img src={image} alt={title} />
      <Card.ImgOverlay>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{children}</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default HomeCard;
