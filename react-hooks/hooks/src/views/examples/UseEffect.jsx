import React, { useEffect, useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

// Exercício #01
function calcFactorial(num) {
  const n = parseInt(num);
  if(n < 0) return -1;
  if(n === 0) return 1;
  return calcFactorial(n - 1) * n;
}

// Exercício #02
function statusNumber(n) {
  if(n < 0) return -1;
  if(n % 2 === 0) return "Par";
  if(n % 2 !== 0) return "Ímpar";
}

const UseEffect = (props) => {
  
  // Exercício #01
  const [number, setNumber] = useState(1);
  const [factorial, setFactorial] = useState(1);

  useEffect(function() {
    setFactorial(calcFactorial(number));
  }, [number])

  // Exercício #02
  const [status, setStatus] = useState("Ímpar");

  useEffect(function() {
    setStatus(statusNumber(number));
  }, [number])

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">{factorial === -1 ? "Não existe" : factorial}</span>
        </div>

        <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)} />
      </div>

      <SectionTitle title="Exercício #02" />
      <div className="center">
        <div>
          <span className="text">Status: </span>
          <span className="text red">{status === -1 ? "Não existe" : status}</span>
        </div>
      </div>

    </div>
  )
}

export default UseEffect;