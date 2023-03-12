import {all, call, put, takeLatest} from 'redux-saga/effects';
import {getAuthToken} from '../../apollo/links';
import {NEWS_ACTION} from './actions';
import {fetchNews} from 'api/news';

type ReturnYield = any;

function* onFetchNews(): Generator<ReturnYield> {
  
  try {
    const token = yield getAuthToken();
    console.log('--- token', token)

    // const result: any = yield call<any>(fetchNews, token);
    
    // hardcode
    const result = {
      "data": {
        "data": {
          "news": {
            "paginatorInfo": {
              "count": 1,
              "currentPage": 1,
              "hasMorePages": false,
              "lastItem": 1,
              "lastPage": 1,
              "perPage": 100,
              "total": 1
            },
            "data": [
              {
                "id": "1",
                "title": "Welcome",
                "news": "Welcome to MrTeoh.com",
                "user": {
                  "id": "1",
                  "name": "Africk Teoh",
                  "email": "marcus@sanspaper.com_old"
                }
              }
            ]
          }
        },
        "extensions": {
          "lighthouse_subscriptions": {
            "version": 2,
            "channel": null
          }
        }
      },
      "status": 200,
      "headers": {
        "server": "Apache/2.4.46 (Ubuntu)",
        "transfer-encoding": "Identity",
        "connection": "Keep-Alive",
        "content-type": "application/json",
        "date": "Wed, 02 Nov 2022 07:44:12 GMT",
        "cache-control": "no-cache, private",
        "vary": "Authorization,Origin",
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
          "Content-Type": "application/json",
          "Authorization": "Bearer 0uz31LNRsBmElH5cRvIgsGdz5EyfD0XlAOh266Is"
        },
        "method": "post",
        "url": "https://api-staging.sanspaper.com/graphql",
        "data": "{\"query\":\"query News {\\n  news(first: 100) {\\n    paginatorInfo {\\n      count\\n      currentPage\\n      hasMorePages\\n      lastItem\\n      lastPage\\n      perPage\\n      total\\n    }\\n    data {\\n      id\\n      title\\n      news\\n      user {\\n        id\\n        name\\n        email\\n      }\\n    }\\n  }\\n}\\n\",\"variables\":{}}"
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
        "_perfKey": "network_XMLHttpRequest_1010",
        "_response": "{\"data\":{\"news\":{\"paginatorInfo\":{\"count\":1,\"currentPage\":1,\"hasMorePages\":false,\"lastItem\":1,\"lastPage\":1,\"perPage\":100,\"total\":1},\"data\":[{\"id\":\"1\",\"title\":\"Welcome\",\"news\":\"Welcome to Sanspaper Form\",\"user\":{\"id\":\"1\",\"name\":\"Marcus van Enk\",\"email\":\"marcus@sanspaper.com_old\"}}]}},\"extensions\":{\"lighthouse_subscriptions\":{\"version\":2,\"channel\":null}}}",
        "_url": "https://api-staging.sanspaper.com/graphql",
        "_timedOut": false,
        "_trackingName": 1010,
        "_incrementalEvents": true,
        "_performanceLogger": {
          "_timespans": {
            "network_XMLHttpRequest_1001": {
              "startTime": 1227.6000000000931,
              "endTime": 1290.7999999998137,
              "totalTime": 63.1999999997206
            },
            "network_XMLHttpRequest_1002": {
              "startTime": 1227.8999999999069,
              "endTime": 1292.3999999999069,
              "totalTime": 64.5
            },
            "network_XMLHttpRequest_1003": {
              "startTime": 1228.1999999997206,
              "endTime": 1295.5,
              "totalTime": 67.3000000002794
            },
            "network_XMLHttpRequest_1004": {
              "startTime": 1308.1999999997206,
              "endTime": 1495,
              "totalTime": 186.8000000002794
            },
            "network_XMLHttpRequest_1005": {
              "startTime": 1308.6999999997206,
              "endTime": 1526.3999999999069,
              "totalTime": 217.70000000018626
            },
            "network_XMLHttpRequest_1006": {
              "startTime": 1530.2999999998137,
              "endTime": 1541.6999999997206,
              "totalTime": 11.399999999906868
            },
            "network_XMLHttpRequest_1007": {
              "startTime": 5672.899999999907,
              "endTime": 5851,
              "totalTime": 178.10000000009313
            },
            "network_XMLHttpRequest_1008": {
              "startTime": 18019.399999999907,
              "endTime": 18523.5,
              "totalTime": 504.10000000009313
            },
            "network_XMLHttpRequest_1009": {
              "startTime": 18554.299999999814,
              "endTime": 18809.600000000093,
              "totalTime": 255.3000000002794
            },
            "network_XMLHttpRequest_1010": {
              "startTime": 18558,
              "endTime": 18808.69999999972,
              "totalTime": 250.6999999997206
            }
          },
          "_extras": {},
          "_points": {
            "initializeCore_start": 602.8999999999069,
            "initializeCore_end": 610.8999999999069
          },
          "_pointExtras": {},
          "_closed": false
        },
        "responseHeaders": {
          "Server": "Apache/2.4.46 (Ubuntu)",
          "Transfer-Encoding": "Identity",
          "Connection": "Keep-Alive",
          "Content-Type": "application/json",
          "Date": "Wed, 02 Nov 2022 07:44:12 GMT",
          "Cache-Control": "no-cache, private",
          "Vary": "Authorization,Origin",
          "Keep-Alive": "timeout=5, max=100"
        },
        "_requestId": null,
        "_headers": {
          "accept": "application/json, text/plain, */*",
          "content-type": "application/json",
          "authorization": "Bearer 0uz31LNRsBmElH5cRvIgsGdz5EyfD0XlAOh266Is"
        },
        "_responseType": "",
        "_sent": true,
        "_lowerCaseResponseHeaders": {
          "server": "Apache/2.4.46 (Ubuntu)",
          "transfer-encoding": "Identity",
          "connection": "Keep-Alive",
          "content-type": "application/json",
          "date": "Wed, 02 Nov 2022 07:44:12 GMT",
          "cache-control": "no-cache, private",
          "vary": "Authorization,Origin",
          "keep-alive": "timeout=5, max=100"
        },
        "_subscriptions": [],
        "responseURL": "https://api-staging.sanspaper.com/graphql"
      }
      };

    if (result.status === 200) {
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
