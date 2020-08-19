import { SalesState, Action, ActionTypes } from "./types";

const INITIAL_STATE: SalesState = {
  data: [],
}

const reducer = (state = INITIAL_STATE, action: Action): SalesState => {
  switch(action.type) {
    case ActionTypes.FETCH_SALES_SUCCESS:

      return {
        ...state,
        data: action.payload,
        messageError: null,
      }
    case ActionTypes.DELETE_SALES_ERROR: 
      return {
        ...state,
        messageError: "Ocorreu um erro ao deletar as vendas"
      }
    case ActionTypes.DELETE_SALES_SUCCESS: 
      const data = [...state.data];
      data.splice(data.indexOf(action.payload), 1);

      return {
       ...state,
       data
      }
    case ActionTypes.FETCH_SALES_ERROR: 
      return {
        ...state,
        messageError: "Ocorreu um erro ao listar as vendas"
      }
    default:
      return state;
  }
}

export default reducer;