import { StyleSheet } from 'react-native';
import { Colors } from 'styles/colors';
import { FAMILY, SIZE } from 'styles/font';
import { Spaces } from 'styles/space';
export const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  titleStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  signView: {
    // borderRadius: 5,
    // borderColor: Colors.LightGray,
    // borderStyle: 'dashed',
    // marginBottom: 10,
    // marginLeft: 10,
    // marginRight: 10,
    // flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'flex-start',
    // borderColor: 'red',
    // borderStyle: 'dotted',
    // borderWidth: 2,
    // borderRadius: 1,
    // position: 'relative',
  },
  signatureView: {
    height: '100%',
    // backgroundColor: 'yellow',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderColor: Colors.DarkGray,
    borderStyle: 'dotted',
    borderWidth: 2,
    borderRadius: 1,
    position: 'relative',
  },
  signature: {
    flex: 1,
    height: 200,
  },

  imageView: {
    height: 200,
    // backgroundColor: 'yellow',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderColor: Colors.DarkGray,
    borderStyle: 'dotted',
    borderWidth: 2,
    borderRadius: 1,
    position: 'relative',
  },

  signatureContainer: {
    height: '100%',
    // width: '90%',
    // justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderColor: Colors.DarkGray,
    borderStyle: 'dotted',
    borderWidth: 2,
    borderRadius: 1,
    position: 'relative',
  },

  signatureImage: {
    flex: 1,
    // backgroundColor: Colors.ExtraLightGray,
    width: '100%',
    // height: 150
  },

  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#eeeeee',
    margin: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 50,
  },
  button: {
    height: 35,
    backgroundColor: Colors.DarkRed,
  },
  buttonText: {
    fontSize: SIZE.SMALL,
    fontFamily: FAMILY.QUICKSAND_SEMI_BOLD,
    color: Colors.White,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: Spaces.Medium,
    justifyContent: 'space-evenly',
  },
});
