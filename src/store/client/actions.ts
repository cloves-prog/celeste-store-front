import { Dispatch } from 'react';
import { Action, ActionTypes } from './types';
import { fetchClients as fetch } from '../../services/clients';

export const fetchClients = () => async (dispatch: Dispatch<Action>) => {
  try {
    const clients = await fetch();

    dispatch({
      type: ActionTypes.FETCH_CLIENTS_SUCCESS,
      payload: clients,
    })
  } catch (e) {
    dispatch({
      type: ActionTypes.FETCH_CLIENTS_ERROR,
    })
  }
};