import { ApplicationState } from 'store';

export const selectGeo = (state: ApplicationState) => state.newsReducer.geo;

export const theState = (state: ApplicationState) => state;
