import React from "react";
import DiretaFilho from "./DirectChild";

export default function DiretaPai(props) {
  return (
    <div>
      <DiretaFilho texto="Filho 1" numero={20} bool={true}/>
      <br />
      <DiretaFilho texto="Filho 2" numero={30} bool={false}/>
    </div>
  );
}