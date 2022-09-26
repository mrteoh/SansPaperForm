import { FieldPropertyIds } from 'constant/fields';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useDispatch } from 'react-redux';
import { getIndexOfPropertyById } from 'screen/MainScreen/FormFields/helpers';
import { FormActionUpdateFieldPropertyValue } from 'store/form';
import { styles } from './styles';

const Date = (props: { fieldProperties: any; id: any }) => {
  const dispatch = useDispatch();
  const { fieldProperties, id } = props;
  const defaultValue =
    fieldProperties[
      getIndexOfPropertyById(fieldProperties, FieldPropertyIds.ANSWER)
    ].value ||
    fieldProperties[
      getIndexOfPropertyById(fieldProperties, FieldPropertyIds.VALUE)
    ].value;

  const [isDatePickerVisible, setIsDatePickerVisible] = React.useState(false);

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

    dispatch(
      FormActionUpdateFieldPropertyValue({
        field_id: id,
        property_id: FieldPropertyIds.ANSWER,
        value: dateFormat,
      }),
    );

    toggleDatePicker();
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleDatePicker}>
        <Text style={styles.dateText}>{defaultValue}</Text>
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
