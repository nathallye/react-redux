import React from "react";

export default function Botoes(props) {
  return (
    <div>
      <button onClick={props.decrementar}>-</button>
      <button onClick={props.incrementar}>+</button>
    </div>  
  );
}