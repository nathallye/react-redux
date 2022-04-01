import "./App.css"
import React from "react";

import Primeiro from "./components/basics/First";
import ComParametros from "./components/basics/WithParams";
import Fragmento from "./components/basics/Fragment";
import Aleatorio from "./components/basics/GetRandom";
import Card from "./components/layout/Card";

export default function App(props) {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">
        <Card titulo="#01 - Primeiro Componente" color="#B79CB2">
          <Primeiro/>
        </Card>

        <Card titulo="#02 - Componente com Propriedade" color="#6D3864">
          <ComParametros
            titulo="Situação do aluno:"
            aluno="João"
            nota={9.2}
          />
          <ComParametros
            titulo="Situação da aluna:"
            aluno="Maria"
            nota={5.8}
          />
        </Card>

        <Card titulo="#03 - React Fragment" color="#EDB8C9">
          <Fragmento />
        </Card>


        <Card titulo="#04 - Desafio Número Aleatório" color="#DB7093">
          <Aleatorio
            min={1} 
            max={60}
          />
        </Card>
      </div>
    </div>
  );
}