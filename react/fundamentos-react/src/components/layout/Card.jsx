import "./Card.css";
import React from "react";

export default function Card(props) {

  const cardStyle = {
    //background-color -> como estamos em um arquivo js ele não permine nome de variáveis com ifem, portando substituimos o item por camelCase
    backgroundColor: props.color || '#DB7093',
    borderColor: props.color || '#DB7093'
  }

  return (
    <div className="Card" style={cardStyle}>
      <div className="Title">{props.titulo}</div>
      <div className="Content">{props.children}</div>
    </div>
  );
}