import { FieldPropertyIds } from 'constant/fields';
import React from 'react';
import { Text, View } from 'react-native';
import { Input } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { getIndexOfPropertyById } from 'screen/MainScreen/FormFields/helpers';
import { FormActionUpdateFieldPropertyValue, FormActionUpdateDraftFieldPropertyValue } from 'store/form';
import { styles } from './styles';
import { formSelectorFormData, formSelectorDraftFields, formSelectorFilledUpFormFields } from 'selector/form';

const Duration = (props: { fieldProperties: any; id: any }) => {

  const dispatch = useDispatch();

  const formData = useSelector(formSelectorFormData);
  const draftFields = useSelector(formSelectorDraftFields);
  const filledUpFormFields = useSelector(formSelectorFilledUpFormFields);

  const { fieldProperties, id } = props;

  const answer = props.answer;

  React.useEffect(() => {
    dispatch(
      FormActionUpdateFieldPropertyValue({
        field_id: id,
        property_id: FieldPropertyIds.ANSWER,
        value: defaultValue,
      }),
    );
  }, [defaultValue]);

  const theFieldProperties = fieldProperties ? fieldProperties : props.field.fieldProperties


  let defaultValue = theFieldProperties[
    getIndexOfPropertyById(theFieldProperties, FieldPropertyIds.ANSWER)
  ].value || { hours: '0', minutes: '0' };

  const onHoursChange = (_value: any) => {
    let updateddefaultValue = {
      hours: _value,
      minutes: defaultValue.minutes,
    };

    if (answer) {
      dispatch(
        FormActionUpdateDraftFieldPropertyValue({
          field_id: id,
          property_id: FieldPropertyIds.ANSWER,
          value: updateddefaultValue,
        }),
      );
    } else {
      dispatch(
        FormActionUpdateFieldPropertyValue({
          field_id: id,
          property_id: FieldPropertyIds.ANSWER,
          value: updateddefaultValue,
        }),
      );

    }
  };

  const onMinutesChange = (_value: any) => {
    let updateddefaultValue = {
      hours: defaultValue.hours,
      minutes: _value,
    };

    if (answer) {
      dispatch(
        FormActionUpdateDraftFieldPropertyValue({
          field_id: id,
          property_id: '215',
          value: updateddefaultValue,
        }),
      );
    } else {
      dispatch(
        FormActionUpdateFieldPropertyValue({
          field_id: id,
          property_id: '215',
          value: updateddefaultValue,
        }),
      );

    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.labelText}>Hours:</Text>
      <Input
        containerStyle={styles.containerStyle}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.inputText}
        keyboardType={'numeric'}
        defaultValue={answer ? JSON.parse(answer).hours : defaultValue.hours}
        maxLength={2}
        onChangeText={onHoursChange}
        editable={filledUpFormFields && formData.is_draft == 0 ? false : true}
        style={answer ? styles.disable : styles.inputText}
      />
      <Text style={styles.labelText}>Minutes:</Text>
      <Input
        containerStyle={styles.containerStyle}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.inputText}
        keyboardType={'numeric'}
        defaultValue={answer ? JSON.parse(answer).minutes : defaultValue.minutes}
        maxLength={2}
        onChangeText={onMinutesChange}
        editable={filledUpFormFields && formData.is_draft == 0 ? false : true}
        style={answer ? styles.disable : styles.inputText}
      />
    </View>
  );
};

export default Duration;
