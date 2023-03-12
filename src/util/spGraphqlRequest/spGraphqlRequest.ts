import { GraphQLClient, RequestDocument } from 'graphql-request';
import { SpGraphqlRequestError } from '../SpGraphqlRequestError';
import { REACT_APP_GQL_HOST } from '@env';

export const SP_GRAPHQL_ENDPOINT = `${REACT_APP_GQL_HOST}/graphql`;

const client = new GraphQLClient(SP_GRAPHQL_ENDPOINT);

export async function spGraphqlRequest<Resolved, Rejected>(
  token: string,
  query: RequestDocument,
  variables?: any,
  headers: any = {},
): Promise<Resolved> {
  try {
    const response = await client.request(query, variables, {
      Authorization: `Bearer ${token}`,
      ...headers,
    });
    return response;
  } catch (error: any) {
    console.log('spGraphqlRequest', {error})
    const data = {
      displayMessage: 'Graphql Error',
      query: query?.toString(),
      variables,
      headers,
    };

    throw new SpGraphqlRequestError('UNKNOWN', data)

  }
}
