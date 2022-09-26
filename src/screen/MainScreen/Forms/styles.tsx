import { StyleSheet } from 'react-native';
import { FAMILY, SIZE } from 'styles/font';
import { Colors } from 'styles/colors';
import { Spaces } from 'styles/space';
export const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    backgroundColor: Colors.DirtyWhite,
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
  logo: {
    // marginTop: 250
    // width: '50%',
    // height: 150,
    // marginBottom: 20,
  },
  photoContainer: {
    height: '100%',
    // width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: FAMILY.QUICKSAND_REGULAR,
    fontSize: SIZE.SMALL,
    color: Colors.DarkGray,
  },
});
