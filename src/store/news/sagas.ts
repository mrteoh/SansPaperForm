import {all, call, put, takeLatest} from 'redux-saga/effects';
import {getAuthToken} from '../../apollo/links';
import {NEWS_ACTION} from './actions';
import {fetchNews} from 'api/news';

type ReturnYield = any;

function* onFetchNews(): Generator<ReturnYield> {
  try {
    const token = yield getAuthToken();
    const result: any = yield call<any>(fetchNews, token);

    if (result.status === 200) {
      console.log('results', result);
      yield put({
        type: NEWS_ACTION.REDUCER.LOAD_NEWS,
        payload: result.data.data.news.data,
      });
    }
  } catch (error) {
    console.error(error);
  }
}

export default all([takeLatest(NEWS_ACTION.SAGA.FETCH_NEWS, onFetchNews)]);
