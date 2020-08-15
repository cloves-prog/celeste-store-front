import { Dispatch } from 'react';
import { Action, ActionTypes } from './types';
import { fetch, create, update, destroy } from '../../services/products';
import { Product } from '../../interfaces/Product';

export const fetchProducts = () => async (dispatch: Dispatch<Action>) => {
  try {
    const products = await fetch();

    dispatch({
      type: ActionTypes.FETCH_PRODUCTS_SUCCESS,
      payload: products,
    })
  } catch (e) {
    dispatch({
      type: ActionTypes.FETCH_PRODUCTS_ERROR,
    })
  }
};

export const createProduct = (data: Product) => async (dispatch: Dispatch<Action>) => {
  try {
    const product = await create(data);

    dispatch({
      type: ActionTypes.CREATE_PRODUCTS_SUCCESS,
      payload: product,
    })
  } catch (e) {
    dispatch({
      type: ActionTypes.CREATE_PRODUCTS_ERROR,
    })
  }
};

export const updateProduct = (data: Product) => async (dispatch: Dispatch<Action>) => {
  try {
    const product = await update(data);

    dispatch({
      type: ActionTypes.UPDATE_PRODUCTS_SUCCESS,
      payload: product,
    })
  } catch (e) {
    dispatch({
      type: ActionTypes.UPDATE_PRODUCTS_ERROR,
    })
  }
};

export const deleteProduct = (data: Product) => async (dispatch: Dispatch<Action>) => {
  try {
    await destroy(data);

    dispatch({
      type: ActionTypes.DELETE_PRODUCTS_SUCCESS,
      payload: data
    })
  } catch (e) {
    dispatch({
      type: ActionTypes.DELETE_PRODUCTS_ERROR,
    })
  }
};