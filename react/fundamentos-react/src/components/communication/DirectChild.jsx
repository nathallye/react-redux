import React from "react";

export default function DiretaFilho(props) {
  return (
    <div>
      <div>Texto: <strong>{props.texto}</strong></div>
      <div>Número: <strong>{props.numero}</strong></div>
      <div>Booleano: <strong>{props.bool ? "Verdadeiro" : "Falso"}</strong></div>
    </div>
  );
}
