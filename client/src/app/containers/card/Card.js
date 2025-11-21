import React from "react";
import "./Card.scss";

function Card(props) {
  return <div className='card-box-shadow'>{props.children}</div>;
}

export default Card;
