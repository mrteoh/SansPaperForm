import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FAMILY, SIZE } from 'styles/font';
import { Colors } from 'styles/colors';

interface Props {
  title: string;
}

function HeaderScreen(props: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  headerTitle: {
    color: Colors.White,
    fontFamily: FAMILY.QUICKSAND_MEDIUM,
    fontSize: SIZE.LARGE,
  },
});

export default HeaderScreen;
