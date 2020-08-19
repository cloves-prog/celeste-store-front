import { Sale } from "../../interfaces/Sale";

export interface SalesState {
  data: Sale[];
  messageError?: string | null;
}

export enum ActionTypes {
  FETCH_SALES_SUCCESS = "sales/FETCH_SALES_SUCCESS",
  FETCH_SALES_ERROR = "sales/FETCH_SALES_ERROR",

  DELETE_SALES_SUCCESS = "sales/DELETE_SALES_SUCCESS",
  DELETE_SALES_ERROR = "sales/DELETE_SALES_ERROR",
}

export interface DeleteSalesErrorAction {
  type: ActionTypes.DELETE_SALES_ERROR;
}

export interface DeleteSalesSuccessAction {
  type: ActionTypes.DELETE_SALES_SUCCESS;
  payload: Sale;
}

export interface FetchSalesSuccessAction {
  type: ActionTypes.FETCH_SALES_SUCCESS;
  payload: Sale[];
}

export interface FetchSalesErrorAction {
  type: ActionTypes.FETCH_SALES_ERROR;
}

export type Action =
  | FetchSalesErrorAction
  | FetchSalesSuccessAction
  | DeleteSalesErrorAction
  | DeleteSalesSuccessAction;
