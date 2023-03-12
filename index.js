/* eslint-disable react-native/no-inline-styles */
/**
 * @format
 */
if (__DEV__) {
  import('./reactotron-config').then(() =>
    console.log('Reactotron Configured'),
  );
}

import {Navigation} from 'react-native-navigation';
import {RNNDrawer} from 'react-native-navigation-drawer-extension';
import React from 'react';

import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {SafeAreaProvider} from 'react-native-safe-area-context';
//Provider
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import {ApolloProvider, InMemoryCache, ApolloClient} from '@apollo/client';
import {getLinks} from 'apollo/links';

//redux
import {rootSaga, rootReducer} from './src/store';
import {appScreens, startApp} from './src/screen';

//react native paper theme
import {theme} from 'styles/papertheme';
import SideMenu from 'components/SideMenu';

import {ActionSheetProvider} from '@expo/react-native-action-sheet';

// reactotron
import Reactotron from './reactotron-config';

const sagaMonitor = Reactotron.createSagaMonitor();
const sagaMiddleware = createSagaMiddleware({sagaMonitor});

let middleware = [applyMiddleware(sagaMiddleware)];

if (global.__REDUX_DEVTOOLS_EXTENSION__) {
  middleware = [...middleware, global.__REDUX_DEVTOOLS_EXTENSION__()];
}
console.disableYellowBox = true;
const store = createStore(
  rootReducer,
  compose(
    ...middleware,
    Reactotron.createEnhancer(),
  ),
);

sagaMiddleware.run(rootSaga);

const client = new ApolloClient({
  link: getLinks(),
  cache: new InMemoryCache(),
});

// Register screens
appScreens.forEach((ScreenComponent, key) => {
  Navigation.registerComponent(
    key,
    () => props => (
      <SafeAreaProvider>
        <ApolloProvider client={client}>
          <Provider store={store}>
            <ActionSheetProvider>
              <PaperProvider theme={theme}>
                <ScreenComponent
                  {...props}
                  style={{backgroundColor: 'white'}}
                />
              </PaperProvider>
            </ActionSheetProvider>
          </Provider>
        </ApolloProvider>
      </SafeAreaProvider>
    ),
    () => ScreenComponent,
  );
});
Navigation.registerComponent('SideMenu', () => RNNDrawer.create(SideMenu));

Navigation.events().registerAppLaunchedListener(() => {
  startApp();
});
