import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import CheckB from '@react-native-community/checkbox';
import {Colors} from 'styles/colors';
import {styles} from './styles';
import {
  FormActionUpdateFieldPropertyValue,
  FormActionUpdateDraftFieldPropertyValue,
} from 'store/form';
import {useDispatch, useSelector} from 'react-redux';
import {getIndexOfPropertyById} from 'screen/MainScreen/FormFields/helpers';
import {FieldPropertyIds} from 'constant/fields';
import {
  formSelectorFormData,
  formSelectorDraftFields,
  formSelectorFilledUpFormFields,
} from 'selector/form';

const Checkbox = (props: {fieldProperties: any; id: any}) => {
  const dispatch = useDispatch();
  const {fieldProperties, id} = props;

  const formData = useSelector(formSelectorFormData);
  const draftFields = useSelector(formSelectorDraftFields);
  const filledUpFormFields = useSelector(formSelectorFilledUpFormFields);

  const theFieldProperties = fieldProperties
    ? fieldProperties
    : props.field.fieldProperties;

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
          value: JSON.stringify(selectedItems),
        }),
      );
    } else {
      dispatch(
        FormActionUpdateFieldPropertyValue({
          field_id: id,
          property_id: FieldPropertyIds.ANSWER,
          value: JSON.stringify(selectedItems),
        }),
      );
    }
  }, [selectedItems]);

  const onPressItem = (uuid: any) => {

    //check if exist
    const check = selectedItems.includes(uuid);

    if(!check) {
      addItem(uuid)
    } else {
      removeItem(uuid)
    }

  };

  const removeItem = (uuid: any) => {
    //restructure array
    setSelectedItems(selectedItems.filter((item: any) => item !== uuid));
  };

  const addItem = (uuid: any) => {
    setSelectedItems((list: any) => [...list, uuid]);
  };

  const verifyAnswer = (array, current) => {
    let result = false;

    array.map((item: any, key: number) => {
      if (!result) {
        result = item == current ? true : false;
      }
    });

    return result;
  };

  const RenderItems = (_data: {item: any}) => {
    const {item} = _data;
    const index = _data.index;
    const checkValue = selectedItems.includes(item.uuid);
    const currentFieldOptions = fieldOptions[index];

    let answerValue;
    let checkAnswerValue;
    let currentAnswerItem;
    let currentAnswerItem_array = [];

    //looping
    if (answer) {
      const theAnswer = JSON.parse(props.answer);

      theAnswer.map((item: any, key: number) => {
        currentAnswerItem_array.push(item);
      });

      //compare
      checkAnswerValue = verifyAnswer(
        currentAnswerItem_array,
        currentFieldOptions.uuid,
      );

    }

    return (
      <View style={styles.itemContainer}>
        <CheckB
          onTintColor="transparent"
          value={checkValue}
          boxType={'square'}
          tintColors={{
            true: Colors.DarkRed,
          }}
          onCheckColor={Colors.White}
          onFillColor={Colors.DarkRed}
          style={styles.checkboxContainer}
          disabled={filledUpFormFields && formData.is_draft == 0 ? true : false}
          onValueChange={() => onPressItem(item.uuid)}
        />
        <TouchableOpacity
          onPress={() => onPressItem(item.uuid)}
          style={styles.touchableContainer}>
          <Text
            style={
              filledUpFormFields && formData.is_draft == 0
                ? styles.disable
                : styles.itemText
            }>
            {item.description}
          </Text>
        </TouchableOpacity>
      </View>
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
