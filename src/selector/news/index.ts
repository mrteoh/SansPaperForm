import { ApplicationState } from 'store';

export const selectNews = (state: ApplicationState) => state.newsReducer.news;

export const theState = (state: ApplicationState) => state;
