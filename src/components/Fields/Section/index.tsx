import React from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { FormActionUpdateFieldPropertyValue } from 'store/form';
import { FieldPropertyIds } from 'constant/fields';
import { getIndexOfPropertyById } from 'screen/MainScreen/FormFields/helpers';
import { styles } from './styles';

const Section = (props: { fieldProperties: any; id: any }) => {

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

  let defaultValue =
    theFieldProperties[
      getIndexOfPropertyById(theFieldProperties, FieldPropertyIds.ANSWER)
    ].value ?
      theFieldProperties[
        getIndexOfPropertyById(theFieldProperties, FieldPropertyIds.ANSWER)
      ].value :
      ' ';            //use blank currently

  dispatch(
    FormActionUpdateFieldPropertyValue({
      field_id: id,
      property_id: FieldPropertyIds.ANSWER,
      value: defaultValue,
    }),
  );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.section} />
      {/* <Text style={styles.labelText}> Section</Text> */}
      <View style={styles.section} />
    </View>
  );
};

export default Section;
