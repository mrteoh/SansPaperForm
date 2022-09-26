// import {createSelector} from 'reselect';
import { ApplicationState } from 'store';

export const userSelectorAuthenticationToken = (state: ApplicationState) =>
  state.userReducer.authenticationToken;

export const userSelectorLoginError = (state: ApplicationState) =>
  state.userReducer.loginError;

export const selectUserData = (state: ApplicationState) =>
  state.userReducer.userData;
