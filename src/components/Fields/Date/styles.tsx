import { StyleSheet } from 'react-native';
import { FAMILY, SIZE } from 'styles/font';
import { Colors } from 'styles/colors';
export const styles = StyleSheet.create({
  listContainer: {
    paddingLeft: 1,
  },
  dateText: {
    fontSize: SIZE.REGULAR,
    fontFamily: FAMILY.QUICKSAND_SEMI_BOLD,
    color: Colors.DarkGray,
  },
});
