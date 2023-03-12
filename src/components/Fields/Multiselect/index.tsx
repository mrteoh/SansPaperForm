import { Icons } from 'constant/icons';
import React from 'react';
import { Alert, Text, View } from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DropDownPicker from 'react-native-dropdown-picker';
import { styles } from './styles';
import { Colors } from 'styles/colors';
import { FAMILY } from 'styles/font';
import {useDispatch, useSelector} from 'react-redux';
import { FormActionUpdateFieldPropertyValue, FormActionUpdateDraftFieldPropertyValue } from 'store/form';
import { getIndexOfPropertyById } from 'screen/MainScreen/FormFields/helpers';
import { FieldPropertyIds } from 'constant/fields';
import {
  formSelectorFormData,
  formSelectorDraftFields,
  formSelectorFilledUpFormFields,
} from 'selector/form';

const Multiselect = (props: { fieldProperties: any; id: any }) => {
  const dispatch = useDispatch();
  const { fieldProperties, id } = props;

  const formData = useSelector(formSelectorFormData);
  const filledUpFormFields = useSelector(formSelectorFilledUpFormFields);

  const theFieldProperties = fieldProperties ? fieldProperties : props.field.fieldProperties;

  const answer = props.answer;

  const [value, setValue] = React.useState('');

  //answer array
  let currentAnswerItem_array = [];

  if(answer) {
    const theAnswer = JSON.parse(props.answer);

    theAnswer.map((item: any, key: number) => {
      currentAnswerItem_array.push(key+1);
    });
  }

  const {
    container,
    selectToggle,
    button,
    itemText,
    chipsWrapper,
    searchBar,
    confirmText,
    selectToggleText,
    chipText,
    chipContainer,
  } = styles;

  const fieldOptions = JSON.parse(
    theFieldProperties[
      getIndexOfPropertyById(theFieldProperties, FieldPropertyIds.OPTIONS)
    ].value,
  );

  const doNothing = () => {}
  
  const onValueChange = (_value: any) => {
    let selectedItems: any[] = []
    _value?.map((item: any, key: number) => {
      selectedItems.push(fieldOptions[item - 1].uuid)
    })

    setValue(_value);
  
    if (answer || formData.is_draft == 1) {
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

  };
  
  return (
    <SectionedMultiSelect
      items={fieldOptions}
      IconRenderer={Icon}
      selectText=""
      showDropDowns={true}
      readOnlyHeadings={false}
      onSelectedItemsChange={(!filledUpFormFields || formData.is_draft == 1) ? onValueChange : doNothing}
      selectedItems={answer ? (value ? value : currentAnswerItem_array) : value}   //[1, 2]
      displayKey="description"
      uniqueKey="id"
      single={false}
      itemFontFamily={{ fontFamily: FAMILY.QUICKSAND_SEMI_BOLD }}
      confirmFontFamily={{ fontFamily: FAMILY.QUICKSAND_SEMI_BOLD }}
      styles={{
        confirmText,
        container,
        searchBar,
        selectToggle,
        button,
        itemText,
        selectToggleText,
        chipsWrapper,
        chipText,
        chipContainer,
      }}
      searchSelectionColor={'#FFFFFFF'}
    />
  );
};

export default Multiselect;
