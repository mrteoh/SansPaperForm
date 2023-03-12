import {ActionCreator} from 'redux';
import {FetchNewsAction} from './types';

export const NEWS_ACTION = {
  SAGA: {
    FETCH_NEWS: 'FETCH_NEWS',
  },
  REDUCER: {
    LOAD_NEWS: 'LOAD_NEWS',
  },
};

export const onFetchNews: ActionCreator<FetchNewsAction> = (
  payload,
): FetchNewsAction => ({
  type: NEWS_ACTION.SAGA.FETCH_NEWS,
  payload,
});
