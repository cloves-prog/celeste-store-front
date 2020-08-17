import { Dispatch } from 'react';
import { Action, ActionTypes } from './types';
import { fetch, create, update, destroy } from '../../services/clients';
import { Client } from '../../interfaces/Client';

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

export const createClient = (data: Client) => async (dispatch: Dispatch<Action>) => {
  try {
    console.log('TESTE', data);
    
    const client = await create(data);

    dispatch({
      type: ActionTypes.CREATE_CLIENTS_SUCCESS,
      payload: client,
    })
  } catch (e) {
    dispatch({
      type: ActionTypes.CREATE_CLIENTS_ERROR,
    })
  }
};

export const updateClient = (data: Client) => async (dispatch: Dispatch<Action>) => {
  try {
    const client = await update(data);

    dispatch({
      type: ActionTypes.UPDATE_CLIENTS_SUCCESS,
      payload: client,
    })
  } catch (e) {
    dispatch({
      type: ActionTypes.UPDATE_CLIENTS_ERROR,
    })
  }
};

export const deleteClient = (data: Client) => async (dispatch: Dispatch<Action>) => {
  try {
    await destroy(data);

    dispatch({
      type: ActionTypes.DELETE_CLIENTS_SUCCESS,
      payload: data
    })
  } catch (e) {
    dispatch({
      type: ActionTypes.DELETE_CLIENTS_ERROR,
    })
  }
};