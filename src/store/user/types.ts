import { User } from "../../interfaces/User";

export interface UserState {
  data: User;
  messageError: string | null;
  isAuthenticated: boolean;
}

export enum ActionTypes {
  FETCH_TOKEN = 'user/FETCH_TOKEN',
  LOGIN_SUCCESS = 'user/LOGIN_SUCCESS',
  LOGIN_ERROR = 'user/LOGIN_ERROR',
  LOGOUT = 'user/LOGOUT',
}

export interface FetchToken {
  type: ActionTypes.FETCH_TOKEN, 
}

export interface LoginSuccess {
  type: ActionTypes.LOGIN_SUCCESS,
  payload: User;
}

export interface LoginError {
  type: ActionTypes.LOGIN_ERROR,
}

export interface Logout {
  type: ActionTypes.LOGOUT,
}
export type Action = LoginSuccess | LoginError | Logout | FetchToken;
