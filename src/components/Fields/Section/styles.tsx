import {StyleSheet} from 'react-native';
import {FAMILY, SIZE} from 'styles/font';
import {Colors} from 'styles/colors';
export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelText: {
    fontSize: SIZE.SMALL,
    fontFamily: FAMILY.QUICKSAND_SEMI_BOLD,
    color: Colors.DarkGray,
    flex: 1,
    textAlign: 'center',
  },
  section: {
    flex: 2,
    borderWidth: 0.3,
    height: 0,
    borderColor: Colors.DarkGray,
  },
});
