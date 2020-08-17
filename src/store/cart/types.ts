import { Product } from "../../interfaces/Product";

interface Item {
  id: number;
  quantity: number;
}

export interface CartState {
  products: Item[];
  salesPeopleId?: number;
  clientId?: number;
  messageError?: string;
  created?: boolean
}

export enum ActionTypes {
  ADD_ITEM = "cart/ADD_ITEM",
  REMOVE_ITEM = "cart/REMOVE_ITEM",
  SET_SALES_PEOPLE_ID = "cart/SET_SALES_PEOPLE_ID",
  SET_CLIENT_ID = "cart/SET_CLIENT_ID",
  CREATE_SALE_SUCCESS = "cart/CREATE_SALE_SUCCESS",
  CREATE_SALE_ERROR = "cart/CREATE_SALE_ERROR",
  CLOSE_ALERT_SUCCESS = "cart/CLOSE_ALERT_SUCCESS",
}

export interface AddItemAction {
  type: ActionTypes.ADD_ITEM;
  payload: Product;
}

export interface RemoveItemAction {
  type: ActionTypes.REMOVE_ITEM;
  payload: Product;
}

export interface SetSalesPeopleId {
  type: ActionTypes.SET_SALES_PEOPLE_ID;
  payload: number;
}

export interface SetClientId {
  type: ActionTypes.SET_CLIENT_ID;
  payload: number;
}

export interface CreateSaleSuccess {
  type: ActionTypes.CREATE_SALE_SUCCESS;
}

export interface CreateSaleError {
  type: ActionTypes.CREATE_SALE_ERROR;
}
export interface CloseAlertSuccess {
  type: ActionTypes.CLOSE_ALERT_SUCCESS
}

export type Action =
  | AddItemAction
  | RemoveItemAction
  | SetClientId
  | SetSalesPeopleId
  | CreateSaleSuccess
  | CreateSaleError
  | CloseAlertSuccess;
