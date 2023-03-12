import { FieldPropertyIds } from 'constant/fields';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useDispatch, useSelector} from 'react-redux';
import { getIndexOfPropertyById } from 'screen/MainScreen/FormFields/helpers';
import { FormActionUpdateFieldPropertyValue, FormActionUpdateDraftFieldPropertyValue } from 'store/form';
import { formatTime } from './helpers';
import { styles } from './styles';
import {
  formSelectorFormData,
  formSelectorDraftFields,
  formSelectorFilledUpFormFields,
} from 'selector/form';

const Time = (props: { fieldProperties: any; id: any }) => {
  const dispatch = useDispatch();
  const { fieldProperties, id } = props;

  const formData = useSelector(formSelectorFormData);
  const theFieldProperties = fieldProperties ? fieldProperties : props.field.fieldProperties

  const answer = props.answer;

  const defaultValue =
  theFieldProperties[
      getIndexOfPropertyById(theFieldProperties, FieldPropertyIds.ANSWER)
    ].value ||
    formatTime(
      theFieldProperties[
        getIndexOfPropertyById(theFieldProperties, FieldPropertyIds.VALUE)
      ].value,
    );

  const [isDatePickerVisible, setIsDatePickerVisible] = React.useState(false);
  const [value, setValue] = React.useState('');

  const theDefaultValue = new Date().toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  })
  
  const toggleDatePicker = () => {
    setIsDatePickerVisible(!isDatePickerVisible);
  };

  const onPressConfirm = (time: {
    getHours: () => any;
    getMinutes: () => any;
  }) => {

    let hrs = time.getHours();
    let mins = time.getMinutes();

    let ampm = hrs >= 12 ? 'pm' : 'am';
    hrs = hrs % 12;
    hrs = hrs ? hrs : 12;
    mins = mins < 10 ? '0' + mins : mins;

    const timeFormat = hrs + ':' + mins + ' ' + ampm;

    setValue(timeFormat);

    if (answer || formData.is_draft == 1) {
      dispatch(
        FormActionUpdateDraftFieldPropertyValue({
          field_id: id,
          property_id: FieldPropertyIds.ANSWER,
          value: JSON.stringify(timeFormat),
        }),
      );
    } else {
      dispatch(
        FormActionUpdateFieldPropertyValue({
          field_id: id,
          property_id: FieldPropertyIds.ANSWER,
          value: JSON.stringify(timeFormat),
        }),
      );
    }

    toggleDatePicker()
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleDatePicker}>
        <Text style={styles.dateText}>{answer && !value ? answer && answer.replace(/['"]+/g, '') : value}</Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={onPressConfirm}
        onCancel={toggleDatePicker}
      />
    </View>
  );
};

export default Time;
