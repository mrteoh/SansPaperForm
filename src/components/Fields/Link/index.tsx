import {FieldPropertyIds} from 'constant/fields';
import React from 'react';
import {Input} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {getIndexOfPropertyById} from 'screen/MainScreen/FormFields/helpers';
import {FormActionUpdateFieldPropertyValue} from 'store/form';
import {styles} from './styles';

const Link = (props: {fieldProperties: any; id: any}) => {
  const dispatch = useDispatch();
  const {fieldProperties, id} = props;
  let defaultValue =
    fieldProperties[
      getIndexOfPropertyById(fieldProperties, FieldPropertyIds.ANSWER)
    ].value ||
    fieldProperties[
      getIndexOfPropertyById(fieldProperties, FieldPropertyIds.TEXT)
    ].value;
  const onValueChange = (_value: any) => {
    dispatch(
      FormActionUpdateFieldPropertyValue({
        field_id: id,
        property_id: '215',
        value: _value,
      }),
    );
  };
  return (
    <Input
      containerStyle={styles.mainContainer}
      inputContainerStyle={styles.inputContainer}
      inputStyle={styles.inputText}
      keyboardType={'url'}
      value={defaultValue}
      onChangeText={onValueChange}
    />
  );
};

export default Link;
