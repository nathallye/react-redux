import React, { useState } from "react";

export default function Input(props) {
  
  const [valor, setValor] = useState('Inicial')

  function quandoMudar(e) {
    setValor(e.target.value);
    // console.log(e.target.value); //target = alvo; value = valor.
  }

  return (
    <div>
      <h2>{valor}</h2>
      <input value={valor} onChange={quandoMudar}/>
    </div>
  );
}