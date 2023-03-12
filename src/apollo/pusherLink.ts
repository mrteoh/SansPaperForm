import { Observable, ApolloLink } from 'apollo-link';
import {getObserver} from './links';

export class PusherLink extends ApolloLink {
  private pusher: any;

  constructor(options: any) {
    super();
    this.pusher = options.pusher;
  }

    request = (operation: any, forward: any): any => {
      const subscribeObservable = new Observable((_observer) => {
        //
      });

      // Capture the super method
      const prevSubscribe = subscribeObservable.subscribe.bind(subscribeObservable);

      // Override subscribe to return an `unsubscribe` object, see
      // https://github.com/apollographql/subscriptions-transport-ws/blob/master/src/client.ts#L182-L212
      subscribeObservable.subscribe = (observerOrNext, onError, onComplete) => {
        prevSubscribe(observerOrNext, onError, onComplete);

        const observer = getObserver(observerOrNext, onError, onComplete);

        let subscriptionChannel: any;

        forward(operation).subscribe({
          next: (data: any) => {
            // If the operation has the subscription channel, it's a subscription
            subscriptionChannel = data?.extensions?.lighthouse_subscriptions.channel ?? null;

            // No subscription found in the response, pipe data through
            if (!subscriptionChannel) {
              observer.next(data);
              observer.complete();

              return;
            }

            this.subscribeToChannel(subscriptionChannel, observer);
          },
        });

        // Return an object that will unsubscribe_if the query was a subscription
        return {
          closed: false,
          unsubscribe: () => {
            subscriptionChannel && this.unsubscribeFromChannel(subscriptionChannel);
          },
        };
      };

      return subscribeObservable;
    };

  subscribeToChannel = (subscriptionChannel: any, observer: any) => {
    this.pusher
      .subscribe(subscriptionChannel)
      .bind('lighthouse-subscription', (payload: any) => {
        if (!payload.more) {
          this.unsubscribeFromChannel(subscriptionChannel);

          observer.complete();
        }

        const result = payload.result;

        if (result) {
          observer.next(result);
        }
      });
  };

  unsubscribeFromChannel = (subscriptionChannel: any) => {
    this.pusher.unsubscribe(subscriptionChannel);
  };
}