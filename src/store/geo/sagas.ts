import {all, call, put, takeLatest} from 'redux-saga/effects';
import {getAuthToken} from '../../apollo/links';
import {GEO_ACTION} from './actions';
import {fetchGeo} from 'api/geo';
import Geolocation, { PositionError } from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';
import Toast from 'react-native-simple-toast';
import {GOOGLE_API_KEY} from '../../constant/keys';

type ReturnYield = any;

function* onFetchGeo(): Generator<ReturnYield> {

  try {
    const token = yield getAuthToken();
    const result: any = yield call<any>(fetchGeo, token);

    if (result) {
      yield put({
        type: GEO_ACTION.REDUCER.LOAD_GEO,
        payload: result,
      });
    }
  } catch (error) {
    console.error(error);
  }
}

export default all([takeLatest(GEO_ACTION.SAGA.FETCH_GEO, onFetchGeo)]);
