import {StyleSheet} from 'react-native';
import {FAMILY, SIZE} from 'styles/font';
import {Colors} from 'styles/colors';
export const styles = StyleSheet.create({
  mainContainer: {
    height: 30,
  },
  labelText: {
    fontSize: SIZE.SMALL,
    fontFamily: FAMILY.QUICKSAND_SEMI_BOLD,
    color: Colors.DarkGray,
  },
});
