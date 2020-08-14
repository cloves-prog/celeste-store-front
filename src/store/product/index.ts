import { ProductsState, Action, ActionTypes } from "./types";

const INITIAL_STATE: ProductsState = {
  data: [],
  error: false,
}

const reducer = (state = INITIAL_STATE, action: Action): ProductsState => {
  switch(action.type) {
    case ActionTypes.FETCH_PRODUCTS_SUCCESS:

      return {
        ...state,
        data: action.payload,
        error: false,
      }
    case ActionTypes.FETCH_PRODUCTS_ERROR: 
      return {
        ...state,
        error: true,
      }
    default:
      return state;
  }
}

export default reducer;