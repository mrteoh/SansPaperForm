import { FieldPropertyIds } from 'constant/fields';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useDispatch, useSelector } from 'react-redux';
import { getIndexOfPropertyById } from 'screen/MainScreen/FormFields/helpers';
import { FormActionUpdateFieldPropertyValue, FormActionUpdateDraftFieldPropertyValue } from 'store/form';
import { styles } from './styles';
import { formSelectorFormData, formSelectorDraftFields, formSelectorFilledUpFormFields } from 'selector/form';

const Date = (props: { fieldProperties: any; id: any }) => {
  const dispatch = useDispatch();
  const formData = useSelector(formSelectorFormData);

  const draftFields = useSelector(formSelectorDraftFields);
  const filledUpFormFields = useSelector(formSelectorFilledUpFormFields);

  const { fieldProperties, id } = props;

  const theFieldProperties = fieldProperties ? fieldProperties : (props.field ? props.field.fieldProperties : props.fieldProperties);

  const defaultValue =
    theFieldProperties[
        getIndexOfPropertyById(theFieldProperties, FieldPropertyIds.ANSWER)
      ].value ||
      JSON.stringify( theFieldProperties[
        getIndexOfPropertyById(theFieldProperties, FieldPropertyIds.VALUE)
      ].value );

      const [isDatePickerVisible, setIsDatePickerVisible] = React.useState(false);
      const [value, setValue] = React.useState('');

  const answer = props.answer;

  React.useEffect(() => {

    if (answer) {
      dispatch(
        FormActionUpdateDraftFieldPropertyValue({
          field_id: id,
          property_id: FieldPropertyIds.ANSWER,
          value: defaultValue,
        }),
      );
      
    } else {
      dispatch(
        FormActionUpdateFieldPropertyValue({
          field_id: id,
          property_id: FieldPropertyIds.ANSWER,
          value: defaultValue,
        }),
      );
    }

  }, [defaultValue]);

  const toggleDatePicker = () => {
    setIsDatePickerVisible(!isDatePickerVisible);
  };

  const onPressConfirm = (date: {
    getDate: () => any;
    getMonth: () => number;
    getFullYear: () => any;
    getTime: () => any;
  }) => {

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    const dateFormat = year + '-' + month + '-' + day;

    setValue(dateFormat);
    
    if (answer) {
      dispatch(
        FormActionUpdateDraftFieldPropertyValue({
          field_id: id,
          property_id: FieldPropertyIds.ANSWER,
          value: JSON.stringify(dateFormat),
        }),
      );
  
    } else {
      dispatch(
        FormActionUpdateFieldPropertyValue({
          field_id: id,
          property_id: FieldPropertyIds.ANSWER,
          value: JSON.stringify(dateFormat),
        }),
      );
    }


    toggleDatePicker();
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleDatePicker}>
        <Text style={styles.dateText}>{answer && !value ? answer.replace(/['"]+/g, '') : value?.replace(/['"]+/g, '')}</Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={onPressConfirm}
        onCancel={toggleDatePicker}
      />
    </View>
  );
};

export default Date;
