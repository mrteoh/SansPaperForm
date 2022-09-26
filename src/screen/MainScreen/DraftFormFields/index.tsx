import { useQuery } from '@apollo/client';
import React from 'react';
import { View, StyleSheet, Text, Platform, ListRenderItem, Alert } from 'react-native';
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
import { selectUserData } from 'selector/user';

const DraftFormFieldsScreen = (props: any) => {

  const dispatch = useDispatch();
  const { formData } = props

  const formFields = useSelector(formSelectorDraftFields);
  const filledupformFields = useSelector(formSelectorFilledUpFormFields);
  const theFormData = useSelector(formSelectorFormData);
  const historyData = useSelector(formSelectorHistoryData);
  const userData = useSelector(selectUserData);

  const token = useSelector(userSelectorAuthenticationToken);
  const [actionsheetindex, setActionsheetindex] = React.useState('');
  const { showActionSheetWithOptions } = useActionSheet();

  React.useEffect(() => {
    dispatch(FormActionLoadFormData(formData));
    return () => {
      dispatch(FormActionUnloadFormData())
    }
  }, []);

  const renderItem = ({ item, index }: any) => {
    const theItem = item.field;

    //get component name
    let theDescription = item?.field.component?.description;

    // handle radio button
    if (R.has(theDescription.toLowerCase(), Fields)) {
      const { label, fieldActions, fieldProperties } = theItem;

      const FormField: any = Fields[theDescription.toLowerCase()];
      const FieldElement = React.createElement(FormField, item);
      const isVisible = fieldProperties[getIndexOfPropertyById(fieldProperties, '210')].value;
      const required = fieldProperties[getIndexOfPropertyById(fieldProperties, '212')].value;
      const fieldLabel = fieldProperties[getIndexOfPropertyById(fieldProperties, '213')].value;

      if (isVisible === 'true') {
        return (
          <View>
            <View style={styles.componentContainer}>
              <View style={styles.componentText}>
                <Text style={styles.componentLabel}>{fieldLabel}</Text>
                {required === 'true' && <Text style={styles.requiredLabel}>*</Text>}
              </View>
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
      is_draft: index
    }

    dispatch(FormActionSubmitDraftFormData(newformData));

    //refetch
    refetch().then(res => {
      dispatch(FormActionLoadHistoryData(res.data?.data.fillupForms.data));
    })
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
        ListFooterComponent={footerComponent}
        ListFooterComponentStyle={styles.footerContainer}
      />

    </View>
  );
};

export default DraftFormFieldsScreen;
