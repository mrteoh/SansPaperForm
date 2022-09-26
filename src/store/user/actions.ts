import {ActionCreator} from 'redux';
import {UserTypeFetchUserData, UserTypeLogout} from '.';
import {USER_ACTION} from './constants';
import {UserTypeLogin} from './types';

export const UserActionLogin: ActionCreator<UserTypeLogin> = (
  payload,
): UserTypeLogin => ({
  type: USER_ACTION.SAGA.LOGIN,
  payload,
});

export const UserActionLogout: ActionCreator<UserTypeLogout> = (
  payload,
): UserTypeLogout => ({
  type: USER_ACTION.SAGA.LOGOUT,
  payload,
});

export const UserActionFetchUserData: ActionCreator<UserTypeFetchUserData> = (
  payload,
): UserTypeFetchUserData => ({
  type: USER_ACTION.SAGA.FETCH_USER_DATA,
  payload,
});
