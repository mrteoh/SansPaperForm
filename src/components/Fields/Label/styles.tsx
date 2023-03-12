import { StyleSheet } from 'react-native';
import { FAMILY, SIZE } from 'styles/font';
import { Colors } from 'styles/colors';
export const styles = StyleSheet.create({
  labelText: {
    fontSize: SIZE.REGULAR,
    fontFamily: FAMILY.QUICKSAND_SEMI_BOLD,
    color: Colors.DarkGray,
  },
  disable: {
    fontFamily: FAMILY.QUICKSAND_SEMI_BOLD,
    fontSize: SIZE.SMALL,
    letterSpacing: 0.2,
    color: Colors.Gray,
  },
});
