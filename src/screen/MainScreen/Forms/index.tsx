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
  Image
} from 'react-native';

import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';
import { GET_FORMS, GET_FORMS_GUEST } from 'graphql/queries/form';
import R from 'ramda';
import { styles } from './styles';
import { Colors } from 'styles/colors';
import FormLoader from 'components/FormLoader';
import Fields from 'components/Fields';
import { pushScreenOnFormScreen } from 'navigation/componentNavigation';
import { Screens } from 'constant/ScreenConstants';
import { useDispatch, useSelector } from 'react-redux';
import { FormActionLoadFormData } from 'store/form';
import { selectUserData } from 'selector/user';
import { Icons } from 'constant/icons';

const FormsScreen = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const role = userData.roles && userData.roles[0].label;

  let query;
  let theVariables;

  //guest
  const hasUsers = { OR: [{ column: 'ID', value: parseInt(userData.id) }] };

  query = GET_FORMS;

  theVariables = {
    ...(!parseInt(userData.parent_id) && { adminId: parseInt(userData.id) }),
    ...(parseInt(userData.parent_id) && { hasUsers: hasUsers })
  };

  const { loading, error, data, refetch } = useQuery(query, {
    variables: theVariables
  });

  const [formsList, setFormsList] = React.useState([]);

  console.log('--- data', data)

  React.useEffect(() => {
    setFormsList(data?.forms?.data);
  }, [data]);

  const onPressItem = async (formData: any) => {

    pushScreenOnFormScreen({
      componentId: Screens.FORM_FIELDS_SCREEN,
      passProps: { formData },
    });
  };

  const RenderFormItem: ListRenderItem<any> = ({ item }) => {

    const { name, description } = item;

    return (
      <TouchableOpacity
        onPress={() => onPressItem(item)}
        style={styles.itemContainer}>
        <Text style={styles.itemLabel}>{name}</Text>
        <Text style={styles.itemDescription}>{description}</Text>
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
            <Text style={styles.headerText}>You have no form here yet.</Text>
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

export default FormsScreen;
