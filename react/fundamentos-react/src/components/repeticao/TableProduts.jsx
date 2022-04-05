import "./TableProduts.css"

import React from "react";
import produtos from "../../data/produts"

export default function TabelaProdutos(props) {

  const listaProdutos = produtos.map((produto) => {
      return (
        <tr key={produto.id}>
          <td>{produto.id})</td>
          <td>{produto.descricao}</td>
          <td>R$ {produto.preco.toFixed(2).replace(".", ",")}</td>
        </tr>
      )
  });
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        
        <tbody>
          {listaProdutos}
        </tbody>
      </table>
    </div>
  )
}