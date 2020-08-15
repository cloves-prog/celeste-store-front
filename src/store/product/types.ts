import { Product } from "../../interfaces/Product";

export interface ProductsState {
  data: Product[]
  messageError?: string | null
}

export enum ActionTypes {
  FETCH_PRODUCTS_SUCCESS = 'products/FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_ERROR = 'products/FETCH_PRODUCTS_ERROR',

  CREATE_PRODUCTS_SUCCESS = 'products/CREATE_PRODUCTS_SUCCESS',
  CREATE_PRODUCTS_ERROR = 'products/CREATE_PRODUCTS_ERROR',


  UPDATE_PRODUCTS_SUCCESS = 'products/UPDATE_PRODUCTS_SUCCESS',
  UPDATE_PRODUCTS_ERROR = 'products/UPDATE_PRODUCTS_ERROR',

  DELETE_PRODUCTS_SUCCESS = 'products/DELETE_PRODUCTS_SUCCESS',
  DELETE_PRODUCTS_ERROR = 'products/DELETE_PRODUCTS_ERROR',
}

export interface FetchProdctsSuccessAction {
  type: ActionTypes.FETCH_PRODUCTS_SUCCESS,
  payload: Product[];
}

export interface FetchProdctsErrorAction {
  type: ActionTypes.FETCH_PRODUCTS_ERROR,
}

export interface CreateProductsSuccessAction {
  type: ActionTypes.CREATE_PRODUCTS_SUCCESS,
  payload: Product;
}

export interface CreateProductsErrorAction {
  type: ActionTypes.CREATE_PRODUCTS_ERROR,
}

export interface UpdateProductsSuccessAction {
  type: ActionTypes.UPDATE_PRODUCTS_SUCCESS,
  payload: Product;
}

export interface UpdateProductsErrorAction {
  type: ActionTypes.UPDATE_PRODUCTS_ERROR,
}

export interface DeleteProductsSuccessAction {
  type: ActionTypes.DELETE_PRODUCTS_SUCCESS,
  payload: Product
}

export interface DeleteProductsErrorAction {
  type: ActionTypes.DELETE_PRODUCTS_ERROR,
}

export type Action = 
  FetchProdctsSuccessAction | 
  FetchProdctsErrorAction |
  CreateProductsSuccessAction |
  CreateProductsErrorAction |
  UpdateProductsSuccessAction |
  UpdateProductsErrorAction |
  DeleteProductsSuccessAction |
  DeleteProductsErrorAction;