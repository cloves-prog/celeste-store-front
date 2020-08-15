import { SalesPeoplesState, Action, ActionTypes } from "./types";

const INITIAL_STATE: SalesPeoplesState = {
  data: [],
  error: false,
  resourceAction: "se comunicar com o servidor",
};

const reducer = (state = INITIAL_STATE, action: Action): SalesPeoplesState => {
  const data = [...state.data];

  switch (action.type) {
    case ActionTypes.FETCH_SALESPEOPLE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: false,
        resourceAction: INITIAL_STATE.resourceAction,
      };
    case ActionTypes.FETCH_SALESPEOPLE_ERROR:
      return {
        ...state,
        error: true,
        resourceAction: "listar os vendedores",
      };
    case ActionTypes.CREATE_SALESPEOPLE_SUCCESS:
      data.push(action.payload);

      return {
        ...state,
        data,
        error: false,
        resourceAction: INITIAL_STATE.resourceAction,
      };
    case ActionTypes.CREATE_SALESPEOPLE_ERROR:
      return {
        ...state,
        error: true,
        resourceAction: "criar um vendedor",
      };
    case ActionTypes.DELETE_SALESPEOPLE_SUCCESS:
      data.splice(data.indexOf(action.payload), 1);

      return { ...state, data };
    case ActionTypes.DELETE_SALESPEOPLE_ERROR:
      return {
        ...state,
        error: true,
        resourceAction: "deletar um vendedor",
      };
    case ActionTypes.UPDATE_SALESPEOPLE_SUCCESS:
      const updatedData = data.map((salesPeople) =>
        salesPeople.id === action.payload.id ? action.payload : salesPeople
      );

      return {
        ...state,
        data: updatedData,
        error: false,
        resourceAction: INITIAL_STATE.resourceAction,
      };
    case ActionTypes.UPDATE_SALESPEOPLE_ERROR:
      return {
        ...state,
        error: true,
        resourceAction: "atualizar um vendedor",
      };
    default:
      return state;
  }
};

export default reducer;
