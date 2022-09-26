/* eslint-disable react-hooks/exhaustive-deps */
//library
import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { styles } from './styles';

//styles
import { showAuthenticationScreen } from 'navigation';
import { AppActionInitialize } from 'store/app';

const InitialScreen = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(AppActionInitialize());
  }, []);

  return (
    <View style={styles.container}>
      <Text onPress={showAuthenticationScreen}>Initial Screen</Text>
    </View>
  );
};

export default InitialScreen;
