import { gql } from '@apollo/client';

export const FETCH_CONTACTS = gql`
  query ($parent_id: ID, $hasOrganizations: QueryUsersHasOrganizationsWhereHasConditions) {
    users(hasOrganizations: $hasOrganizations, parent_id: $parent_id) {
      data {
        id
        name
        parent_id
        organizations {
          id
          name
        }
      }
    }
  }
`;
