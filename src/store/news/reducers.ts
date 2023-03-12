import produce from 'immer';
import {NEWS_ACTION} from './actions';
import {LoadNewsAction, NewsState, NewsTypeAction} from './types';

const INIT_STATE: NewsState = {
  news: [],
};

export default (state = INIT_STATE, action: NewsTypeAction) => {
  switch (action.type) {
    case NEWS_ACTION.REDUCER.LOAD_NEWS: {
      
      return produce(state, draftState => {
        const typeAction = action as LoadNewsAction;
        draftState.news = typeAction.payload;
      });
    }
    default:
      return state;
  }
};
