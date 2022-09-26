import { FieldPropertyIds } from 'constant/fields';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useDispatch } from 'react-redux';
import { getIndexOfPropertyById } from 'screen/MainScreen/FormFields/helpers';
import { FormActionUpdateFieldPropertyValue } from 'store/form';
import { formatTime } from './helpers';
import { styles } from './styles';

const Time = (props: { fieldProperties: any; id: any }) => {
  const dispatch = useDispatch();
  const { fieldProperties, id } = props;

  const defaultValue =
    fieldProperties[
      getIndexOfPropertyById(fieldProperties, FieldPropertyIds.ANSWER)
    ].value ||
    formatTime(
      fieldProperties[
        getIndexOfPropertyById(fieldProperties, FieldPropertyIds.VALUE)
      ].value,
    );

  const [isDatePickerVisible, setIsDatePickerVisible] = React.useState(false);

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
    dispatch(
      FormActionUpdateFieldPropertyValue({
        field_id: id,
        property_id: FieldPropertyIds.ANSWER,
        value: timeFormat,
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
        mode="time"
        onConfirm={onPressConfirm}
        onCancel={toggleDatePicker}
      />
    </View>
  );
};

export default Time;
