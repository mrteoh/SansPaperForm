import {Action} from 'redux';
import {NAVIGATE_ACTIONS} from './actions';

export interface GoToLoginType extends Action {
  type: typeof NAVIGATE_ACTIONS.GO_TO_LOGIN;
}

export interface GoToMainScreenType extends Action {
  type: typeof NAVIGATE_ACTIONS.GO_TO_MAIN_SCREEN;
}

export type NavigationActionType = GoToLoginType;
