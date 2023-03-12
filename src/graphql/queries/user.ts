import { gql } from '@apollo/client';

export interface GetComponent {
  fieldProperties: any;
  fieldActions: any;
  id: string;
  parent_id: string;
  description: string;
  slug: string;
  hint: string;
  created_at: string;
  updated_at: string;
  properties: any[];
  pivot: any;
  component: { slug: string };
}

export const FETCH_USER_DATA = gql`
  query User {
    me {
      id
      name
      email
      phone_number
      parent_id
      organizations {
				id
				name
			}
      roles {
        id
        label
      }  
      profile {
        first_name
        middle_name
        last_name
        date_of_birth
      }
    }
  }
`;

// export const LOG_IN = gql`
//   mutation Login($email: String!, $password: String!, $device_name: String!) {
//     login(email: $email, password: $password, device_name: $device_name) {
//       token
//     }
//   }
// `;
