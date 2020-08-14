import { Client } from "../../interfaces/Client";

export interface ClientState {
  data: Client[]
  error: boolean
}

export enum ActionTypes {
  FETCH_CLIENTS_SUCCESS = 'clients/FETCH_CLIENTS_SUCCESS',
  FETCH_CLIENTS_ERROR = 'clients/FETCH_CLIENTS_ERROR'
}

export interface FetchProdctsSuccessAction {
  type: ActionTypes.FETCH_CLIENTS_SUCCESS,
  payload: Client[];
}

export interface FetchProdctsErrorAction {
  type: ActionTypes.FETCH_CLIENTS_ERROR,
}

export type Action = FetchProdctsSuccessAction | FetchProdctsErrorAction;
