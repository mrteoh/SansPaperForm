import { StyleSheet } from 'react-native';
import { Colors } from 'styles/colors';
import { FAMILY, SIZE } from 'styles/font';
export const styles = StyleSheet.create({
  mainContainer: { height: 20, paddingHorizontal: 0 },
  inputContainer: {
    borderBottomWidth: 0,
    height: 20,
  },
  inputText: {
    fontSize: SIZE.REGULAR,
    fontFamily: FAMILY.QUICKSAND_SEMI_BOLD,
    color: Colors.DarkGray,
  },
});
