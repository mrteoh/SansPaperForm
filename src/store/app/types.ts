import {Action} from 'redux';

//state
export interface AppTypeState {
  authenticationToken: null | string;
}

//saga
export interface AppTypeInitialize extends Action {
  type: string;
  payload: {};
}

//reducer

//all
export type AppTypeActions = AppTypeInitialize;

//yield
export type ReturnYield = any;
