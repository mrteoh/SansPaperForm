import {ActionCreator} from 'redux';
import {AppTypeInitialize} from './types';

export const APP_ACTION = {
  SAGA: {
    INITIALIZE: 'INITIALIZE',
  },
  REDUCER: {
    SAVE_TOKEN: 'SAVE_TOKEN',
  },
};

export const AppActionInitialize: ActionCreator<AppTypeInitialize> = (
  payload,
): AppTypeInitialize => ({
  type: APP_ACTION.SAGA.INITIALIZE,
  payload,
});
