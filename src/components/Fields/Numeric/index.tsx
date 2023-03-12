import { FieldPropertyIds } from 'constant/fields';
import React from 'react';
import { Input } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { getIndexOfPropertyById } from 'screen/MainScreen/FormFields/helpers';
import { FormActionUpdateFieldPropertyValue, FormActionUpdateDraftFieldPropertyValue } from 'store/form';
import { styles } from './styles';
import { formSelectorFormData, formSelectorDraftFields, formSelectorFilledUpFormFields } from 'selector/form';

const Numeric = (props: { fieldProperties: any; id: any }) => {
  const [value, setValue] = React.useState('');
  const [update, setUpdate] = React.useState(false);

  const dispatch = useDispatch();
  const { fieldProperties, id } = props;

  const formData = useSelector(formSelectorFormData);
  const draftFields = useSelector(formSelectorDraftFields);
  const filledUpFormFields = useSelector(formSelectorFilledUpFormFields);

  const theFieldProperties = fieldProperties ? fieldProperties : props.field.fieldProperties

  const answer = props.answer;

  const defaultValue = 
    theFieldProperties[
      getIndexOfPropertyById(theFieldProperties, FieldPropertyIds.TEXT)
    ].value;

  const onValueChange = (_value: any) => {
    setValue(_value);
    setUpdate(true);

    if (answer) {
      dispatch(
        FormActionUpdateDraftFieldPropertyValue({
          field_id: id,
          property_id: FieldPropertyIds.ANSWER,
          value: JSON.stringify(_value),
        }),
      );
    } else {
      dispatch(
        FormActionUpdateFieldPropertyValue({
          field_id: id,
          property_id: FieldPropertyIds.ANSWER,
          value: JSON.stringify(_value),
        }),
      );
    }

  };

  return (
    <Input
      containerStyle={styles.mainContainer}
      inputContainerStyle={styles.inputContainer}
      inputStyle={styles.inputText}
      keyboardType={'numeric'}
      value={(formData.is_draft == 1 && !update) ? answer : (update ? value : answer)}
      onChangeText={onValueChange}
      disabled={filledUpFormFields && formData.is_draft == 0 ? true : false}
    />
  );
};

export default Numeric;
