import produce from 'immer';
import {
  UserTypeActions,
  UserTypeLoadUserData,
  UserTypeLoginError,
  UserTypeSaveToken,
  UserTypeState,
} from '.';
import {USER_ACTION} from './constants';

const INIT_STATE: UserTypeState = {
  authenticationToken: '',
  loginError: '',
  userData: {
    id: null,
    name: null,
    email: null,
    phone_number: null,
    profile: {
      first_name: null,
      middle_name: null,
      last_name: null,
      date_of_birth: null,
    },
  },
};

export default (state = INIT_STATE, action: UserTypeActions) => {
  switch (action.type) {
    case USER_ACTION.REDUCER.UPDATE_TOKEN: {
      return produce(
        state,
        (draftState: {authenticationToken: {authenticationToken: string}}) => {
          const typeAction = action as UserTypeSaveToken;
          draftState.authenticationToken = typeAction.payload;
        },
      );
    }

    case USER_ACTION.REDUCER.LOGIN_ERROR: {
      return produce(
        state,
        (draftState: {loginError: {loginError: string}}) => {
          const typeAction = action as UserTypeLoginError;
          draftState.loginError = typeAction.payload;
        },
      );
    }

    case USER_ACTION.REDUCER.LOAD_USER_DATA: {
      return produce(state, draftState => {
        const typeAction = action as UserTypeLoadUserData;
        draftState.userData = typeAction.payload;
      });
    }
    default:
      return state;
  }
};
