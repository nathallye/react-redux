import React, { cloneElement } from "react";

export default function Familia(props) {
  // console.log(props)
  return (
    <div>
      {
        props.children.map((child, i) => { // recebemos a lista de todos os filhos epara cada filho vamos chamar a função que recebe cada um dos filhos
          return cloneElement(child, { ...props, key: i }); // e essa função retorna para cada item o clone do elemetro filho(nomes) e passa as propriedades que foi enviada pelo elemento pai(sobrenome) para o elemento clonado
        })
      }
    </div>
  );
}