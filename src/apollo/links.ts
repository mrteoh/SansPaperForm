import {createHttpLink} from '@apollo/client';
import {ApolloLink} from 'apollo-link';
import {setContext} from '@apollo/client/link/context';
import AsyncStorage from '@react-native-community/async-storage';
import Pusher from 'pusher-js/react-native';

import {
  REACT_APP_PUSHER_API_KEY,
  REACT_APP_PUSHER_CLUSTER,
  REACT_APP_GQL_HOST,
} from '@env';
import {PusherLink} from './pusherLink';

let authToken = '';

export const getAuthToken = async () => {
  try {
    const authenticationToken = await AsyncStorage.getItem(
      '@authenticationToken',
    );
    return authenticationToken || '';
  } catch (error) {
    return '';
  }
};

/**
 * Cheat to get the token from async/await and put inside pusher link
 */
if (!authToken) {
  (async () => {
    authToken = await getAuthToken();
  })();
}

export const getObserver = (
  observerOrNext: any,
  onError: any,
  onComplete: any,
) => {
  if (typeof observerOrNext === 'function') {
    return {
      next: (v: any) => observerOrNext(v),
      error: (e: any) => onError && onError(e),
      complete: () => onComplete && onComplete(),
    };
  } else {
    return {
      next: (v: any) => observerOrNext.next && observerOrNext.next(v),
      error: (e: any) => observerOrNext.error && observerOrNext.error(e),
      complete: () => observerOrNext.complete && observerOrNext.complete(),
    };
  }
};

const pusherLink = () => {
  return new PusherLink({
    pusher: new Pusher(REACT_APP_PUSHER_API_KEY, {
      cluster: REACT_APP_PUSHER_CLUSTER,
      authEndpoint: `${REACT_APP_GQL_HOST}/graphql/subscriptions/auth`,
      auth: {
        headers: {
          // authorization: `Bearer ${'52|B7mP64h5n9CDYOteNMYTquxKvGG7gzxLnzBfjPlP'}`,
          authorization: `Bearer ${authToken}`,
        },
      },
    }),
  });
};

export const getLinks = () => {
  const httpLink = createHttpLink({
    uri: `${REACT_APP_GQL_HOST}/graphql`,
  });

  const authLink = setContext(async (_, {headers}) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${await getAuthToken()}`,
      },
    };
  });

  // @ts-ignore
  return ApolloLink.from([pusherLink(), authLink.concat(httpLink)]);
};
