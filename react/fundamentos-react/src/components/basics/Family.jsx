import React from "react";
import MembroFamilia from "./FamilyMember";

export default function Familia(props) {
  
  return (
    <div>
      <MembroFamilia nome="Nathallye" sobrenome={props.sobrenome} />
      <MembroFamilia nome="Paulo" sobrenome={props.sobrenome} />
      <MembroFamilia nome="Maria" sobrenome={props.sobrenome} />
    </div>
  );
}