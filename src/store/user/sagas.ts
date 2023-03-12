import { put, all, takeLatest, call } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

import { UserTypeLogin } from '.';
import {
  dismissActivityIndicator,
  showActivityIndicator,
  showInitialScreen,
} from 'navigation';
import { AppActionInitialize } from 'store/app';
import API from 'api';
import { getAuthToken } from '../../apollo/links';
import { USER_ACTION } from './constants';

type ReturnYield = any;

function* UserSagaLogin({ payload }: UserTypeLogin): Generator<ReturnYield> {
  try {
    showActivityIndicator();
    // const result: any = yield call<any>(API.user.login, payload);

    //hardcode
    const result = {
      "data": {
        "data": {
          "login": {
            "token": "PjDPlfDrUCvuPM0E8Sgjca6laJS0G4ReI3lGtgkC"
          }
        }
      },
      "status": 200,
      "headers": {
        "server": "Apache/2.4.41 (Ubuntu)",
        "transfer-encoding": "Identity",
        "connection": "Keep-Alive",
        "content-type": "application/json",
        "date": "Wed, 02 Nov 2022 07:35:30 GMT",
        "cache-control": "no-cache, private",
        "vary": "Origin",
        "keep-alive": "timeout=5, max=100"
      },
      "config": {
        "transitional": {
          "silentJSONParsing": true,
          "forcedJSONParsing": true,
          "clarifyTimeoutError": false
        },
        "transformRequest": [
          null
        ],
        "transformResponse": [
          null
        ],
        "timeout": 0,
        "xsrfCookieName": "XSRF-TOKEN",
        "xsrfHeaderName": "X-XSRF-TOKEN",
        "maxContentLength": -1,
        "maxBodyLength": -1,
        "headers": {
          "Accept": "application/json, text/plain, */*",
          "Content-Type": "application/json"
        },
        "method": "post",
        "url": "https://id-staging.sanspaper.com/graphql",
        "data": "{\"query\":\"mutation ($email: String!, $password: String!, $device_name: String!, $recaptcha: String!) {\\n  login(\\n    email: $email\\n    password: $password\\n    device_name: $device_name\\n    recaptcha: $recaptcha\\n  ) {\\n    token\\n  }\\n}\\n\",\"variables\":{\"email\":\"developers@sanspaper.com\",\"password\":\"nK0ING7M5VyB#\",\"device_name\":\"mobile\",\"recaptcha\":\"\"}}"
      },
      "request": {
        "UNSENT": 0,
        "OPENED": 1,
        "HEADERS_RECEIVED": 2,
        "LOADING": 3,
        "DONE": 4,
        "readyState": 4,
        "status": 200,
        "timeout": 0,
        "withCredentials": true,
        "upload": {},
        "_aborted": false,
        "_hasError": false,
        "_method": "POST",
        "_perfKey": "network_XMLHttpRequest_1004",
        "_response": "{\"data\":{\"login\":{\"token\":\"PjDPlfDrUCvuPM0E8Sgjca6laJS0G4ReI3lGtgkC\"}}}",
        "_url": "https://id-staging.sanspaper.com/graphql",
        "_timedOut": false,
        "_trackingName": 1004,
        "_incrementalEvents": true,
        "_performanceLogger": {
          "_timespans": {
            "network_XMLHttpRequest_1001": {
              "startTime": 1067.5,
              "endTime": 1148.7000000001863,
              "totalTime": 81.20000000018626
            },
            "network_XMLHttpRequest_1002": {
              "startTime": 1067.8000000002794,
              "endTime": 1147.2000000001863,
              "totalTime": 79.39999999990687
            },
            "network_XMLHttpRequest_1003": {
              "startTime": 1068.2000000001863,
              "endTime": 1148.5,
              "totalTime": 80.29999999981374
            },
            "network_XMLHttpRequest_1004": {
              "startTime": 19380,
              "endTime": 19993.100000000093,
              "totalTime": 613.1000000000931
            }
          },
          "_extras": {},
          "_points": {
            "initializeCore_start": 581.5,
            "initializeCore_end": 590.7000000001863
          },
          "_pointExtras": {},
          "_closed": false
        },
        "responseHeaders": {
          "Server": "Apache/2.4.41 (Ubuntu)",
          "Transfer-Encoding": "Identity",
          "Connection": "Keep-Alive",
          "Content-Type": "application/json",
          "Date": "Wed, 02 Nov 2022 07:35:30 GMT",
          "Cache-Control": "no-cache, private",
          "Vary": "Origin",
          "Keep-Alive": "timeout=5, max=100"
        },
        "_requestId": null,
        "_headers": {
          "accept": "application/json, text/plain, */*",
          "content-type": "application/json"
        },
        "_responseType": "",
        "_sent": true,
        "_lowerCaseResponseHeaders": {
          "server": "Apache/2.4.41 (Ubuntu)",
          "transfer-encoding": "Identity",
          "connection": "Keep-Alive",
          "content-type": "application/json",
          "date": "Wed, 02 Nov 2022 07:35:30 GMT",
          "cache-control": "no-cache, private",
          "vary": "Origin",
          "keep-alive": "timeout=5, max=100"
        },
        "_subscriptions": [],
        "responseURL": "https://id-staging.sanspaper.com/graphql"
      }
    };

    const token = result.data.data.login.token;
    
    if(token) {
      yield AsyncStorage.setItem('@authenticationToken', token);
      yield put(AppActionInitialize());
      dismissActivityIndicator();
    } else {
      yield put({
        type: USER_ACTION.REDUCER.LOGIN_ERROR,
        payload: 'Invalid Credentials 12345',
      });
      dismissActivityIndicator();
    }

  } catch (error) {
    yield put({
      type: USER_ACTION.REDUCER.LOGIN_ERROR,
      payload: 'Invalid Credentials',
    });
    dismissActivityIndicator();
    console.log('UserSagaLogin error', error);
  }
}

function* UserSagaLogout(): Generator<ReturnYield> {
  try {
    const token = yield getAuthToken();
    yield call<any>(API.user.logout, token);
    AsyncStorage.removeItem('@authenticationToken');
    showInitialScreen();
  } catch (error) {
    console.log('UserSagaLogout error', error);
  }
}

function* UserSagaFetchUserData(): Generator<ReturnYield> {
  
  try {
    console.log('UserSageFetchUserData running...');
    const token = yield getAuthToken();
    const result: any = yield call<any>(API.user.fetchUserData, token);

    yield put({
      type: USER_ACTION.REDUCER.LOAD_USER_DATA,
      payload: result.data.data.me,
    });
  } catch (error) {
    throw error;
  }
}

export default all([
  takeLatest(USER_ACTION.SAGA.LOGIN, UserSagaLogin),
  takeLatest(USER_ACTION.SAGA.LOGOUT, UserSagaLogout),
  takeLatest(USER_ACTION.SAGA.FETCH_USER_DATA, UserSagaFetchUserData),
]);
