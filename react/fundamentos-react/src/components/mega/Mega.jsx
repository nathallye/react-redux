import "./Mega.css"

import React, { useState } from "react";

export default function Mega(props) {

  function gerarNumeroNaoContido(min, max, array) {
    const numeroAleatorio = parseInt(Math.random() * (max - min + 1)) + min; // + 1  inclui, tanto o mínimo quanto o máximo nos resultados
  
    return array.includes(numeroAleatorio) ? 
      gerarNumeroNaoContido(min, max, array) : // caso o array possua/inclua(indludes) o numero gerado o numero aleatorio vai ser gerado novamente, portanto a função gerarNumeroNaoContido vai ser chamada novamente para ele gerar um novo número
      numeroAleatorio // caso contrario o a função vai retornar o número aleatório
  
      // como é uma chamada recursiva precisamos dessa condição de parada, que nesse caso é o retorno do numeroAleatorio
  }
  
  function gerarNumeros(quantidade) {
    const arrayNumeros = Array(quantidade)
      .fill(0) // para preencher esse array inicalmente com zeros
      .reduce((nums) => { // ele vai receber o acumulador(nums), que nada mais que que o novo array que vai ser gerado e todos os elementos desse array atual que só contem zeros
        const novoNumero = gerarNumeroNaoContido(1, 60, nums);
  
        console.log([...nums, novoNumero]);
        return [...nums, novoNumero]; // vai returnar um array que vai conter todos os nums gerados anteriormente e mais o novo novoNumero que acabamos de gerar (vai acumulando)
  
      }, []) // vamos passar um array vazio inicial 
      .sort((n1, n2) => n1 - n2) // para ordenar os numeros
  
    return arrayNumeros;
  }

  const [quantidadeNumeros, setQuantidadeNumeros] = useState(props.quantidade || 6)
  const arrayNumerosIniciais = Array(quantidadeNumeros).fill(0) // vai gerar um array c/ o numero de posições passado via props pela quantidade, senão passar nada vai ser 6, e o fill preenche tudo com zeros
  const [numeros, setNumeros] = useState(arrayNumerosIniciais)

  return (
    <div className="MegaSena">
      <h2>Mega</h2>
      <h3>{numeros.join(' ')}</h3>

      <div>
        <label>Quant. de Números: </label>
        <input type="number" value={quantidadeNumeros} 
          onChange={e => setQuantidadeNumeros(+e.target.value)}/>
      </div>

      <button onClick={_ => setNumeros(gerarNumeros(quantidadeNumeros))}>
        Gerar Números
      </button>
    </div>
  )
}