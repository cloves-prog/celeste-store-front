import { Dispatch } from "react";
import { Action, ActionTypes } from "./types";
import { resume } from "../../services/sales";

export const fetchResume = () => async (dispatch: Dispatch<Action>) => {
  try {
    const data = await resume();

    dispatch({
      type: ActionTypes.FETCH_RESUME_SUCCESS,
      payload: data
    })
  } catch (e) {
    dispatch({
      type: ActionTypes.FETCH_RESUME_ERROR,
    })
  }
};