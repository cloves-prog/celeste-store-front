import { Dispatch } from 'react';
import { Action, ActionTypes } from './types';
import { fetchSalesPeople as fetch } from '../../services/sales-people';

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