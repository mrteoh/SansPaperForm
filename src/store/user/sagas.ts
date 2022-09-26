import { put, all, takeLatest, call } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

import { UserTypeLogin } from '.';
import {
  dismissActivityIndicator,
  showActivityIndicator,
  showInitialScreen,
} from 'navigation';
import { AppActionInitialize } from 'store/app';
import API from 'api';
import { getAuthToken } from '../../apollo/links';
import { USER_ACTION } from './constants';

type ReturnYield = any;

function* UserSagaLogin({ payload }: UserTypeLogin): Generator<ReturnYield> {

  try {
    showActivityIndicator();
    const result: any = yield call<any>(API.user.login, payload);
    const token = result.data.data.login.token;

    yield AsyncStorage.setItem('@authenticationToken', token);
    yield put(AppActionInitialize());
    dismissActivityIndicator();

  } catch (error) {
    yield put({
      type: USER_ACTION.REDUCER.LOGIN_ERROR,
      payload: 'Invalid Credentials',
    });
    dismissActivityIndicator();
    console.log('UserSagaLogin error', error);
  }
}

function* UserSagaLogout(): Generator<ReturnYield> {
  try {
    const token = yield getAuthToken();
    yield call<any>(API.user.logout, token);
    AsyncStorage.removeItem('@authenticationToken');
    showInitialScreen();
  } catch (error) {
    console.log('UserSagaLogout error', error);
  }
}

function* UserSagaFetchUserData(): Generator<ReturnYield> {
  try {
    console.log('UserSageFetchUserData running...');
    const token = yield getAuthToken();
    const result: any = yield call<any>(API.user.fetchUserData, token);

    yield put({
      type: USER_ACTION.REDUCER.LOAD_USER_DATA,
      payload: result.data.data.me,
    });
  } catch (error) {
    throw error;
  }
}

export default all([
  takeLatest(USER_ACTION.SAGA.LOGIN, UserSagaLogin),
  takeLatest(USER_ACTION.SAGA.LOGOUT, UserSagaLogout),
  takeLatest(USER_ACTION.SAGA.FETCH_USER_DATA, UserSagaFetchUserData),
]);
