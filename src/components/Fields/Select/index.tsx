import React from 'react';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';
import { FAMILY } from 'styles/font';
import { useDispatch, useSelector } from 'react-redux';
import { FormActionUpdateFieldPropertyValue, FormActionUpdateDraftFieldPropertyValue } from 'store/form';
import { getIndexOfPropertyById } from 'screen/MainScreen/FormFields/helpers';
import { FieldPropertyIds } from 'constant/fields';
import { formSelectorFormData, formSelectorDraftFields, formSelectorFilledUpFormFields } from 'selector/form';

const Select = (props: { fieldProperties: any; id: any }) => {
  let answer, answerid;

  const theFieldProperties = props.fieldProperties ? props.fieldProperties : props.field.fieldProperties;

  const formData = useSelector(formSelectorFormData);
  const draftFields = useSelector(formSelectorDraftFields);
  const filledUpFormFields = useSelector(formSelectorFilledUpFormFields);

  if (theFieldProperties) {
    const options = theFieldProperties[getIndexOfPropertyById(theFieldProperties, '209')].value;

    answer = props.answer;

    const theOptions = JSON.parse(options)

    Object.keys(theOptions).map(function (key, index) {

      if (theOptions[key].uuid == answer) {
        answerid = theOptions[key].id
      }

    });

  }

  const dispatch = useDispatch();
  const { fieldProperties, id } = props;
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

  const [value, setValue] = React.useState();

  const fieldOptions = JSON.parse(
    theFieldProperties[
      getIndexOfPropertyById(theFieldProperties, FieldPropertyIds.OPTIONS)
    ].value,
  );

  const onValueChange = (_value: any) => {
    let getUuid = fieldOptions[_value - 1]['uuid'];

    if (answer) {
      dispatch(
        FormActionUpdateDraftFieldPropertyValue({
          field_id: id,
          property_id: FieldPropertyIds.ANSWER,
          value: JSON.stringify(getUuid),
        }),
      );
    } else {
      dispatch(
        FormActionUpdateFieldPropertyValue({
          field_id: id,
          property_id: FieldPropertyIds.ANSWER,
          value: JSON.stringify(getUuid),
        }),
      );
    }

    setValue(_value);
  };

  return (
    <SectionedMultiSelect
      items={fieldOptions}
      IconRenderer={Icon}
      uniqueKey="id"
      selectText=""
      showDropDowns={true}
      displayKey="description"
      readOnlyHeadings={false}
      onSelectedItemsChange={onValueChange}
      selectedItems={(value) ? value : [answerid]}
      single={true}
      itemFontFamily={{ fontFamily: FAMILY.QUICKSAND_SEMI_BOLD }}
      confirmFontFamily={{ fontFamily: FAMILY.QUICKSAND_SEMI_BOLD }}
      disabled={filledUpFormFields && formData.is_draft == 0 ? true : false}
      styles={{
        confirmText,
        container,
        searchBar,
        selectToggle,
        button,
        itemText,
        selectToggleText: { color: filledUpFormFields && formData.is_draft == 0 ? '#b3b3b3' : '#000000' },
        chipsWrapper,
        chipText,
        chipContainer,
      }}
      searchSelectionColor={'#FFFFFFF'}
    />
  );
};

export default Select;
