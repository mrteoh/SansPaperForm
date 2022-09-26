//library
import React from 'react';
import { View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { pushScreenOnAuthenticationScreen } from 'navigation/componentNavigation';
import { Screens } from 'constant/ScreenConstants';
import styles from './styles';
import { IMAGES } from 'constant/Images';

const AuthenticationScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={IMAGES.WHITE_LOGO}
        style={styles.logo}
        resizeMode="contain"
      />
      <Button
        type="clear"
        onPress={() =>
          pushScreenOnAuthenticationScreen({
            componentId: Screens.LOGIN_SCREEN,
            passProps: {},
          })
        }
        icon={
          <Icon
            name="chevron-right"
            size={15}
            color="white"
            style={styles.icon}
          />
        }
        iconRight
        titleStyle={styles.btnTitle}
        title={'Get started'}
      />
    </View>
  );
};

export default AuthenticationScreen;
