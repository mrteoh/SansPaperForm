import { FieldPropertyIds } from 'constant/fields';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getIndexOfPropertyById } from 'screen/MainScreen/FormFields/helpers';
import { FormActionUpdateFieldPropertyValue, FormActionUpdateDraftFieldPropertyValue } from 'store/form';
import { Colors } from 'styles/colors';
import ToggleSwitch from 'toggle-switch-react-native';
import { styles } from './styles';
import { formSelectorFormData, formSelectorDraftFields, formSelectorFilledUpFormFields } from 'selector/form';

const Toggle = (props: { fieldProperties: any; id: any }) => {

  const dispatch = useDispatch();
  const { fieldProperties, id } = props;

  const formData = useSelector(formSelectorFormData);
  const draftFields = useSelector(formSelectorDraftFields);
  const filledUpFormFields = useSelector(formSelectorFilledUpFormFields);

  const theFieldProperties = fieldProperties ? fieldProperties : props.field.fieldProperties

  const [value, setValue] = React.useState('');

  const answer = props.answer;

  useEffect(() => {
    setValue(answer)

    dispatch(
      FormActionUpdateFieldPropertyValue({
        field_id: id,
        property_id: FieldPropertyIds.ANSWER,
        value: answer ? 'true' : 'false',
      }),
    );

  }, [answer]);

  const defaultValue =
    theFieldProperties[
      getIndexOfPropertyById(theFieldProperties, FieldPropertyIds.ANSWER)
    ].value !== ''
      ? theFieldProperties[
        getIndexOfPropertyById(theFieldProperties, FieldPropertyIds.ANSWER)
      ].value
      : 'true'
        ? true
        : false;

  const fieldLabel =
    theFieldProperties[
      getIndexOfPropertyById(theFieldProperties, FieldPropertyIds.LABEL)
    ].value;


  const toggleSwitch = value => {
    setValue(value);

    if (answer) {
      dispatch(
        FormActionUpdateDraftFieldPropertyValue({
          field_id: id,
          property_id: FieldPropertyIds.ANSWER,
          value: JSON.stringify(value),
        }),
      );
    } else {
      dispatch(
        FormActionUpdateFieldPropertyValue({
          field_id: id,
          property_id: FieldPropertyIds.ANSWER,
          value: JSON.stringify(value),
        }),
      );
    }

  };

  return (
    <View style={styles.mainContainer}>

      <ToggleSwitch
        isOn={value == 'true' || value == true ? true : false}
        onColor={Colors.DarkRed}
        offColor={Colors.LightGray}
        label={fieldLabel}
        labelStyle={styles.labelText}
        size="small"
        onToggle={toggleSwitch}
        disabled={filledUpFormFields && formData.is_draft == 0 ? true : false}
      />
    </View>
  );
};

export default Toggle;
