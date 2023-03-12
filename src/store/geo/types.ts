import {Action} from 'redux';

export interface Geo {
  id: string;
  title: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface GeoState {
  geo: Geo[];
}

export interface FetchGeoAction extends Action {
  type: string;
  payload: {};
}

export interface LoadGeoAction extends Action {
  type: string;
  payload: Geo[];
}

export type GeoTypeAction = FetchGeoAction | LoadGeoAction;
