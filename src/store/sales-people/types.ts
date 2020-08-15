import { SalesPeople } from "../../interfaces/SalesPeople";

export interface SalesPeoplesState {
  data: SalesPeople[]
  error: boolean,
  resourceAction?: string,
}

export enum ActionTypes {
  FETCH_SALESPEOPLE_SUCCESS = 'salespeople/FETCH_SALESPEOPLE_SUCCESS',
  FETCH_SALESPEOPLE_ERROR = 'salespeople/FETCH_SALESPEOPLE_ERROR',

  CREATE_SALESPEOPLE_SUCCESS = 'salespeople/CREATE_SALESPEOPLE_SUCCESS',
  CREATE_SALESPEOPLE_ERROR = 'salespeople/CREATE_SALESPEOPLE_ERROR',


  UPDATE_SALESPEOPLE_SUCCESS = 'salespeople/UPDATE_SALESPEOPLE_SUCCESS',
  UPDATE_SALESPEOPLE_ERROR = 'salespeople/UPDATE_SALESPEOPLE_ERROR',

  DELETE_SALESPEOPLE_SUCCESS = 'salespeople/DELETE_SALESPEOPLE_SUCCESS',
  DELETE_SALESPEOPLE_ERROR = 'salespeople/DELETE_SALESPEOPLE_ERROR',
}

export interface FetchSalesPeopleSuccessAction {
  type: ActionTypes.FETCH_SALESPEOPLE_SUCCESS,
  payload: SalesPeople[];
}

export interface FetchSalesPeopleErrorAction {
  type: ActionTypes.FETCH_SALESPEOPLE_ERROR,
}

export interface CreateSalesPeopleSuccessAction {
  type: ActionTypes.CREATE_SALESPEOPLE_SUCCESS,
  payload: SalesPeople;
}

export interface CreateSalesPeopleErrorAction {
  type: ActionTypes.CREATE_SALESPEOPLE_ERROR,
}

export interface UpdateSalesPeopleSuccessAction {
  type: ActionTypes.UPDATE_SALESPEOPLE_SUCCESS,
  payload: SalesPeople;
}

export interface UpdateSalesPeopleErrorAction {
  type: ActionTypes.UPDATE_SALESPEOPLE_ERROR,
}

export interface DeleteSalesPeopleSuccessAction {
  type: ActionTypes.DELETE_SALESPEOPLE_SUCCESS,
  payload: SalesPeople
}

export interface DeleteSalesPeopleErrorAction {
  type: ActionTypes.DELETE_SALESPEOPLE_ERROR,
}

export type Action = 
  FetchSalesPeopleSuccessAction |
  FetchSalesPeopleErrorAction |
  CreateSalesPeopleSuccessAction |
  CreateSalesPeopleErrorAction |
  UpdateSalesPeopleSuccessAction |
  UpdateSalesPeopleErrorAction |
  DeleteSalesPeopleSuccessAction |
  DeleteSalesPeopleErrorAction;
