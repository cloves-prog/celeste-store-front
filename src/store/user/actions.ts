import { Dispatch } from 'react';
import { Action, ActionTypes } from './types';
import { login } from '../../services/users';

import { User } from '../../interfaces/User';

export const signIn = (data: User) => async (dispatch: Dispatch<Action>) => {
  try {
    const payload = await login(data);

    dispatch({
      type: ActionTypes.LOGIN_SUCCESS,
      payload,
    })
  } catch (e) {
    dispatch({
      type: ActionTypes.LOGIN_ERROR,
    })
  }
};
