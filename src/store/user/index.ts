import { UserState, Action, ActionTypes } from "./types";

const INITIAL_STATE: UserState = {
  data: {
    email: '',
    password: '',
    token: localStorage.getItem('usertoken') || '',
    type: ''
  },
  messageError: null,
  isAuthenticated: false,
};

const reducer = (state = INITIAL_STATE, action: Action): UserState => {
switch (action.type) {
  case ActionTypes.FETCH_TOKEN:
      const data = {...state.data}
      data.token = localStorage.getItem('usertoken') || '';
      
      return {
        ...state,
        messageError: null,
        isAuthenticated: Boolean(data.token),
        data,
      };
    case ActionTypes.LOGIN_SUCCESS:
      
      localStorage.setItem('usertoken', action.payload.token || '')
      window.location.reload();
      return {
        ...state,
        data: action.payload,
        messageError: null,
        isAuthenticated: true,
      };
    case ActionTypes.LOGIN_ERROR:
      return {
        ...state,
        messageError: "Credenciais inválidas",
        isAuthenticated: false,
      };

    case ActionTypes.LOGOUT:
      localStorage.removeItem('usertoken')
      
      return {
        ...state,
        messageError: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default reducer;
