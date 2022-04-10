import "./App.css"
import React from "react";

import Card from "./components/layout/Card";

import Primeiro from "./components/basics/First";
import ComParametros from "./components/basics/WithParams";
import Fragmento from "./components/basics/Fragment";
import Aleatorio from "./components/basics/GetRandom";
import Familia from "./components/basics/Family";
import MembroFamilia from "./components/basics/FamilyMember"
import ListaAlunos from "./components/repetition/ListStudents";
import TabelaProdutos from "./components/repetition/TableProduts";
import ParOuImpar from "./components/conditional/EvenOrOdd";
import UsuarioInfo from "./components/conditional/UserInfo";
import DiretaPai from "./components/communication/DirectFather"
import IndiretaPai from "./components/communication/IndirectFather";
import Input from "./components/form/Input";
import Contador from "./components/counter/Counter";
import Mega from "./components/mega/Mega";

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

        <Card titulo="#05 - Componente com Filhos" color="#86BAAB">
          <Familia sobrenome="Ferraz">
            <MembroFamilia nome="Nathallye" />
            <MembroFamilia nome="Paulo" />
            <MembroFamilia nome="Maria" />
          </Familia>
        </Card>

        <Card titulo="#06 - Repetição" color="#00804E">
          <ListaAlunos/>
        </Card>

        <Card titulo="#07 - Desafio Repetição" color="#CCCC79">
          <TabelaProdutos/>
        </Card>

        <Card titulo="#08 - Renderização condicional" color="#006400">
          <ParOuImpar numero={20}/>
          <UsuarioInfo usuario={{ nome: 'Fernando' }}/> {/*o primeiro par de chaves"{}" é para ter um trecho que vai ser interpretado com javascript; se queremos criar um objeto de forma literal temos que colocar um outro par de chaves, dentro.*/}
          <UsuarioInfo usuario={{ email: 'fer@nando.com' }}/>
          <UsuarioInfo usuario={{}}/>
          <UsuarioInfo/>
        </Card>

        <Card titulo="#09 - Comunicação Direta" color="#C2A886">
          <DiretaPai/>
        </Card>

        <Card titulo="#10 - Comunicação Indireta" color="#4F4537">
          <IndiretaPai/>
        </Card>

        <Card titulo="#11 - Componente Controlado" color="#FE3D56">
          <Input/>
        </Card>

        <Card titulo="#12 - Componente de Classe - Contador" color="#670513">
          <Contador numeroInicial={10}/>
        </Card>

        <Card titulo="#13 - Desafio Mega Sena" color="#A2A3BA">
          <Mega quantidade={8}></Mega>
        </Card>
      </div>
    </div>
  );
}