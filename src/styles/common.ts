import {StyleSheet} from 'react-native';
import {Colors} from './colors';

export const cardStyle = StyleSheet.create({
  shadow: {
    borderRadius: 10,
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  darkCard: {
    backgroundColor: Colors.Surface,
    borderRadius: 10,
    borderWidth: 0,
  },
});
