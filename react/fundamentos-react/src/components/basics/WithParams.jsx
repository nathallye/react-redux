import React from "react";

export default function ComParametros(props) {
  // console.log(props);

  const status = props.nota >= 7 ? "Aprovado" : "em Recuperação"; // se a nota recebida for maior ou igual 7 o status será 'Aprovado' senão 'em Recuperação'

  return (
    <div>
      <h2>{ props.titulo }</h2>
      <p>
        <strong> { props.aluno } </strong>
        ficou com a nota final
        <strong> { props.nota } </strong>
        e está 
        <strong> { status }</strong>
      </p>
      
    </div>
  );
}