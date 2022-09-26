import { StyleSheet } from 'react-native';
import { FAMILY, SIZE } from 'styles/font';
import { Colors } from 'styles/colors';
import { Spaces } from 'styles/space';
import { colors } from 'react-native-elements';
export const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    backgroundColor: Colors.White,
    paddingHorizontal: Spaces.Small,
  },
  componentText: {
    flex: 1,
    flexDirection: 'row',
  },
  componentContainer: {
    flex: 1,
    minHeight: 50,
    marginTop: Spaces.Medium,
    borderBottomWidth: 0.3,
    borderBottomColor: Colors.LightGray,
    paddingBottom: Spaces.Small,
  },
  componentLabel: {
    fontFamily: FAMILY.QUICKSAND_SEMI_BOLD,
    fontSize: SIZE.SMALL,
    color: Colors.Gray,
    marginBottom: Spaces.Small,
  },
  requiredLabel: {
    color: Colors.AltRed,
    paddingLeft: Spaces.SuperSmall,
  },
  submitButton: {
    width: 340,
    borderRadius: 10,
    backgroundColor: Colors.DarkRed,
    height: 55,
  },
  submitButtonText: {
    color: Colors.White,
    fontSize: SIZE.REGULAR,
    fontFamily: FAMILY.QUICKSAND_MEDIUM,
  },
  proceedButton: {
    // width: 340,
    paddingHorizontal: Spaces.Small,
    borderRadius: 10,
    backgroundColor: Colors.DarkRed,
  },
  proceedButtonText: {
    color: Colors.White,
    fontSize: SIZE.REGULAR,
    fontFamily: FAMILY.QUICKSAND_MEDIUM,
  },
  resultText: {
    color: Colors.Black,
    fontSize: SIZE.REGULAR,
    fontFamily: FAMILY.QUICKSAND_MEDIUM,
    marginBottom: Spaces.Large,
  },
  footerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Spaces.Medium,
    marginBottom: Spaces.Regular,
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white
  },
});
