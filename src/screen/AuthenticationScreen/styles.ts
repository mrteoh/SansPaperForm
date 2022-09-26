import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from 'styles/colors';

const { width } = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Primary,
  },
  logo: {
    width: width - 100,
  },
  icon: {
    paddingTop: 3,
    marginLeft: 10,
  },
  btnTitle: {
    color: Colors.White,
  },
});
