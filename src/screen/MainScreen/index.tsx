import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {showAuthenticationScreen} from 'navigation';
import {UserActionLogout} from 'store/user';

const MainScreen = () => {
  const dispatch = useDispatch();

  const onPressLogout = () => {
    dispatch(UserActionLogout());
  };

  return (
    <View>
      <Text onPress={showAuthenticationScreen}>Main Screen</Text>
      <Button onPress={onPressLogout} title={'Logout'} />
    </View>
  );
};

export default MainScreen;
