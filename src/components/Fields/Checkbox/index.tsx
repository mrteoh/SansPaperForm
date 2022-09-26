import React from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import CheckB from '@react-native-community/checkbox';
import { Colors } from 'styles/colors';
import { styles } from './styles';
import { FormActionUpdateFieldPropertyValue, FormActionUpdateDraftFieldPropertyValue } from 'store/form';
import { useDispatch, useSelector } from 'react-redux';
import { getIndexOfPropertyById } from 'screen/MainScreen/FormFields/helpers';
import { FieldPropertyIds } from 'constant/fields';
import { formSelectorFormData, formSelectorDraftFields, formSelectorFilledUpFormFields } from 'selector/form';

const Checkbox = (props: { fieldProperties: any; id: any }) => {

  const dispatch = useDispatch();
  const { fieldProperties, id } = props;

  const formData = useSelector(formSelectorFormData);
  const draftFields = useSelector(formSelectorDraftFields);
  const filledUpFormFields = useSelector(formSelectorFilledUpFormFields);

  const theFieldProperties = fieldProperties ? fieldProperties : props.field.fieldProperties;

  const answer = props.answer;

  let answerUuid;

  const fieldOptions = JSON.parse(
    theFieldProperties[
      getIndexOfPropertyById(theFieldProperties, FieldPropertyIds.OPTIONS)
    ].value,
  );

  const [selectedItems, setSelectedItems] = React.useState<any>([]);

  React.useEffect(() => {
    if (answer) {
      setSelectedItems(JSON.parse(answer));
    }
  }, [answer]);

  React.useEffect(() => {
    if (answer) {
      dispatch(
        FormActionUpdateDraftFieldPropertyValue({
          field_id: id,
          property_id: FieldPropertyIds.ANSWER,
          value: selectedItems,
        }),
      );
    } else {
      dispatch(
        FormActionUpdateFieldPropertyValue({
          field_id: id,
          property_id: FieldPropertyIds.ANSWER,
          value: selectedItems,
        }),
      );
    }
  }, [selectedItems]);

  const onPressItem = (item: any) => {
    const isSelected = selectedItems.includes(item);
    isSelected ? removeItem(item) : addItem(item);
  };

  const removeItem = (_item: any) => {
    setSelectedItems(selectedItems.filter((item: any) => item !== _item));
  };

  const addItem = (_item: any) => {
    setSelectedItems((list: any) => [...list, _item]);
  };

  const verifyAnswer = (array, current) => {
    let result = false;

    array.map((item: any, key: number) => {
      if (!result) {
        result = (item == current) ? true : false;
      }
    })

    return result;
  }

  const RenderItems = (_data: { item: any }) => {

    const { item } = _data;
    const index = _data.index;
    const stringifiedItem = JSON.stringify(item);
    const checkValue = selectedItems.includes(stringifiedItem);
    const currentFieldOptions = fieldOptions[index];

    let answerValue;
    let checkAnswerValue;
    let currentAnswerItem;
    let currentAnswerItem_array = [];

    //looping
    if (answer) {
      const theAnswer = JSON.parse(props.answer);

      theAnswer.map((item: any, key: number) => {
        currentAnswerItem = JSON.parse(item);

        currentAnswerItem_array.push(currentAnswerItem.uuid)
      })

      //compare
      checkAnswerValue = verifyAnswer(currentAnswerItem_array, currentFieldOptions.uuid)
    }

    return (
      <TouchableOpacity
        onPress={() => onPressItem(stringifiedItem)}
        style={styles.itemContainer}>
        <CheckB
          onTintColor="transparent"
          value={answer ? checkAnswerValue : checkValue}
          tintColors={{
            true: Colors.DarkRed,
          }}
          onCheckColor={Colors.White}
          onFillColor={Colors.DarkRed}
          style={styles.checkboxContainer}
          disabled={filledUpFormFields && formData.is_draft == 0 ? true : false}
        />
        <Text style={filledUpFormFields && formData.is_draft == 0 ? styles.disable : styles.itemText}>{item.description}</Text>
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

export default Checkbox;
