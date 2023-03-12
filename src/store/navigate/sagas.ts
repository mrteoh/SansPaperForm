import {all, takeLatest} from 'redux-saga/effects';

import {GoToLoginType, GoToMainScreenType} from './types';
import {NAVIGATE_ACTIONS} from './actions';
import {showAuthenticationScreen, showMainScreen} from 'navigation';

function* goToLogin({}: GoToLoginType) {
  try {
    showAuthenticationScreen();
  } catch (error) {
    console.error('register error', error);
  }
}

function goToMainScreen({}: GoToMainScreenType) {
  try {
    showMainScreen();
  } catch (error) {
    console.error('register error', error);
  }
}

export default all([
  takeLatest(NAVIGATE_ACTIONS.GO_TO_LOGIN, goToLogin),
  takeLatest(NAVIGATE_ACTIONS.GO_TO_MAIN_SCREEN, goToMainScreen),
]);
