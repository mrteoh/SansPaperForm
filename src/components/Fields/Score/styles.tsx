import {StyleSheet} from 'react-native';
import {FAMILY, SIZE} from 'styles/font';
export const styles = StyleSheet.create({
  mainContainer: {
    height: 15,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  inputText: {
    fontSize: SIZE.SMALL,
    fontFamily: FAMILY.QUICKSAND_SEMI_BOLD,
  },
});
