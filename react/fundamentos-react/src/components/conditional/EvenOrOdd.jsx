import React from "react";

export default function ParOuImpar(props) {
  const isPar = props.numero % 2 === 0;

  return (
    <div>
      { props.numero }
      { isPar ? <span>  é Par</span> : <span> é Ímpar</span>}
    </div>
  )
}