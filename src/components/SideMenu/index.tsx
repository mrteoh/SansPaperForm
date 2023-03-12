import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const SideMenu = ({parentComponentId}) => {
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Text style={styles.bodyText}>Custom Drawer</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
  },

  bodyText: {
    fontSize: 20,
    margin: 20,
    textAlign: 'center',
  },
});

export default SideMenu;
