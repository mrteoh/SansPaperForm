import {gql} from '@apollo/client';

export const GROUP_CREATED = gql`
  subscription {
    groupCreated {
      id
      admin_id
      name
    }
  }
`;
