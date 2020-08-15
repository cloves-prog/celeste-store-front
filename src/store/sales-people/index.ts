import { SalesPeoplesState, Action, ActionTypes } from "./types";

const INITIAL_STATE: SalesPeoplesState = {
  data: [],
};

const reducer = (state = INITIAL_STATE, action: Action): SalesPeoplesState => {
  const data = [...state.data];

  switch (action.type) {
    case ActionTypes.FETCH_SALESPEOPLE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        messageError: null,
      };
    case ActionTypes.FETCH_SALESPEOPLE_ERROR:
      return {
        ...state,
        messageError: "Ocorreu um erro ao listar os vendedores",
      };
    case ActionTypes.CREATE_SALESPEOPLE_SUCCESS:
      data.push(action.payload);

      return {
        ...state,
        data,
        messageError: null
      };
    case ActionTypes.CREATE_SALESPEOPLE_ERROR:
      return {
        ...state,
        messageError: "Ocorreu um erro ao criar um vendedor",
      };
    case ActionTypes.DELETE_SALESPEOPLE_SUCCESS:
      data.splice(data.indexOf(action.payload), 1);

      return { 
        ...state, 
        data,
        messageError: null,
      };
    case ActionTypes.DELETE_SALESPEOPLE_ERROR:
      return {
        ...state,
        messageError: "Ocorreu um erro ao deletar um vendedor",
      };
    case ActionTypes.UPDATE_SALESPEOPLE_SUCCESS:
      const updatedData = data.map((salesPeople) =>
        salesPeople.id === action.payload.id ? action.payload : salesPeople
      );

      return {
        ...state,
        data: updatedData,
        messageError: null,
      };
    case ActionTypes.UPDATE_SALESPEOPLE_ERROR:
      return {
        ...state,
        messageError: "Ocorreu um erro ao atualizar um vendedor",
      };
    default:
      return state;
  }
};

export default reducer;
