import { useQuery } from '@apollo/client';
import React from 'react';
import { View, StyleSheet, Text, Platform, ListRenderItem, Alert, PermissionsAndroid } from 'react-native';
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
import { FormActionLoadFormData, FormActionSubmitDraftFormData, FormActionUnloadFormData } from 'store/form';
import { formSelectorFilledUpFormFields, formSelectorDraftFields, formSelectorFormData, formSelectorHistoryData } from 'selector/form';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { GQL_DELETE_DRAFT } from 'graphql/mutations/form';
import { print } from 'graphql';
import axios from 'axios';
import { REACT_APP_GQL_HOST } from '@env';
import { userSelectorAuthenticationToken } from 'selector/user';
import { Navigation } from 'react-native-navigation';
import { Screens } from 'constant/ScreenConstants';
import { FormActionLoadHistoryData } from 'store/form';
import { GET_HISTORY_FORMS } from 'graphql/queries/form';
import { selectUserData, selectGeo } from 'selector/user';
import {dismissActivityIndicator, showActivityIndicator} from 'navigation';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';
import Toast from 'react-native-simple-toast';
import {GOOGLE_API_KEY} from '../../../constant/keys';

const DraftFormFieldsScreen = (props: any) => {
  const dispatch = useDispatch();
  const { formData } = props

  const formFields = useSelector(formSelectorDraftFields);
  const filledupformFields = useSelector(formSelectorFilledUpFormFields);
  const theFormData = useSelector(formSelectorFormData);
  const historyData = useSelector(formSelectorHistoryData);
  const userData = useSelector(selectUserData);
  const gps = useSelector(selectGeo);
  const token = useSelector(userSelectorAuthenticationToken);
  const [actionsheetindex, setActionsheetindex] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [address, setAddress] = React.useState('');
  
  const { showActionSheetWithOptions } = useActionSheet();

  React.useEffect(() => {
    dispatch(FormActionLoadFormData(formData));
    return () => {
      dispatch(FormActionUnloadFormData())
    }
  }, []);

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
    //geo coder
    // if(location) {
    //   Geocoder.from(location.coords?.latitude, location.coords?.longitude)
    //   .then(json => {
    //     setAddress(json.results[0].formatted_address)
    //   })
    //   .catch(error => console.warn(error));
    // }
    
  }, [location]);


  const renderItem = ({ item, index }: any) => {
    const theItem = item.field;
    
    //get component name
    let theDescription = item?.field.component?.description;

    // handle radio button
    if (R.has(theDescription.toLowerCase(), Fields)) {
      const { label, fieldActions, fieldProperties } = theItem;

      const FormField: any = Fields[theDescription.toLowerCase()];
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
                FieldElement.props.field.component.description !== 'Header' &&
                FieldElement.props.field.component.description !== 'Label' &&
                <View style={styles.componentText}>
                  <Text style={styles.componentLabel}>{fieldLabel}</Text>
                  {required === 'true' && <Text style={styles.requiredLabel}>*</Text>}
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

  const updateDraft = index => {
    
    //get id
    let newformData = theFormData;

    newformData = {
      ...theFormData,
      id: theFormData.form_id,
      is_draft: index,
      geo: JSON.stringify( { lat: location.coords?.latitude, lng: location.coords?.longitude } )
    }

    dispatch(FormActionSubmitDraftFormData(newformData));
    showConfirmDialog()
    
    const timer = setTimeout(() => {
      refetch().then(res => {
        dispatch(FormActionLoadHistoryData(res.data?.data.fillupForms.data));
        dismissActivityIndicator()
      })
    }, 500);

    return () => {
      clearTimeout(timer)
    };    
  
  }

  const showConfirmDialog = () => {
    return Alert.alert(
      "History",
      "You have updated a draft !",
      [
        // The "Yes" button
        {
          text: "OK",
          onPress: () => {
            //return to previous screen
            Navigation.popTo(Screens.HISTORY_SCREEN);
          },
        },
        // {
        //   text: "No",
        // },
      ]
    );
  };
  
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

  const deleteDraft = index => {
    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const postData = {
      query: print(GQL_DELETE_DRAFT),
      variables: { id: theFormData.id },
    };

    return axios.post(`${REACT_APP_GQL_HOST}/graphql`, postData, axiosConfig);

  }

  const goBack = () => {
    Navigation.popTo(Screens.HISTORY_SCREEN);
  }

  const openActionSheet = () => {
    const options = [
      "Submit",
      "Save as draft",
      "Delete Draft",
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
            updateDraft(buttonIndex);
            return;

          case 1:
            updateDraft(buttonIndex);
            
            return;

          case 2:
            deleteDraft(buttonIndex).then(res => {

              if (!res.data.errors) {
                Alert.alert('', 'The draft is deleted');
                Navigation.popTo(Screens.HISTORY_SCREEN);

                //delete draft index, then dispatch to redux
                let theData = [];

                historyData?.map((item: any, key: number) => {
                  if (item.id !== theFormData.id) {
                    theData.push(item)
                  }
                })

                dispatch(FormActionLoadHistoryData(theData));

              }
            });

            return;

          default:
        }
      }
    );

  }

  const footerComponent = () => {
    return <Button
      buttonStyle={styles.submitButton}
      title={"Submit"}
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

export default DraftFormFieldsScreen;
