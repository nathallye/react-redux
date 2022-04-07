import React from "react";

export default function IndiretaFilho(props) {
  return (
    <div>
      <div>Filho</div>
      <button onClick={
        function (e) {
          props.quandoClicar('João', 53, true)
        }
      }>
        Fornecer Informações
      </button>
    </div>
  );
}

