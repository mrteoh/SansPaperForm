import { gql } from '@apollo/client';

export const LOG_OUT = gql`
  mutation User {
    logout {
      id
      token
    }
  }
`;

export const LOG_IN = gql`
  mutation($email: String!, $password: String!, $device_name: String!) {
    login(email: $email, password: $password, device_name: $device_name) {
      token
    }  
  }
`;
