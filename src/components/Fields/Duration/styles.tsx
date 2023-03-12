import { StyleSheet } from 'react-native';
import { FAMILY, SIZE } from 'styles/font';
import { Colors } from 'styles/colors';
export const styles = StyleSheet.create({
  mainContainer: {
    height: 30,
    flexDirection: 'row',

    alignItems: 'center',
  },
  containerStyle: {
    width: 40,
    height: 20,
  },
  labelText: {
    fontSize: SIZE.SMALL,
    fontFamily: FAMILY.QUICKSAND_SEMI_BOLD,
    color: Colors.DarkGray,
  },
  inputContainer: {
    height: 20,
    borderWidth: 1,
    borderRadius: 3,
    justifyContent: 'center',
    borderColor: Colors.LightGray,
  },
  inputText: {
    fontSize: SIZE.SMALL,
    fontFamily: FAMILY.QUICKSAND_SEMI_BOLD,
    color: Colors.DarkGray,
    textAlign: 'center',
  },
  disable: {
    fontFamily: FAMILY.QUICKSAND_SEMI_BOLD,
    fontSize: SIZE.SMALL,
    letterSpacing: 0.2,
    color: Colors.Gray,
  },
});
