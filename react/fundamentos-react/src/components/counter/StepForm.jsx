import React from "react";

export default function PassoForm(props) {
  return (
    <div>
      <label htmlFor="passoInput">Passo: </label>
      <input 
        type="number" 
        value={props.passoForm} 
        id="passoInput"
        onChange={e => props.setPassoForm(+e.target.value)} // "+" na frente para converter para int
      />
    </div>
  );
}