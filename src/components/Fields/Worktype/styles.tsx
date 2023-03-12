import { StyleSheet } from 'react-native';
import { FAMILY, SIZE } from 'styles/font';
import { Colors } from 'styles/colors';
import { Spaces } from 'styles/space';
export const styles = StyleSheet.create({
  topContainer: {
    marginVertical: Spaces.Medium,
  },
  itemText: {
    fontSize: SIZE.REGULAR,
    fontFamily: FAMILY.QUICKSAND_SEMI_BOLD,
    letterSpacing: 0.2,
  },
  container: {
    position: 'absolute',
    flex: 1,
    left: 0,
    right: 0,
    top: 100,
    bottom: 100,
    borderRadius: 15,
  },
  selectToggle: {
    paddingRight: Spaces.Small,
  },
  button: {
    backgroundColor: Colors.DarkRed,
  },
  chipsWrapper: {
    // marginTop: Spaces.SuperSmall,
  },
  chipContainer: {
    borderColor: 'transparent',
    backgroundColor: Colors.ExtraLightGray,
    height: 30,
  },
  chipText: {
    fontFamily: FAMILY.QUICKSAND_SEMI_BOLD,
    fontSize: SIZE.SMALL,
    letterSpacing: 0.2,
    color: Colors.DarkGray,
  },
  searchBar: {
    backgroundColor: Colors.ExtraLightGray,
  },
  selectToggleText: {
    fontFamily: FAMILY.QUICKSAND_SEMI_BOLD,
    fontSize: SIZE.REGULAR,
    color: Colors.DarkGray,
  },
  confirmText: {
    fontFamily: FAMILY.QUICKSAND_SEMI_BOLD,
    fontSize: SIZE.REGULAR,
    letterSpacing: 0.2,
    paddingVertical: Spaces.SuperSmall,
  },
});
