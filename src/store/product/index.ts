import { ProductsState, Action, ActionTypes } from "./types";

const INITIAL_STATE: ProductsState = {
  data: [],
}

const reducer = (state = INITIAL_STATE, action: Action): ProductsState => {
  const data = [...state.data];

  switch(action.type) {
    case ActionTypes.FETCH_PRODUCTS_SUCCESS:

      return {
        ...state,
        data: action.payload,
        messageError: null,
      }
    case ActionTypes.FETCH_PRODUCTS_ERROR: 
      return {
        ...state,
        messageError: "Ocorreu um erro ao listar os produtos"
      }
    case ActionTypes.CREATE_PRODUCTS_SUCCESS:
      data.push(action.payload);

      return{
        ...state,
        messageError: null,
        data
      }
    case ActionTypes.CREATE_PRODUCTS_ERROR:
      return{
        ...state,
        messageError: "Ocorreu um erro ao criar o produto"
      }
    case ActionTypes.UPDATE_PRODUCTS_SUCCESS:
      const updatedData = data.map(product =>
        product.id === action.payload.id ? action.payload : product
      );
      return{
        ...state,
        messageError: null,
        data: updatedData
      }
    case ActionTypes.UPDATE_PRODUCTS_ERROR:
      
      return{
        ...state,
        messageError: "Ocorreu um erro ao atualizar o produto"
      }
    case ActionTypes.DELETE_PRODUCTS_SUCCESS:
      data.splice(data.indexOf(action.payload), 1);
      return{
        ...state,
        messageError: null,
        data
      }
    case ActionTypes.DELETE_PRODUCTS_ERROR:
      return{
        ...state,
        messageError: "Ocorreu um erro ao atualizar o produto"
      }
    default:
      return state;
  }
}

export default reducer;