import { gql } from '@apollo/client';

export const GQL_SUBMIT_FORM_DATA = gql`
  mutation($submitFormData: UpsertFillupFormInput!) {
    upsertFillupForm(input: $submitFormData) {
      id
      user_id
      form_id
      geo
      status
    }
  }
`;

export const GQL_DELETE_DRAFT = gql`
  mutation($id: ID!) {
    deleteFillupForm(id: $id) {
      id
    }
  }
  
`;
