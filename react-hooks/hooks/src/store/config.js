import { add2ToNumber } from "./actions/number";

export const initialState = {
  cart: [],
  products: [],
  user: null,
  number: 0
}

export function reducer(state, action) {
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

export {
  add2ToNumber
}