import './index.css';
import ReactDOM from 'react-dom';
import React from 'react';

import Primeiro from './components/basics/First';
import ComParametros from './components/basics/WithParams';

const elDivBody = document.getElementById('root');

ReactDOM.render(
  <div>
    <Primeiro/>
    <ComParametros
      titulo='Situação do aluno:'
      aluno='João'
      nota={9.2}/>
    <ComParametros
      titulo='Situação da aluna:'
      aluno='Maria'
      nota={5.8}/>
  </div>,
  elDivBody
);