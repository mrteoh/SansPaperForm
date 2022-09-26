import {gql} from '@apollo/client';

export const FETCH_NEWS = gql`
  query News {
    news(first: 100) {
      paginatorInfo {
        count
        currentPage
        hasMorePages
        lastItem
        lastPage
        perPage
        total
      }
      data {
        id
        title
        news
        user {
          id
          name
          email
        }
      }
    }
  }
`;
