import {Action} from 'redux';

//state
export interface UserTypeState {
  authenticationToken: null | string;
  loginError: string;
  userData: any | null;
}

//saga
export interface UserTypeLogin extends Action {
  type: string;
  payload: {
    email: string;
    password: string;
    client: any;
  };
}

export interface UserTypeLogout extends Action {
  type: string;
  payload: {};
}

export interface UserTypeFetchUserData extends Action {
  type: string;
  payload: {};
}

//reducer
export interface UserTypeSaveToken extends Action {
  type: string;
  payload: {
    authenticationToken: string;
  };
}

export interface UserTypeLoginError extends Action {
  type: string;
  payload: {
    loginError: string;
  };
}

export interface UserTypeLoadUserData extends Action {
  type: string;
  payload: {
    id: string | null;
    name: string | null;
    email: string | null;
    phone_number: string | null;
    profile: {
      first_name: string | null;
      middle_name: string | null;
      last_name: string | null;
      date_of_birth: string | null;
    };
  };
}

export type UserTypeActions =
  | UserTypeLogin
  | UserTypeSaveToken
  | UserTypeLoginError
  | UserTypeLoadUserData;
