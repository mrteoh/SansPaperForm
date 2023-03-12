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

export const GET_COMPONENTS = gql`
  query getComponents {
    components(first: 50) {
      paginatorInfo {
        count
      }
      data {
        id
        description
        slug
      }
    }
  }
`;

//admin
export const GET_FORMS = gql`
  query getForms ($adminId: ID, $hasUsers: QueryFormsHasUsersWhereHasConditions) {
    forms(
      first: 999, 
      page: 1, 
      admin_id: $adminId,
      name: "%%",
      description: "%%",
      hasUsers: $hasUsers
    ) {
      paginatorInfo {
        count
        currentPage
        firstItem
        hasMorePages
        lastItem
        lastPage
        perPage
        total
      }
      data {
        id
        refno
        uuid
        admin_id
        group_id
        created_from_template_id
        name
        description
        gps_coordinates
        is_locked
        is_draft
        created_at
        updated_at

        group {
          id
          name
        }
        organizations {
          id
          admin_id
          name
        }
        admin {
          id
          user {
            id
            name
            email
          }
        }
        users {
          id
          name
        }

        fields {
          id
          form_id
          component_id
          uuid
          sort_order
          created_at
          updated_at
          component {
            id
            parent_id
            description
            slug
            hint
          }
          fieldProperties {
            id
            uuid
            field_id
            property_id
            value
            created_at
            updated_at
            property {
              id
              description
              slug
              hint
              created_at
              updated_at
            }
          }
          fieldActions {
            id
            event_name
            event_id
            field_id
            property_id
            answer
            condition
            affected_field_uuid
            affected_property_uuid
            value
          }
        }

        template {
          id
          form_id
          hint
        }

      }
    }
  }
`;

//guest
export const GET_FORMS_GUEST = gql`
  query getForms ($hasUser: QueryFormsHasUsersWhereHasConditions!) {
    forms(first: 10, page: 1, hasUsers: $hasUser) {
      paginatorInfo {
        count
        currentPage
        firstItem
        hasMorePages
        lastItem
        lastPage
        perPage
        total
      }
      data {
        id
        name
        admin_id
        description
        fields {
          id
          component_id
          component {
            slug
          }
          fieldProperties {
            id
            uuid
            value
            property_id
          }
          fieldActions {
            id
            field_id
          }
        }
      }
    }
  }
`;

export const GET_HISTORY_FORMS = gql`
  query getHistoryForms($userId: ID!) {
    fillupForms(first: 50, user_id: $userId, page: 1, is_approved: 0, orderBy: [{ column: CREATED_AT, order: DESC }]) {
      paginatorInfo {
        currentPage
        hasMorePages
      }  
      data {
        id
        user_id
        admin_id
        user_id
        form_id
        is_readonly
        is_approved
        is_draft
        approved_by
        geo
        status
        created_at
        updated_at

        user {
          id
          name
          email
        }
  
        form {
          id
          uuid
          name
          description
        }

        fillup_form_fields {
          answer
          created_at
          field_id
          fillup_form_id
          id
          updated_at

          field {
            id
            form_id
            component_id
            uuid
            sort_order
            created_at
            updated_at
            
            fieldProperties {
              created_at
              field_id
              id
              property_id
              updated_at
              uuid
              value
              
              property {
                id
                description
              } 

            }  
            component {
              description
            }
            
          }
        }
      }
    }
  }
`;

//contacts
export const GET_CONTACTS = gql`
  query getContacts ($first: Int, $page: Int, $parent_id: ID, $search: String, $hasOrganizations: QueryUsersHasOrganizationsWhereHasConditions) {
    users(
      first: $first
      page: $page
      parent_id: $parent_id
      name: $search
      hasOrganizations: $hasOrganizations
    ) {
      paginatorInfo {
        count
        currentPage
        firstItem
        hasMorePages
        lastItem
        lastPage
        perPage
        total
      }

      data {
        id
        uuid
        parent_id
        email
        name
        admin {
          user {
            id
            name
          }
        }
        profile {
          id
          first_name
          middle_name
          last_name
          address
          zipcode
        }
      }

    }
  }
`;

// get company
export const GET_COMPANIES = gql`
  query getCompanies ($first: Int, $page: Int, $hasOrganization: QueryCompaniesHasOrganizationWhereHasConditions) {
    companies(
      first: $first
      page: $page
      hasOrganization: $hasOrganization
    ) {
      paginatorInfo {
        count
        currentPage
        firstItem
        hasMorePages
        lastItem
        lastPage
        perPage
        total
      }

      data {
        id
  			description
      }

    }
  }
`;

// get projects
export const GET_PROJECTS = gql`
  query getProjects ($first: Int!, $page: Int, $hasOrganization: QueryProjectsHasOrganizationWhereHasConditions) {
    projects(
      first: $first
      page: $page
      hasOrganization: $hasOrganization
    ) {
      paginatorInfo {
        count
        currentPage
        firstItem
        hasMorePages
        lastItem
        lastPage
        perPage
        total
      }

      data {
        id,
        uuid,
        name
      }

    }
  }
`;

//get worktype
export const GET_WORKTYPE = gql`
  query getWorkplace ($first: Int!, $page: Int, $hasOrganization: QueryWorkTypesHasOrganizationWhereHasConditions) {
    workTypes(
      first: $first
      page: $page
      hasOrganization: $hasOrganization
    ) {
      paginatorInfo {
        count
        currentPage
        firstItem
        hasMorePages
        lastItem
        lastPage
        perPage
        total
      }

      data {
        id,
        uuid,
        name
      }

    }
  }
`;