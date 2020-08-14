import { ClientState, Action, ActionTypes } from "./types";

const INITIAL_STATE: ClientState = {
  data: [],
  error: false,
}

const reducer = (state = INITIAL_STATE, action: Action): ClientState => {
  switch(action.type) {
    case ActionTypes.FETCH_CLIENTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: false,
      }
    case ActionTypes.FETCH_CLIENTS_ERROR: 
      return {
        ...state,
        error: true,
      }
    default:
      return state;
  }
}

export default reducer;