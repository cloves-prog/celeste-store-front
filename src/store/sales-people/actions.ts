import { Dispatch } from 'react';
import { Action, ActionTypes } from './types';
import { fetch, create, update, destroy } from '../../services/sales-people';
import { SalesPeople } from '../../interfaces/SalesPeople';

export const fetchSalesPeople = () => async (dispatch: Dispatch<Action>) => {
  try {
    const salespeople = await fetch();

    dispatch({
      type: ActionTypes.FETCH_SALESPEOPLE_SUCCESS,
      payload: salespeople,
    })
  } catch (e) {
    dispatch({
      type: ActionTypes.FETCH_SALESPEOPLE_ERROR,
    })
  }
};

export const createSalesPeople = (data: SalesPeople) => async (dispatch: Dispatch<Action>) => {
  try {
    const salespeople = await create(data);

    dispatch({
      type: ActionTypes.CREATE_SALESPEOPLE_SUCCESS,
      payload: salespeople,
    })
  } catch (e) {
    dispatch({
      type: ActionTypes.CREATE_SALESPEOPLE_ERROR,
    })
  }
};

export const updateSalesPeople = (data: SalesPeople) => async (dispatch: Dispatch<Action>) => {
  try {
    const salespeople = await update(data);

    dispatch({
      type: ActionTypes.UPDATE_SALESPEOPLE_SUCCESS,
      payload: salespeople,
    })
  } catch (e) {
    dispatch({
      type: ActionTypes.UPDATE_SALESPEOPLE_ERROR,
    })
  }
};

export const deleteSalesPeople = (data: SalesPeople) => async (dispatch: Dispatch<Action>) => {
  try {
    await destroy(data);

    dispatch({
      type: ActionTypes.DELETE_SALESPEOPLE_SUCCESS,
      payload: data
    })
  } catch (e) {
    dispatch({
      type: ActionTypes.DELETE_SALESPEOPLE_ERROR,
    })
  }
};