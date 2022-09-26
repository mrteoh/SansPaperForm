import {StyleSheet, Platform} from 'react-native';
import {FAMILY, SIZE} from '../../../styles/font';
import {Colors} from '../../../styles/colors';

export default StyleSheet.create({
  /**
   * Styles for Markdown
   */
  body: {
    lineHeight: 29,
    fontFamily: FAMILY.QUICKSAND_REGULAR,
    color: Colors.Black,
    fontSize: SIZE.REGULAR,
  },
  bullet_list_icon: {
    ...Platform.select({
      android: {
        fontSize: 25,
        marginTop: 5,
      },
      ios: {
        fontSize: 40,
        marginTop: 5,
      },
      default: {
        fontSize: 40,
        marginTop: 9,
      },
    }),
  },
  text: {
    letterSpacing: 0.2,
  },
  link: {
    color: Colors.Primary,
    textDecorationLine: 'underline',
  },
});
