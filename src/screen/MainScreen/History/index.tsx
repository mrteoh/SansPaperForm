//library
import { setLogVerbosity, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  RefreshControl,
  Image
} from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { GET_HISTORY_FORMS } from 'graphql/queries/form';
import { Colors } from '../../../styles/colors';
import { FAMILY, SIZE } from '../../../styles/font';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';
import { Spaces } from '../../../styles/space';
import { selectUserData } from 'selector/user';
import { pushScreenOnHistoryScreen } from 'navigation/componentNavigation';
import { Screens } from 'constant/ScreenConstants';
import Outbox from './Outbox';
import { Icons } from 'constant/icons';
import { FormActionLoadHistoryData } from 'store/form';
import { formSelectorHistoryData } from 'selector/form';
import { Icon } from 'react-native-elements';

const HistoryScreen = () => {
  const dispatch = useDispatch();
  const historyData = useSelector(formSelectorHistoryData);
  // console.log('--- History historyData', historyData)

  const userData = useSelector(selectUserData);

  const [selected, setSelected] = useState(0);
  const [historyForms, setHistoryForms] = useState([]);

  //get user Id
  let getUserId;

  if (userData) {
    getUserId = userData.id;
  }

  const { loading, error, data, refetch } = useQuery(GET_HISTORY_FORMS, {
    variables: {
      userId: getUserId,
    },
  });

  const onPressItem = async (formData: any) => {

    switch (formData.is_draft) {
      case 0:
        pushScreenOnHistoryScreen({
          componentId: Screens.FILLEDUP_FORM_FIELDS_SCREEN,
          passProps: { formData },
        });
        break;

      case 1:
        pushScreenOnHistoryScreen({
          componentId: Screens.DRAFT_FORM_FIELDS_SCREEN,
          passProps: { formData },
        });
        break;

      default:
        break;
    }

  };


  useEffect(() => {
    let result = [];

    //dispatch to redux
    dispatch(FormActionLoadHistoryData(data?.fillupForms?.data));
  }, [data]);

  useEffect(() => {
    //load data from redux 
    setHistoryForms(historyData);
  }, [historyData]);

  const renderHistory = ({ item, index }: any) => {
    return (
      <TouchableOpacity
        onPress={() => onPressItem(item)}
        style={styles.itemContainer}>
        <View style={styles.titleView}>
          <Text style={styles.itemLabel}>{item.form.name} (ID: {item.id})</Text>
          <Text style={styles.itemDescription}>{item.form.description}</Text>
          <Text style={styles.itemSubmitted}>Submitted on {item.created_at.slice(0, -3)}</Text>
          <Text style={styles.itemDescription}>Updated on {item.updated_at.slice(0, -3)}</Text>
        </View>

        <View style={styles.status}>
          <Text style={styles.statusLabel}>{item.is_draft == 0 ? 'Submitted' : 'Draft'}</Text>
          <Icon name="navigate-next" color={Colors.Black} />
        </View>

      </TouchableOpacity>
    );
  };

  const compareName = (a, b) => {

    // converting to uppercase to have case-insensitive comparison
    const name1 = a.is_draft;
    const name2 = b.is_draft;

    let comparison = 0;

    if (name1 > name2) {
      comparison = 1;
    } else if (name1 < name2) {
      comparison = -1;
    }
    return comparison;
  }

  const filterData = value => {
    let result = [];

    //filter data
    if (value == 0 || value == 1) {
      data?.fillupForms?.data.map((item: any, key: number) => {

        if (item.is_draft == value) {
          result.push(item)
        }

      })

      setHistoryForms(result);

    } else {
      //show all datas
      setHistoryForms(data?.fillupForms?.data);
    }

  }

  const sortAscDesc = value => {
    let theData = [];

    data?.fillupForms?.data.map((item: any, key: number) => {
      theData.push(item);
    })

    if (value == 'asc') {
      //sort by id asc
      theData.sort((a, b) => (a.id > b.id) ? 1 : -1)

      setHistoryForms(theData)

    } else {
      //sort by id desc
      theData.sort((a, b) => (a.id > b.id) ? -1 : 1)

      setHistoryForms(theData)
    }

    return data;
  }

  const sortDate = value => {
    let theData = [];

    data?.fillupForms?.data.map((item: any, key: number) => {
      theData.push(item);
    })

    if (value == 0) {
      //sort by created date from newest to oldest
      theData.sort((a, b) => (a.created_at > b.created_at) ? -1 : 1)

      setHistoryForms(theData)

    } else {
      //sort by updated date from newest to oldest
      theData.sort((a, b) => (a.updated_at > b.updated_at) ? -1 : 1)

      setHistoryForms(theData)
    }

    return data;
  }

  const searchData = value => {
    let theData = [];
    let searchResult = [];

    data?.fillupForms?.data.map((item: any, key: number) => {
      theData.push(item);
    })

    theData.map((item: any, key: number) => {
      let position = item.form.name.toLowerCase().search(value);

      if (position > -1) {
        searchResult.push(item)
      }

      setHistoryForms(searchResult)
    })

    return data;

  }

  return (
    <View style={styles.container}>
      <Outbox
        passData={filterData}
        passDataSort={sortDate}
        passDataAscDesc={sortAscDesc}
        searchData={searchData}
      />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>FORM HISTORY</Text>
        <Text style={styles.subText}>Recent</Text>
      </View>

      {
        historyForms && historyForms.length == 0 &&
        <View style={styles.photoContainer}>
          <Image
            source={Icons.HISTORY_EMPTY_ICON}
            resizeMode="contain"
            style={styles.logo}
          />
          <View>
            <Text style={styles.headerText}>You have no form here yet.</Text>
          </View>
        </View>
      }

      <View style={{ paddingTop: 15, flex: 1 }}>
        <KeyboardAwareFlatList
          keyExtractor={item => item.id}
          data={historyForms}
          initialNumToRender={500}
          showsVerticalScrollIndicator={false}
          renderItem={renderHistory}
          removeClippedSubviews={false}
          extraScrollHeight={Platform.OS === 'ios' ? 50 : 0}
          enableOnAndroid={true}
          enableResetScrollToCoords={false}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={refetch}
            />
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 15,
    backgroundColor: Colors.DirtyWhite
  },

  formContainer: {
    flex: 1,
    backgroundColor: Colors.White,
    // padding: Spaces.Small,
  },

  btnContainer: {
    borderRadius: 5,
    borderColor: Colors.AltRed,
  },
  btnText: {
    fontFamily: FAMILY.QUICKSAND_REGULAR,
    color: Colors.AltRed,
  },
  headerContainer: {
    marginHorizontal: 10,
    paddingTop: 20
  },
  headerText: {
    fontFamily: FAMILY.QUICKSAND_REGULAR,
    fontSize: SIZE.SMALL,
    color: Colors.DarkGray,
  },
  subText: {
    fontFamily: FAMILY.QUICKSAND_BOLD,
    fontSize: SIZE.LARGE,
    color: Colors.Gray,
  },
  titleView: {
    flex: 1,
    // marginRight: 10,
  },
  title: {
    fontFamily: FAMILY.QUICKSAND_REGULAR,
    fontSize: SIZE.REGULAR,
    letterSpacing: 0.2,
    color: Colors.DarkGray,
  },
  cardView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.White,
    marginBottom: Spaces.SuperSuperSmall,
    paddingHorizontal: Spaces.Small,
    paddingVertical: Spaces.Small,
  },
  itemLabel: {
    color: Colors.DarkGray,
    fontFamily: FAMILY.QUICKSAND_SEMI_BOLD,
    fontSize: 15,
    flex: 1,
  },
  itemDescription: {
    color: Colors.DarkGray,
    fontFamily: FAMILY.QUICKSAND_REGULAR,
    fontSize: SIZE.SMALL,
    flex: 1,
  },
  itemSubmitted: {
    color: Colors.DarkRed,
    fontFamily: FAMILY.QUICKSAND_REGULAR,
    fontSize: SIZE.SMALL,
    flex: 1,
  },
  logo: {
    // marginTop: 250
    // width: '50%',
    // height: 150,
    // marginBottom: 20,
  },
  photoContainer: {
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusLabel: {
    // color: Colors.DarkRed,
    fontFamily: FAMILY.QUICKSAND_SEMI_BOLD,
    fontSize: SIZE.SMALL,
    // paddingBottom: 5
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingRight: 10,
  },
});

export default HistoryScreen;
