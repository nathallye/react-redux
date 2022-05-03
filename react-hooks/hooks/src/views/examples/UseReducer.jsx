import React, { useReducer } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const initialState = {
  cart: [],
  products: [],
  user: null,
  number: 0
}

function reducer(state, action) {
  switch(action.type) {
    case "add2ToNumber":
      return { ...state, number: state.number + 2 };
    case "login":
      return { ...state, user: { name: action.name, email: "nathallyet@gmail.com" } }
    //exercício #02
    case "multFor7Number":
      return { ...state, number: state.number * 7 };
    case "divFor25Number":
      return { ...state, number: state.number / 25 };
    case "parseIntNumber":
      return { ...state, number: parseInt(state.number) }
    case "addAnyToNumber":
      return { ...state, number: state.number + action.n }
    default:
      return state;
  }
}

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />

      <SectionTitle title="Exercício #01"/>
      <div className="center">
        {state.user ? 
          <span className="text">{state.user.name}</span>
          : <span className="text">Sem usuário</span> 
        }

        <span className="text">{state.number}</span>
        <div>
          <button className="btn"
            onClick={() => dispatch({ type: "login", name: "Nathallye Tabaresu" })}>Login</button> {/*Normalmente é usado o termo payload*/}
          <button className="btn" 
            onClick={() => dispatch({ type: "add2ToNumber" })}>+2</button>
        </div>
      </div>

      <SectionTitle title="Exercício #02"/>
      <div className="center">
        <div>
          <button className="btn"
            onClick={() => dispatch({ type: "multFor7Number" })}>x7</button>
          <button className="btn"
            onClick={() => dispatch({ type: "divFor25Number" })}>÷25</button>
          <button className="btn"
            onClick={() => dispatch({ type: "parseIntNumber" })}>Converter para inteiro</button>
          <button className="btn"
            onClick={() => dispatch({ type: "addAnyToNumber", n: 5 })}>+5</button>
          <button className="btn"
            onClick={() => dispatch({ type: "addAnyToNumber", n: -5 })}>-5</button>
        </div>
      </div>

    </div>
  )
}

export default UseReducer;