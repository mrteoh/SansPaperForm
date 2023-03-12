import {ActionCreator} from 'redux';
import {FetchGeoAction} from './types';

export const GEO_ACTION = {
  SAGA: {
    FETCH_GEO: 'FETCH_GEO',
  },
  REDUCER: {
    LOAD_GEO: 'LOAD_GEO',
  },
};

export const onFetchGeo: ActionCreator<FetchGeoAction> = (
  payload,
): FetchGeoAction => ({
  type: GEO_ACTION.SAGA.FETCH_GEO,
  payload,
});
