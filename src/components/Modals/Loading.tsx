import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {Overlay} from 'react-native-elements';

export const LoadingModals = (props: {showLoading: any; type: any}) => {
  const {showLoading, type} = props;
  switch (type) {
    case 0:
      return (
        <Overlay overlayStyle={styles.modalContainer} isVisible={showLoading}>
          <ActivityIndicator color={'#5F2167'} size={'large'} />
        </Overlay>
      );

    default:
      return <View />;
  }
};

const styles = StyleSheet.create({
  modalContainer: {
    width: 100,
    height: 100,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
