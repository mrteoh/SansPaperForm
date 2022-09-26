//library
import React from 'react';
import {View, ActivityIndicator} from 'react-native';

//styles
import styles from './styles';

interface MainScreenProps {}

class ActivityIndicatorOverlay extends React.Component<MainScreenProps> {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="White" />
      </View>
    );
  }
}

export default ActivityIndicatorOverlay;
