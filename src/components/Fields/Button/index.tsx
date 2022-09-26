import { FieldPropertyIds } from 'constant/fields';
import React from 'react';
import { Button as RNButton } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { getIndexOfPropertyById } from 'screen/MainScreen/FormFields/helpers';
import { FormActionUpdateFieldPropertyValue } from 'store/form';
import { styles } from './styles';

const Button = (props: { fieldProperties: any; id: any }) => {

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

  const onPressButton = () => { };
  return (
    <RNButton
      onPress={onPressButton}
      title={answer ? answer : defaultValue}
      titleStyle={styles.buttonText}
      buttonStyle={styles.buttonContainer}
    />
  );
};

export default Button;
