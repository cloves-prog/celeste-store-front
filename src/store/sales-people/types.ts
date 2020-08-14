import { SalesPeople } from "../../interfaces/SalesPeople";

export interface SalesPeoplesState {
  data: SalesPeople[]
  error: boolean
}

export enum ActionTypes {
  FETCH_SALESPEOPLE_SUCCESS = 'salespeople/FETCH_SALESPEOPLE_SUCCESS',
  FETCH_SALESPEOPLE_ERROR = 'salespeople/FETCH_SALESPEOPLE_ERROR'
}

export interface FetchSalesPeopleSuccessAction {
  type: ActionTypes.FETCH_SALESPEOPLE_SUCCESS,
  payload: SalesPeople[];
}

export interface FetchSalesPeopleErrorAction {
  type: ActionTypes.FETCH_SALESPEOPLE_ERROR,
}

export type Action = FetchSalesPeopleSuccessAction | FetchSalesPeopleErrorAction;
