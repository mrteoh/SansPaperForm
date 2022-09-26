import { StyleSheet } from 'react-native';
import { FAMILY, SIZE } from 'styles/font';
import { Colors } from 'styles/colors';
import { yellow100 } from 'react-native-paper/lib/typescript/styles/colors';
import { colors } from 'react-native-elements';
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.White,
    alignItems: 'center',
  },

  signInText: {
    fontSize: SIZE.LARGE,
    color: Colors.DarkGray,
    width: '85%',
    marginBottom: 20,
    fontFamily: FAMILY.QUICKSAND_BOLD,
  },

  androidSignInText: {
    fontSize: SIZE.LARGE,
    color: Colors.DarkGray,
    width: 300,
    marginBottom: 20,
    fontFamily: FAMILY.QUICKSAND_BOLD,
  },

  welcomeText: {
    color: Colors.DarkGray,
    fontSize: SIZE.REGULAR,
    width: '85%',
    marginBottom: 25,
    fontFamily: FAMILY.QUICKSAND_REGULAR,
  },

  androidWelcomeText: {
    textAlign: 'center',
    color: Colors.DarkGray,
    fontSize: SIZE.REGULAR,
    width: 300,
    marginBottom: 25,
    fontFamily: FAMILY.QUICKSAND_REGULAR,
  },

  inputContainer: {
    width: '85%',
    paddingHorizontal: 0,
    marginBottom: 10,
  },

  androidInputContainer: {
    width: 300,
    paddingHorizontal: 0,
    marginBottom: 10,
  },

  textInputContainer: {
    borderBottomWidth: 2.3,
    borderBottomColor: Colors.Black,
  },
  inputLabelText: {
    fontSize: SIZE.REGULAR,
    color: Colors.DarkGray,
    fontFamily: FAMILY.QUICKSAND_BOLD,
  },
  signInButton: {
    width: 300,
    borderRadius: 10,
    backgroundColor: Colors.DarkRed,
    height: 55,
  },

  androidSignInButton: {
    width: 300,
    borderRadius: 10,
    backgroundColor: Colors.DarkRed,
    height: 55,
  },
  signInButtonText: {
    color: Colors.White,
    fontSize: SIZE.REGULAR,
    fontFamily: FAMILY.QUICKSAND_MEDIUM,
  },
  logo: {
    width: 250,
    height: 150,
    marginBottom: 20,
  },
});
