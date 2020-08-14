import { Product } from "../../interfaces/Product";

export interface ProductsState {
  data: Product[]
  error: boolean
}

export enum ActionTypes {
  FETCH_PRODUCTS_SUCCESS = 'products/FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_ERROR = 'products/FETCH_PRODUCTS_ERROR'
}

export interface FetchProdctsSuccessAction {
  type: ActionTypes.FETCH_PRODUCTS_SUCCESS,
  payload: Product[];
}

export interface FetchProdctsErrorAction {
  type: ActionTypes.FETCH_PRODUCTS_ERROR,
}

export type Action = FetchProdctsSuccessAction | FetchProdctsErrorAction;
