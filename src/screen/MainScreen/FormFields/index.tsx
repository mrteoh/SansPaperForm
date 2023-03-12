import { useQuery } from '@apollo/client';
import React from 'react';
import { View, StyleSheet, Text, Platform, ListRenderItem, PermissionsAndroid, Alert, Linking } from 'react-native';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';
import R from 'ramda';
import { styles } from './styles';
import { Colors } from 'styles/colors';
import FormLoader from 'components/FormLoader';
import Fields from 'components/Fields';
import { formatFieldActions, formatFieldProperties, getDataByItemId, getIndexOfPropertyById } from './helpers';
import { Button } from 'react-native-elements';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import { useDispatch, useSelector } from 'react-redux';
import { FormActionLoadFormData, FormActionSubmitFormData, FormActionUnloadFormData } from 'store/form';
import { formSelectorFormFields, formSelectorHistoryData } from 'selector/form';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { GET_HISTORY_FORMS } from 'graphql/queries/form';
import { selectUserData, selectGeo } from 'selector/user';
import { userSelectorAuthenticationToken } from 'selector/user';
import { print } from 'graphql';
import axios from 'axios';
import { REACT_APP_GQL_HOST } from '@env';
import { FormActionLoadHistoryData } from 'store/form';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';
import Toast from 'react-native-simple-toast';
import {GOOGLE_API_KEY} from '../../../constant/keys';

const FormFieldsScreen = (props: any) => {
  const dispatch = useDispatch();
  const { formData } = props
  const formFields = useSelector(formSelectorFormFields);
  const historyData = useSelector(formSelectorHistoryData);
  const userData = useSelector(selectUserData);
  const gps = useSelector(selectGeo);
  const token = useSelector(userSelectorAuthenticationToken);

  const [actionsheetindex, setActionsheetindex] = React.useState('');
  const { showActionSheetWithOptions } = useActionSheet();
  const [location, setLocation] = React.useState('');
  
  React.useEffect(() => {
    Geocoder.init(GOOGLE_API_KEY);

    Geolocation.getCurrentPosition(
      position => {
        setLocation(position);
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, [gps]);

  React.useEffect(() => {
    dispatch(FormActionLoadFormData(formData));
    return () => {
      dispatch(FormActionUnloadFormData())
    }
  }, []);

  const renderItem = ({ item }: any) => {
    const theslug = item?.component?.slug;
    const theDescription = item?.component?.description;

    if (R.has(theslug, Fields)) {
      const { label, fieldActions, fieldProperties } = item
      const FormField: any = Fields[item.component.slug];
      
      const properties = formatFieldProperties(item.fieldProperties)
      const actions = formatFieldActions(item.fieldActions)
      const FieldElement = React.createElement(FormField, item);
      
      const isVisible = fieldProperties[getIndexOfPropertyById(fieldProperties, '210')]?.value;
      const required = fieldProperties[getIndexOfPropertyById(fieldProperties, '212')]?.value;
      const fieldLabel = fieldProperties[getIndexOfPropertyById(fieldProperties, '213')]?.value;

      if (isVisible === 'true') {
        return (
          <View>
            <View style={styles.componentContainer}>

              {/* hide for Header, Label component */}
              {
                FieldElement.props.component.slug !== 'header' &&
                FieldElement.props.component.slug !== 'label' &&
                <View style={styles.componentText}>
                  <Text style={styles.componentLabel}>{fieldLabel}
                    {(required === 'true') && <Text style={styles.requiredLabel}> *</Text>}
                  </Text>
                </View>
              }

              {FieldElement}
            </View>
          </View>
        );

      }
    }
    return <View />;
  };

  const addDraft = index => {
    let newformData = formData;
    newformData = { 
      ...formData, 
      is_draft: index,
      geo: JSON.stringify( { lat: location.coords?.latitude, lng: location.coords?.longitude } )
     }

    dispatch(FormActionSubmitFormData(newformData));

    //refetch
    const timer = setTimeout(() => {
      refetch().then(res => {
        dispatch(FormActionLoadHistoryData(res.data?.data.fillupForms.data));
      })
    }, 500);

    return () => clearTimeout(timer);
  }

  const refetch = () => {

    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const postData = {
      query: print(GET_HISTORY_FORMS),
      variables: { userId: userData.id },
    };

    return axios.post(`${REACT_APP_GQL_HOST}/graphql`, postData, axiosConfig);

  }

  const openActionSheet = () => {
    const options = [
      "Submit",
      "Save as draft",
      "Cancel",
    ];
    //const destructiveButtonIndex = 0;
    const cancelButtonIndex = options.length - 1;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        //destructiveButtonIndex,
      },
      (buttonIndex) => {
        setActionsheetindex(buttonIndex)

        switch (buttonIndex) {
          case 0:
            addDraft(buttonIndex);
            return;

          case 1:
            addDraft(buttonIndex);
            return;

          case 2:
            return;

          default:
        }
      }
    );

  }

  const footerComponent = () => {
    return <Button
      buttonStyle={styles.submitButton}
      title="Submit"
      onPress={() => openActionSheet()}
      titleProps={{}}
      titleStyle={styles.submitButtonText}
    />
  }

  return (
    <View style={styles.formContainer}>
      <KeyboardAwareFlatList
        keyExtractor={item => item.id}
        data={formFields}
        initialNumToRender={500}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        removeClippedSubviews={false}
        extraScrollHeight={Platform.OS === 'ios' ? 50 : 0}
        enableOnAndroid={true}
        enableResetScrollToCoords={false}
        ListFooterComponent={formFields ? footerComponent : ''}
        ListFooterComponentStyle={styles.footerContainer}
      />

    </View>
  );
};

export default FormFieldsScreen;
