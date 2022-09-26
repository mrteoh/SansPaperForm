import {combineReducers} from 'redux';
import {all} from 'redux-saga/effects';
import {userReducer, UserTypeState} from './user';
import {AppReducer, AppTypeState} from './app';
import {FormReducer, FormTypeState} from './form';
import {NewsState, newsReducer} from './news';

import userSaga from './user/sagas';
import AppSaga from './app/sagas';
import FormSaga from './form/sagas';
import newsSaga from './news/sagas';

export interface ApplicationState {
  userReducer: UserTypeState;
  AppReducer: AppTypeState;
  FormReducer: FormTypeState;
  newsReducer: NewsState;
}

export const rootReducer = combineReducers<ApplicationState>({
  userReducer,
  AppReducer,
  FormReducer,
  newsReducer,
});

export function* rootSaga() {
  yield all([userSaga, AppSaga, FormSaga, newsSaga]);
}
