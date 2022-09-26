import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

import { showAuthenticationScreen } from 'navigation';

import { useSubscription } from '@apollo/client';

// const { data } = useSubscription(COMMENTS_SUBSCRIPTION);



const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text onPress={showAuthenticationScreen}>Notifications Screen</Text>
    </View>
  );
};

export default NotificationsScreen;
