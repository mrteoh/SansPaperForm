import axios from 'axios';

import {REACT_APP_GQL_HOST} from '@env';
import {FETCH_NEWS} from 'graphql/queries/news';
import {print} from 'graphql';

export const fetchNews = (token: string) => {
  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  const postData = {
    query: print(FETCH_NEWS),
    variables: {},
  };

  return axios.post(`${REACT_APP_GQL_HOST}/graphql`, postData, axiosConfig);
};
