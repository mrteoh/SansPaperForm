import { FieldPropertyIds } from 'constant/fields';
import { validate } from 'graphql';
import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useDispatch, useSelector } from 'react-redux';
import { getIndexOfPropertyById } from 'screen/MainScreen/FormFields/helpers';
import { FormActionUpdateFieldPropertyValue, FormActionUpdateDraftFieldPropertyValue } from 'store/form';
import { formatDateTime } from './helpers';
import { styles } from './styles';
import { formSelectorFormData, formSelectorDraftFields, formSelectorFilledUpFormFields } from 'selector/form';

const Datetime = (props: { fieldProperties: any; id: any }) => {
  const formData = useSelector(formSelectorFormData);
  const draftFields = useSelector(formSelectorDraftFields);
  const filledUpFormFields = useSelector(formSelectorFilledUpFormFields);

  const [value, setValue] = React.useState('');

  let answer = '';
  const theFieldProperties = fieldProperties ? fieldProperties : (props.field ? props.field.fieldProperties : props.fieldProperties);

  if (props.answer) {
    answer = JSON.parse(props.answer);
  }

  const dispatch = useDispatch();
  const { fieldProperties, id } = props;
  const [isDatePickerVisible, setIsDatePickerVisible] = React.useState(false);
  const [isTimePickerVisible, setIsTimePickerVisible] = React.useState(false);

  const defaultValue =
    theFieldProperties[
      getIndexOfPropertyById(theFieldProperties, FieldPropertyIds.ANSWER)
    ].value ||
    formatDateTime(
      theFieldProperties[
        getIndexOfPropertyById(theFieldProperties, FieldPropertyIds.VALUE)
      ].value,
    );

  const validateDate = date => {

    var today = new Date();

    date.timeFormat = today.getHours() + ':' + today.getMinutes() + (today.getHours() > 11 ? ' pm' : ' am');
    date.dateFormat = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    return date;
  }

  const theDefaultValue = validateDate(defaultValue);

  if (answer) {
    dispatch(
      FormActionUpdateDraftFieldPropertyValue({
        field_id: id,
        property_id: FieldPropertyIds.ANSWER,
        value: JSON.stringify(theDefaultValue),
      }),
    );
  } else {
    dispatch(
      FormActionUpdateFieldPropertyValue({
        field_id: id,
        property_id: FieldPropertyIds.ANSWER,
        value: JSON.stringify(theDefaultValue),
      }),
    );
  }

  const toggleDatePicker = () => {
    setIsDatePickerVisible(!isDatePickerVisible);
  };

  const toggleTimePicker = () => {
    setIsTimePickerVisible(!isTimePickerVisible);
  };

  const doNothing = () => { }

  const onPressConfirmTime = (time: {
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

    let updatedDefaultValue = {
      timeFormat: timeFormat,
      dateFormat: defaultValue.dateFormat,
    };
    setValue(updatedDefaultValue);

    if (answer) {
      dispatch(
        FormActionUpdateDraftFieldPropertyValue({
          field_id: id,
          property_id: FieldPropertyIds.ANSWER,
          value: JSON.stringify(updatedDefaultValue),
        }),
      );
    } else {
      dispatch(
        FormActionUpdateFieldPropertyValue({
          field_id: id,
          property_id: FieldPropertyIds.ANSWER,
          value: JSON.stringify(updatedDefaultValue),
        }),
      );
    }

    toggleTimePicker();
  };

  const onPressConfirmDate = (date: {
    getDate: () => any;
    getMonth: () => number;
    getFullYear: () => any;
    getTime: () => any;
  }) => {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    const dateFormat = year + '-' + month + '-' + day;

    let updatedDefaultValue = {
      timeFormat: defaultValue.timeFormat,
      dateFormat: dateFormat,
    };
    setValue(updatedDefaultValue);

    if (answer) {
      dispatch(
        FormActionUpdateDraftFieldPropertyValue({
          field_id: id,
          property_id: FieldPropertyIds.ANSWER,
          value: JSON.stringify(updatedDefaultValue),
        }),
      );
    } else {
      dispatch(
        FormActionUpdateFieldPropertyValue({
          field_id: id,
          property_id: FieldPropertyIds.ANSWER,
          value: JSON.stringify(updatedDefaultValue),
        }),
      );
    }

    toggleDatePicker();
  };

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={filledUpFormFields && formData.is_draft == 0 ? doNothing : toggleTimePicker}>
        <Text style={filledUpFormFields && formData.is_draft == 0 ? styles.disabled : styles.dateText}>{(answer && !value) ? answer.timeFormat : (value ? value.timeFormat : defaultValue.timeFormat)}</Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={onPressConfirmTime}
        onCancel={toggleTimePicker}
      />

      <TouchableOpacity style={styles.container} onPress={filledUpFormFields && formData.is_draft == 0 ? doNothing : toggleDatePicker}>
        <Text style={filledUpFormFields && formData.is_draft == 0 ? styles.disabled : styles.dateText}>{(answer && !value) ? answer.dateFormat : (value ? value.dateFormat : defaultValue.dateFormat)}</Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={onPressConfirmDate}
        onCancel={toggleDatePicker}
      />
    </View>
  );
};

export default Datetime;
