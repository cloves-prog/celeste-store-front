import { Dispatch } from 'react';
import { Action, ActionTypes } from './types';
import { fetchProduct as fetch } from '../../services/products';

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