import { Action, ActionTypes, ResumeState } from "./types";

const INITIAL_STATE: ResumeState = {
  messageError: null,
  data: {
    bestClients: null,
  },
};

export default function reducer(state = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case ActionTypes.FETCH_RESUME_SUCCESS:
      return {
        ...state,
        data: action.payload,
        messageError: null,
      };

    case ActionTypes.FETCH_RESUME_ERROR:
      return {
        ...state,
        messageError: "Ocorreu um problema ao buscar os dados do dashboard",
      };
    default:
      return state;
  }
}
