import axios from 'axios';
import {useQuery} from '@apollo/client';

import {REACT_APP_GQL_HOST, REACT_APP_LOGIN_GQL_HOST} from '@env';
import {LOG_OUT, LOG_IN} from 'graphql/mutations/user';
import {FETCH_USER_DATA} from 'graphql/queries/user';
import {print} from 'graphql';
import {gql} from '@apollo/client';

export default {
  login(payload: any) {
    const {email, password} = payload;

    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const postData = {
      query: print(LOG_IN),
      variables: {
        email: email,
        password: password,
        device_name: 'mobile',
        recaptcha: '',
      },
    };

    return axios.post(
      `${REACT_APP_LOGIN_GQL_HOST}/graphql`,
      postData,
      axiosConfig,
    );
  },

  logout(token: string) {
    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const postData = {
      query: print(LOG_OUT),
    };

    return axios.post(`${REACT_APP_GQL_HOST}/graphql`, postData, axiosConfig);
  },

  fetchUserData(token: string) {
    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const postData = {
      query: print(FETCH_USER_DATA),
      variables: {},
    };

    return axios.post(`${REACT_APP_GQL_HOST}/graphql`, postData, axiosConfig);
  },
};
