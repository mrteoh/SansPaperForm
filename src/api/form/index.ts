import axios from 'axios';

import { REACT_APP_GQL_HOST } from '@env';
import { print } from 'graphql';
import { GQL_SUBMIT_FORM_DATA } from 'graphql/mutations/form';
import { GET_HISTORY_FORMS } from 'graphql/queries/form';

export const ApiSubmitFormData = (payload: any) => {
  const { authenticationToken, submitFormData } = payload;

  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authenticationToken}`,
    },
  };

  const postData = {
    query: print(GQL_SUBMIT_FORM_DATA),
    variables: { submitFormData: submitFormData },
  };

  return axios.post(`${REACT_APP_GQL_HOST}/graphql`, postData, axiosConfig);
};

export const ApiUploadFile = (payload: any) => {
  const { authenticationToken, formData } = payload;
  const axiosConfig = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${authenticationToken}`,
    },
  };

  return axios.post(`${REACT_APP_GQL_HOST}/graphql`, formData, axiosConfig);
};
