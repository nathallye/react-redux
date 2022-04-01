import React from "react";

export default function Aleatorio(props) {
  const max = props.max
  const min = props.min
  // podemos substituir as duas linhas acima por uma, utilizando Atribuição via desestruturação (destructuring assignment)
  // const { min, max } = props; // min, max vão receber os valores que estão dentro do objeto props, na respectiva ordem

  const random = parseInt(Math.random() * (max - min) + min)

  // console.log(min, max)

  return (
    <div>
      <h2>Gerando um número aleatório entre { min } e { max }</h2>
      { random }
    </div>
  );
}