import { Client } from "../../interfaces/Client";

export interface ClientState {
  data: Client[]
  messageError?: string | null
}

export enum ActionTypes {
  FETCH_CLIENTS_SUCCESS = 'clients/FETCH_CLIENTS_SUCCESS',
  FETCH_CLIENTS_ERROR = 'clients/FETCH_CLIENTS_ERROR',

  CREATE_CLIENTS_SUCCESS = 'clients/CREATE_CLIENTS_SUCCESS',
  CREATE_CLIENTS_ERROR = 'clients/CREATE_CLIENTS_ERROR',


  UPDATE_CLIENTS_SUCCESS = 'clients/UPDATE_CLIENTS_SUCCESS',
  UPDATE_CLIENTS_ERROR = 'clients/UPDATE_CLIENTS_ERROR',

  DELETE_CLIENTS_SUCCESS = 'clients/DELETE_CLIENTS_SUCCESS',
  DELETE_CLIENTS_ERROR = 'clients/DELETE_CLIENTS_ERROR',
}

export interface FetchClientsSuccessAction {
  type: ActionTypes.FETCH_CLIENTS_SUCCESS,
  payload: Client[];
}

export interface FetchClientsErrorAction {
  type: ActionTypes.FETCH_CLIENTS_ERROR,
}


export interface CreateClientSuccessAction {
  type: ActionTypes.CREATE_CLIENTS_SUCCESS,
  payload: Client
}

export interface CreateClientErrorAction {
  type: ActionTypes.CREATE_CLIENTS_ERROR,
}

export interface UpdateClientSuccessAction {
  type: ActionTypes.UPDATE_CLIENTS_SUCCESS,
  payload: Client
}

export interface UpdateClientErrorAction {
  type: ActionTypes.UPDATE_CLIENTS_ERROR,
}

export interface DeleteClientSuccessAction {
  type: ActionTypes.DELETE_CLIENTS_SUCCESS,
  payload: Client
}

export interface DeleteClientErrorAction {
  type: ActionTypes.DELETE_CLIENTS_ERROR,
}

export type Action = 
  FetchClientsSuccessAction | 
  FetchClientsErrorAction |
  CreateClientSuccessAction |
  CreateClientErrorAction |
  UpdateClientSuccessAction |
  UpdateClientErrorAction |
  DeleteClientSuccessAction |
  DeleteClientErrorAction;
