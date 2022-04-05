import "./ListStudents.css"

import React from "react";
import alunos from "../../data/students";

export default function ListaAlunos(props) {

  const listaAlunos = alunos.map((aluno) => { // constante recebe um map que percorre cada aluno do array de alunos e retorna em lista(dentro da tag li)
    return (
      <li key={aluno.id}> 
        {aluno.id}) {aluno.nome} : {aluno.nota}
      </li>
    )
  });

  return (
    <div>
      <ul>
        {listaAlunos}
      </ul>
    </div>
  );
}