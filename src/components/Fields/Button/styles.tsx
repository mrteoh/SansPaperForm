import {StyleSheet} from 'react-native';
import {FAMILY, SIZE} from 'styles/font';
import {Colors} from 'styles/colors';
export const styles = StyleSheet.create({
  buttonContainer: {
    height: 35,
    backgroundColor: Colors.DarkRed,
  },
  buttonText: {
    fontSize: SIZE.SMALL,
    fontFamily: FAMILY.QUICKSAND_SEMI_BOLD,
    color: Colors.White,
  },
});
