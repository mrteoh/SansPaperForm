import { StyleSheet } from 'react-native';
import { FAMILY, SIZE } from 'styles/font';
import { Colors } from 'styles/colors';
import { Spaces } from 'styles/space';
import { colors } from 'react-native-elements';

export const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    backgroundColor: Colors.White,
    // padding: Spaces.Small,
  },
  flatlist: {
    padding: Spaces.Small,
  },
  componentContainer: {
    flex: 1,
    minHeight: 50,
    marginTop: Spaces.Medium,
    borderBottomWidth: 0.2,
    borderBottomColor: Colors.LightGray,
    paddingBottom: Spaces.Small,
  },
  componentLabel: {
    fontFamily: FAMILY.QUICKSAND_SEMI_BOLD,
    fontSize: SIZE.EXTRA_SMALL,
    color: Colors.Gray,
    marginBottom: Spaces.Small,
  },
  itemContainer: {
    backgroundColor: Colors.White,
    marginBottom: Spaces.SuperSuperSmall,
    paddingHorizontal: Spaces.Small,
    paddingVertical: Spaces.Small,
  },
  itemLabel: {
    color: Colors.DarkGray,
    fontFamily: FAMILY.QUICKSAND_SEMI_BOLD,
    fontSize: SIZE.REGULAR,
    flex: 1,
  },
  itemDescription: {
    color: Colors.DarkGray,
    fontFamily: FAMILY.QUICKSAND_REGULAR,
    fontSize: SIZE.SMALL,
    flex: 1,
  },
  dateTimeLabel: {
    color: Colors.LightGray,
    fontFamily: FAMILY.QUICKSAND_SEMI_BOLD,
    fontSize: SIZE.REGULAR,
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: Colors.Green,
    marginLeft: 0
  },

  header: {
    backgroundColor: Colors.DarkRed,
    justifyContent: 'center',
    // paddingHorizontal: 20,
    width: '100%',
  },
  searchContainer: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    // marginHorizontal: 5,
    // padding: 0,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  searchInputContainer: {
    borderRadius: 15,
    backgroundColor: Colors.AltRed,
  },
  searchInput: {
    fontFamily: FAMILY.QUICKSAND_REGULAR,
    fontSize: SIZE.REGULAR,
    letterSpacing: 0.2,
    color: Colors.White,

  },
  filter: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 12,
  },
  filterView: {
    flexDirection: 'row',
    // backgroundColor: Colors.Yellow,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterText: {
    paddingLeft: 10,
    letterSpacing: 0.2,
    fontFamily: FAMILY.QUICKSAND_REGULAR,
    fontSize: SIZE.SMALL,
    color: Colors.White,
  },
});
