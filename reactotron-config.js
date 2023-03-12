import Reactotron, { openInEditor } from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { reactotronRedux as reduxPlugin } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({
    name: 'Sans Paper Form',
  })
  .useReactNative({
    asyncStorage: {
      ignore: ['secret'],
    },
  })
  .use(openInEditor())
  .use(reduxPlugin())
  .use(sagaPlugin())
  .connect();

//debug use
// console.log = reactotron.log;

export default reactotron;
