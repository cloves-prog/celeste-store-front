import { ClientState, Action, ActionTypes } from "./types";

const INITIAL_STATE: ClientState = {
  data: []
}

const reducer = (state = INITIAL_STATE, action: Action): ClientState => {
  const data = [...state.data];
  switch(action.type) {
    case ActionTypes.FETCH_CLIENTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        messageError: null
      }
    case ActionTypes.FETCH_CLIENTS_ERROR: 
      return {
        ...state,
        messageError: "Ocorreu um erro ao listar os clientes",
      }
      case ActionTypes.CREATE_CLIENTS_SUCCESS:
        data.push(action.payload);
  
        return{
          ...state,
          messageError: null,
          data
        }
      case ActionTypes.CREATE_CLIENTS_ERROR:
        return{
          ...state,
          messageError: "Ocorreu um erro ao criar o cliente"
        }
      case ActionTypes.UPDATE_CLIENTS_SUCCESS:
        const updatedData = data.map(client =>
          client.id === action.payload.id ? action.payload : client
        );
        return{
          ...state,
          messageError: null,
          data: updatedData
        }
      case ActionTypes.UPDATE_CLIENTS_ERROR:
        
        return{
          ...state,
          messageError: "Ocorreu um erro ao atualizar o cliente"
        }
      case ActionTypes.DELETE_CLIENTS_SUCCESS:
        data.splice(data.indexOf(action.payload), 1);
        return{
          ...state,
          messageError: null,
          data
        }
      case ActionTypes.DELETE_CLIENTS_ERROR:
        return{
          ...state,
          messageError: "O cliente não pode ser deletado, pois possui vendas relacionadas."
        }
    default:
      return state;
  }
}

export default reducer;