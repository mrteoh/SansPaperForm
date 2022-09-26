//library
import React from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import {Options} from 'react-native-navigation';

//styles
import styles from './styles';

//constants

//navigation
import {showMainScreen} from 'navigation';

const RegisterScreen = () => {
  return (
    <View>
      <Text onPress={showMainScreen}>Register Screen</Text>
    </View>
  );
};

export default RegisterScreen;
