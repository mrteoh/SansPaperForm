import { useQuery } from '@apollo/client';
import React from 'react';

import {
  View,
  StyleSheet,
  Text,
  Platform,
  ListRenderItem,
  TouchableOpacity,
  RefreshControl,
  Image,
  PermissionsAndroid,
  Alert
} from 'react-native';

import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';
import { GET_FORMS } from 'graphql/queries/form';
import R from 'ramda';
import { styles } from './styles';
import { Colors } from 'styles/colors';
import FormLoader from 'components/FormLoader';
import Fields from 'components/Fields';
import { pushScreenOnFormScreen } from 'navigation/componentNavigation';
import { Screens } from 'constant/ScreenConstants';
import { useDispatch, useSelector } from 'react-redux';
import { FormActionLoadFormData } from 'store/form';
import { selectUserData, selectGeo } from 'selector/user';
import { Icons } from 'constant/icons';
import { Icon } from 'react-native-elements';
import {userSelectorAuthenticationToken} from 'selector/user';
import { UserActionLogout } from '../../../store/user';
import { AnyArray } from 'immer/dist/internal';
import {
  dismissActivityIndicator,
  showActivityIndicator,
  showInitialScreen,
} from 'navigation';

const NotificationsScreen = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const gps = useSelector(selectGeo);
  const role = userData?.roles && userData?.roles?.label;
  const token = useSelector(userSelectorAuthenticationToken);

  let query;
  let theVariables;

  const [formsList, setFormsList] = React.useState([]);
  console.log('--- formsList',formsList)
  
  //get notificatio ndata
  const hasUsers = { OR: [{ column: 'ID', value: parseInt(userData?.id) }] };

  query = GET_FORMS;

  theVariables = {
    ...(!parseInt(userData?.parent_id) && { adminId: parseInt(userData?.id) }),
    ...(parseInt(userData?.parent_id) && { hasUsers: hasUsers }),
  };

  const { loading, error, data, refetch } = useQuery(query, {
    variables: theVariables
  });
  
  // const onPressItem = async (formData: any) => {

  //   pushScreenOnFormScreen({
  //     componentId: Screens.FORM_FIELDS_SCREEN,
  //     passProps: { formData },
  //   });
  // };

  const RenderFormItem: ListRenderItem<any> = ({ item }) => {

    const { name, description } = item;

    return (
      <TouchableOpacity
        onPress={() => onPressItem(item)}
        style={styles.itemContainer}>

        <View style={styles.titleView}>
          <Text style={styles.itemLabel}>{name}</Text>
          <Text style={styles.itemDescription}>{description}</Text>
        </View>

        <View style={styles.status}>
          <Icon name="navigate-next" color={Colors.Black} />
        </View>
      </TouchableOpacity>
    );
  };

  if (loading) {
    <View style={styles.formContainer}>
      <FormLoader />
    </View>;
  }

  return (

    < View style={styles.formContainer} >

      {
        formsList && formsList.length == 0 &&
        <View style={styles.photoContainer}>
          <Image
            source={Icons.HISTORY_EMPTY_ICON}
            resizeMode="contain"
            style={styles.logo}
          />
          <View>
            <Text style={styles.headerText}>You have no Notification yet.</Text>
          </View>
        </View>
      }

      <KeyboardAwareFlatList
        keyExtractor={item => item.id}
        data={formsList}
        initialNumToRender={500}
        showsVerticalScrollIndicator={false}
        renderItem={RenderFormItem}
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
    </View >
    // </View>
  );
};

export default NotificationsScreen;
