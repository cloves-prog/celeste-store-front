import { persist } from "../../services/sales";
import { ActionTypes, Action, CartState } from "./types";
import { Dispatch } from "react";

export const persistSale = (data: CartState) => async (dispatch: Dispatch<Action>) => {
  try {
    await persist(data);

    dispatch({
      type: ActionTypes.CREATE_SALE_SUCCESS,
    })
  } catch (e) {
    dispatch({
      type: ActionTypes.CREATE_SALE_ERROR,
    })
  }
};