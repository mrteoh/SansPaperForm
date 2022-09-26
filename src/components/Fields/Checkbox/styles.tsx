import { StyleSheet } from 'react-native';
import { FAMILY, SIZE } from 'styles/font';
import { Colors } from 'styles/colors';
import { Spaces } from 'styles/space';
export const styles = StyleSheet.create({
  listContainer: {
    paddingLeft: 1,
  },
  itemContainer: {
    height: 25,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spaces.SuperSmall,
  },
  itemText: {
    fontFamily: FAMILY.QUICKSAND_SEMI_BOLD,
    fontSize: SIZE.SMALL,
    letterSpacing: 0.2,
    color: Colors.DarkGray,
  },
  disable: {
    fontFamily: FAMILY.QUICKSAND_SEMI_BOLD,
    fontSize: SIZE.SMALL,
    letterSpacing: 0.2,
    color: Colors.Gray,
  },
  checkboxContainer: {
    // marginBottom: 1,
    height: 20,
  },
});
