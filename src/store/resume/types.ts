import { Resume } from "../../interfaces/Resume";

export interface ResumeState {
  data: Resume;
  messageError: string | null;
}

export enum ActionTypes {
  FETCH_RESUME_SUCCESS = "sales/FETCH_RESUME_SUCCESS",
  FETCH_RESUME_ERROR = "sales/FETCH_RESUME_ERROR",
}

export interface FetchResumeSuccess {
  type: ActionTypes.FETCH_RESUME_SUCCESS;
  payload: Resume;
}

export interface FetchResumeError {
  type: ActionTypes.FETCH_RESUME_ERROR;
}

export type Action = FetchResumeSuccess | FetchResumeError;
