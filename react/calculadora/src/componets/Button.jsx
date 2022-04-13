import React from "react";

import "./Button.css";

export default function Button(props) {
  return (
    // dentro de uma tamplate string temos que usar o "$" e chaves{} para interpolar uma variálvel
    <button onClick={e => props.click && props.click(props.label)} className={` 
      button
      ${props.double ? 'double' : ''}
      ${props.triple ? 'triple' : ''}
      ${props.operation ? 'operation' : ''} 
    `}>
      {props.label}
    </button>
  )
}

