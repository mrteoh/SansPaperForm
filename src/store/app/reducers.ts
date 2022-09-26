import produce from 'immer';
import {AppTypeActions, AppTypeState} from '.';

const INIT_STATE: AppTypeState = {
  authenticationToken: '',
};

export default (state = INIT_STATE, action: AppTypeActions) => {
  switch (action.type) {
    // case APP_ACTION.REDUCER.SAVE_TOKEN: {
    //   return produce(state, (draftState: {authToken: {token: string}}) => {
    //     const typeAction = action as userTypeSaveToken;
    //     draftState.authToken = typeAction.payload;
    //   });
    // }
    default:
      return state;
  }
};
