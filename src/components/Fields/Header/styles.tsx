import { StyleSheet } from 'react-native';
import { FAMILY, SIZE } from 'styles/font';
import { Colors } from 'styles/colors';
export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: SIZE.MEDIUM,
    fontFamily: FAMILY.QUICKSAND_SEMI_BOLD,
    color: Colors.DarkGray,
    flex: 1,
    textAlign: 'center',
  },
  disable: {
    fontSize: SIZE.MEDIUM,
    fontFamily: FAMILY.QUICKSAND_SEMI_BOLD,
    color: Colors.Gray,
    flex: 1,
    textAlign: 'center',
  },
});
