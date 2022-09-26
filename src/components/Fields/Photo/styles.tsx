import { StyleSheet, Dimensions } from 'react-native';
import { FAMILY, SIZE } from 'styles/font';
import { Colors } from 'styles/colors';
const { width } = Dimensions.get('screen');

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
  overlayText: {
    // fontFamily: questrial,
    // fontSize: regular,
    paddingVertical: 5,
    letterSpacing: 0.2,
  },
  overlayHeaderText: {
    marginBottom: 20,
    alignItems: 'center',
  },
  overlayHeader: {
    alignItems: 'center',
  },

  photoContainer: {
    flex: 1,
    // height: 120,
    // width: '90%',
    marginTop: -50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  photoImage: {
    paddingVertical: 30,
    width: 150,
    height: 150,
    borderRadius: 75
  },

  placeHolder: {
    paddingVertical: 30,
    width: 150,
    height: 150,
    borderRadius: 75
  },

});
