import { all, put, takeLatest } from 'redux-saga/effects';
import { APP_ACTION, ReturnYield } from '.';
import DB from '../../database/database';
import { CreateAllTables } from 'database/write';
import { showAuthenticationScreen, showMainScreen } from 'navigation';
import AsyncStorage from '@react-native-community/async-storage';
import { USER_ACTION } from 'store/user/constants';
import { UserActionFetchUserData } from 'store/user';
import { onFetchNews } from '../news';
import { onFetchGeo } from '../geo';

function* AppSagaInitialize(): Generator<ReturnYield> {
  console.log('AppSagaInitialize Running');
  try {
    yield DB.openDataBaseConnection();
    CreateAllTables();      //disable yield

    const authenticationToken = yield AsyncStorage.getItem(
      '@authenticationToken',
    );

    if (authenticationToken === null) {
      showAuthenticationScreen();
    } else {
      yield put({
        type: USER_ACTION.REDUCER.UPDATE_TOKEN,
        payload: authenticationToken,
      });
      yield put(UserActionFetchUserData());
      yield put(onFetchNews());
      yield put(onFetchGeo());  

      showMainScreen();
    }
  } catch (error) {
    console.log('AppSagaInitialize Error: ', error);
  }
}

export default all([takeLatest(APP_ACTION.SAGA.INITIALIZE, AppSagaInitialize)]);
