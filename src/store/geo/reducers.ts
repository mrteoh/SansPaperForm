import produce from 'immer';
import {GEO_ACTION} from './actions';
import {LoadGeoAction, GeoState, GeoTypeAction} from './types';

const INIT_STATE: GeoState = {
  geo: [],
};

export default (state = INIT_STATE, action: GeoTypeAction) => {
  switch (action.type) {
    case GEO_ACTION.REDUCER.LOAD_GEO: {
      return produce(state, draftState => {
        const typeAction = action as LoadGeoAction;
        
        draftState.geo = typeAction.payload;
      });
    }
    default:
      return state;
  }
};
