import {Icons} from 'constant/icons';
import React from 'react';
import {Alert, Text, View} from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DropDownPicker from 'react-native-dropdown-picker';
import {styles} from './styles';
import {Colors} from 'styles/colors';
import {FAMILY} from 'styles/font';
import {useDispatch} from 'react-redux';
import {FormActionUpdateFieldPropertyValue} from 'store/form';
import {getIndexOfPropertyById} from 'screen/MainScreen/FormFields/helpers';
import {FieldPropertyIds} from 'constant/fields';

const Multiselect = (props: {fieldProperties: any; id: any}) => {
  const dispatch = useDispatch();
  const {fieldProperties, id} = props;

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
    fieldProperties[
      getIndexOfPropertyById(fieldProperties, FieldPropertyIds.OPTIONS)
    ].value,
  );

  const onValueChange = (_value: any) => {

    let selectedItems: any[] = []
    _value?.map((item: any, key: number) => {
      selectedItems.push(fieldOptions[item-1])
    })
  
    dispatch(
      FormActionUpdateFieldPropertyValue({
        field_id: id,
        property_id: FieldPropertyIds.ANSWER,
        value: selectedItems,
      }),
    );
    // console.log('ey');
    // console.log(selectedItems);
    setValue(_value);
  };

  const [value, setValue] = React.useState([]);

  return (
    <SectionedMultiSelect
      items={fieldOptions}
      IconRenderer={Icon}
      selectText=""
      showDropDowns={true}
      readOnlyHeadings={false}
      onSelectedItemsChange={onValueChange}
      selectedItems={value}
      displayKey="description"
      uniqueKey="id"
      single={false}
      itemFontFamily={{fontFamily: FAMILY.QUICKSAND_SEMI_BOLD}}
      confirmFontFamily={{fontFamily: FAMILY.QUICKSAND_SEMI_BOLD}}
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
