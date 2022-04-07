import React, {useState} from "react";
import IndiretaFilho from "./IndirectChild";

export default function IndiretaPai(props) {

  let [nome, setNome] = useState('?'); //nome: é o próprio valor que inicializamos a variável; setNome: função que vamos utilizar para alterar o nome.
  let [idade, setIdade] = useState(0);
  let [nerd, setNerd] = useState(false);

  function fornecerInformacoes(texto, numero, bool) {
    setNome(texto);
    setIdade(numero);
    setNerd(bool);
    
    console.log(texto, numero, bool)
  }

  return (
    <div>
      <div>
        <div>Nome: {nome}</div>
        <div>Idade: {idade}</div>
        <div>Nerd: {nerd ? "Verdadeiro" : "Falso"}</div>
      </div>

      <IndiretaFilho quandoClicar={fornecerInformacoes}/>
    </div>
  );
}