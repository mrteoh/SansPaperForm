import React from 'react';
import {Colors} from 'styles/colors';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Icon} from 'react-native-elements';
export const EyeIcon = (props: {showPassword: boolean; toggleEye: any}) => {
  const {showPassword, toggleEye} = props;

  return (
    <Icon
      color={Colors.LightGray}
      type="antdesign"
      name={showPassword ? 'eye' : 'eyeo'}
      onLongPress={() => console.log('onLongPress()')}
      onPress={toggleEye}
      size={30}
    />
  );
};
