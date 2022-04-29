import React, { useCallback, useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";
import UseCallbackButtons from "../examples/UseCallbackButtons"

const UseCallback = (props) => {
  const [count, setCount] = useState(0);

  const inc = useCallback(function (delta) {
    setCount(curr => curr + delta)
  }, [setCount])

  return (
    <div className="UseCallback">
      <PageTitle
        title="Hook UseCallback"
        subtitle="Retorna uma função memoizada!"
      />

      <SectionTitle title="#Exercício"/>
      <div className="center">
        <span className="text">{count}</span>
        <br />

        <UseCallbackButtons inc={inc}/>
      </div>
    </div>
  )
}

export default UseCallback;