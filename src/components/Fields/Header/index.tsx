import { FieldPropertyIds } from 'constant/fields';
import React from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { getIndexOfPropertyById } from 'screen/MainScreen/FormFields/helpers';
import { FormActionUpdateFieldPropertyValue } from 'store/form';
import { styles } from './styles';

const Header = (props: { fieldProperties: any; id: any }) => {
  const dispatch = useDispatch();
  const { fieldProperties, id } = props;

  const theFieldProperties = fieldProperties ? fieldProperties : props.field.fieldProperties

  const answer = props.answer;

  const defaultValue =
    theFieldProperties[
      getIndexOfPropertyById(theFieldProperties, FieldPropertyIds.TEXT)
    ].value;

  dispatch(
    FormActionUpdateFieldPropertyValue({
      field_id: id,
      property_id: FieldPropertyIds.ANSWER,
      value: defaultValue,
    }),
  );

  return (
    <View style={styles.mainContainer}>
      <Text style={answer ? styles.disable : styles.headerText}> {answer ? answer : defaultValue} </Text>
    </View>
  );
};

export default Header;
