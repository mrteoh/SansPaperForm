import { StyleSheet } from 'react-native';
import { FAMILY, SIZE } from 'styles/font';
import { Colors } from 'styles/colors';
import { Spaces } from 'styles/space';
export const styles = StyleSheet.create({
  listContainer: {
    paddingLeft: 1,
  },
  dateText: {
    fontSize: SIZE.SMALL,
    fontFamily: FAMILY.QUICKSAND_SEMI_BOLD,
    color: Colors.DarkGray,
  },
  disabled: {
    fontSize: SIZE.SMALL,
    fontFamily: FAMILY.QUICKSAND_SEMI_BOLD,
    color: Colors.LightGray,
  },
  container: {
    marginBottom: Spaces.Small,
  },
});
