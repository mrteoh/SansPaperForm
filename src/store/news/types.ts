import {Action} from 'redux';

export interface News {
  id: string;
  title: string;
  news: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export interface NewsState {
  news: News[];
}

export interface FetchNewsAction extends Action {
  type: string;
  payload: {};
}

export interface LoadNewsAction extends Action {
  type: string;
  payload: News[];
}

export type NewsTypeAction = FetchNewsAction | LoadNewsAction;
