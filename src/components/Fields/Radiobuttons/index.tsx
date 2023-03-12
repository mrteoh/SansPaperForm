import { Icons } from 'constant/icons';
import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import CheckB from '@react-native-community/checkbox';
import { Colors } from 'styles/colors';
import { styles } from './styles';
import { FormActionUpdateFieldPropertyValue, FormActionUpdateDraftFieldPropertyValue } from 'store/form';
import { useDispatch, useSelector } from 'react-redux';
import { getIndexOfPropertyById } from 'screen/MainScreen/FormFields/helpers';
import { FieldPropertyIds } from 'constant/fields';
import { formSelectorFormData, formSelectorDraftFields, formSelectorFilledUpFormFields } from 'selector/form';

const Radiobuttons = (props: { fieldProperties: any; id: any }) => {
  
  const dispatch = useDispatch();
  const { fieldProperties, id } = props;

  const formData = useSelector(formSelectorFormData);
  const draftFields = useSelector(formSelectorDraftFields);
  const filledUpFormFields = useSelector(formSelectorFilledUpFormFields);
  const theFieldProperties = fieldProperties ? fieldProperties : props.field.fieldProperties;
  const required = theFieldProperties[getIndexOfPropertyById(theFieldProperties, '212')]?.value;

  const answer = props.answer;

  React.useEffect(() => {
    if(answer) {
      setSelectedItem(JSON.parse(answer))
    }
  }, [answer]);

  const fieldOptions = JSON.parse(
    theFieldProperties[
      getIndexOfPropertyById(theFieldProperties, FieldPropertyIds.OPTIONS)
    ].value,
  );

  const [selectedItem, setSelectedItem] = React.useState('');

  React.useEffect(() => {

    if (answer || formData.is_draft == 1) {
      dispatch(
        FormActionUpdateDraftFieldPropertyValue({
          field_id: id,
          property_id: FieldPropertyIds.ANSWER,
          value: JSON.stringify(selectedItem),
        }),
      );
    } else {
      dispatch(
        FormActionUpdateFieldPropertyValue({
          field_id: id,
          property_id: FieldPropertyIds.ANSWER,
          value: JSON.stringify(selectedItem),
        }),
      );
    }

  }, [selectedItem]);

  const DoNothing = () => {

  }

  const onPressItem = (uuid: any) => {
    setSelectedItem([uuid])
  };

  const RenderItems = (_data: { item: any }) => {
    const { item } = _data;
    
    // check if json include uuid
    const checkValue = selectedItem ? (selectedItem[0] == item.uuid) : false;
    const checkAnswerValue = answer === item.uuid;

    return (
      <TouchableOpacity
        onPress={() => (filledUpFormFields && formData.is_draft == 0) ? DoNothing() : onPressItem(item.uuid)}
        style={styles.itemContainer}>
        <CheckB
          onTintColor="transparent"
          value={(answer || selectedItem) ? checkValue : checkAnswerValue}
          tintColors={{
            true: Colors.DarkRed,
          }}
          onCheckColor={Colors.White}
          onFillColor={Colors.DarkRed}
          style={styles.checkboxContainer}
          onValueChange={() => (filledUpFormFields && formData.is_draft == 0) ? DoNothing() : onPressItem(item.uuid)}
          disabled={filledUpFormFields && formData.is_draft == 0 ? true : false}
        />
        <Text style={filledUpFormFields && formData.is_draft == 0 ? styles.disable : styles.itemText}> {item.description}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      data={fieldOptions}
      renderItem={RenderItems}
      showsHorizontalScrollIndicator={false}
      horizontal={false}
      keyExtractor={(item, index) => index.toString()}
      style={styles.listContainer}
    />
  );
};

export default Radiobuttons;
