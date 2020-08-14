import { SalesPeoplesState, Action, ActionTypes } from "./types";

const INITIAL_STATE: SalesPeoplesState = {
  data: [],
  error: false,
}

const reducer = (state = INITIAL_STATE, action: Action): SalesPeoplesState => {
  switch(action.type) {
    case ActionTypes.FETCH_SALESPEOPLE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: false,
      }
    case ActionTypes.FETCH_SALESPEOPLE_ERROR: 
      return {
        ...state,
        error: true,
      }
    default:
      return state;
  }
}

export default reducer;