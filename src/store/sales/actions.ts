import { Dispatch } from 'react';
import { Action, ActionTypes } from './types';
import { fetch, destroy } from '../../services/sales';
import { Sale } from '../../interfaces/Sale';

export const fetchSales = () => async (dispatch: Dispatch<Action>) => {
  try {
    const products = await fetch();

    dispatch({
      type: ActionTypes.FETCH_SALES_SUCCESS,
      payload: products,
    })
  } catch (e) {
    dispatch({
      type: ActionTypes.FETCH_SALES_ERROR,
    })
  }
};

export const deleteSale = (sale: Sale) => async (dispatch: Dispatch<Action>) => {
  try {
    await destroy(sale.sales_number);

    dispatch({
      type: ActionTypes.DELETE_SALES_SUCCESS,
      payload: sale
    })
  } catch (e) {
    dispatch({
      type: ActionTypes.DELETE_SALES_ERROR,
    })
  }
};
