import React from "react";

export default function MembroFamilia(props) {
  // console.log(props)
  return (
    <div>
      {props.nome} <strong>{props.sobrenome}</strong>
    </div>
  );
}