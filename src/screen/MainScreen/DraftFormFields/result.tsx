//library
import { Screens } from 'constant/ScreenConstants';
import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Navigation } from 'react-native-navigation';
import { styles } from './styles';

const ResultScreen = () => {
  const onPressProceed = () => {
    Navigation.popTo(Screens.FORMS_SCREEN);
  };
  return (
    <View style={styles.resultContainer}>
      <Text style={styles.resultText}>Form submitted!</Text>

      <Button
        buttonStyle={styles.proceedButton}
        title="Proceed"
        onPress={onPressProceed}
        titleProps={{}}
        titleStyle={styles.proceedButtonText}
      />
    </View>
  );
};

export default ResultScreen;
