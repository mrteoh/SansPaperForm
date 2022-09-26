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
import { FormActionLoadFormData, FormActionSubmitFormData, FormActionUnloadFormData } from 'store/form';
import { formSelectorFormFields, formSelectorHistoryData } from 'selector/form';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { GET_HISTORY_FORMS } from 'graphql/queries/form';
import { selectUserData } from 'selector/user';
import { userSelectorAuthenticationToken } from 'selector/user';
import { print } from 'graphql';
import axios from 'axios';
import { REACT_APP_GQL_HOST } from '@env';
import { FormActionLoadHistoryData } from 'store/form';

const FormFieldsScreen = (props: any) => {
  const dispatch = useDispatch();
  const { formData } = props
  const formFields = useSelector(formSelectorFormFields);
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

  const renderItem = ({ item }: any) => {
    const theItem = item.field;

    const theslug = item?.component?.slug;

    if (R.has(theslug, Fields)) {
      const { label, fieldActions, fieldProperties } = item
      const FormField: any = Fields[item.component.slug];
      const properties = formatFieldProperties(item.fieldProperties)
      const actions = formatFieldActions(item.fieldActions)
      const FieldElement = React.createElement(FormField, item);

      const isVisible = fieldProperties[getIndexOfPropertyById(fieldProperties, '210')].value;
      const required = fieldProperties[getIndexOfPropertyById(fieldProperties, '212')].value;
      const fieldLabel = fieldProperties[getIndexOfPropertyById(fieldProperties, '213')].value;

      if (isVisible === 'true') {
        return (
          <View>
            <View style={styles.componentContainer}>

              {/* hide for Header component */}
              {
                FieldElement.props.component.slug !== 'header' &&
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

  const addDraft = index => {

    let newformData = formData;
    newformData = { ...formData, is_draft: index }

    dispatch(FormActionSubmitFormData(newformData));

    //refetch
    const timer = setTimeout(() => {

      refetch().then(res => {
        dispatch(FormActionLoadHistoryData(res.data?.data.fillupForms.data));
      })
    }, 1000);

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
        ListFooterComponent={footerComponent}
        ListFooterComponentStyle={styles.footerContainer}
      />

    </View>
  );
};

export default FormFieldsScreen;
