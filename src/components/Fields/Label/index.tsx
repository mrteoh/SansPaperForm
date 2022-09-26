import { FieldPropertyIds } from 'constant/fields';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useDispatch } from 'react-redux';
import { getIndexOfPropertyById } from 'screen/MainScreen/FormFields/helpers';
import { FormActionUpdateFieldPropertyValue } from 'store/form';
import { styles } from './styles';

const Label = (props: { fieldProperties: any; id: any }) => {

  const dispatch = useDispatch();
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

  const defaultValue =
    theFieldProperties[
      getIndexOfPropertyById(theFieldProperties, FieldPropertyIds.TEXT)
    ].value;

  dispatch(
    FormActionUpdateFieldPropertyValue({
      field_id: id,
      property_id: FieldPropertyIds.ANSWER,
      value: answer ? answer : defaultValue,
    }),
  );

  return (
    <View>
      <Text style={answer ? styles.disable : styles.labelText}>{defaultValue}</Text>
    </View>
  );
};

export default Label;
