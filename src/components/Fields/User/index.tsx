import React from 'react';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';
import {FAMILY} from 'styles/font';
import {useDispatch} from 'react-redux';
import {FormActionUpdateFieldPropertyValue} from 'store/form';
import {getIndexOfPropertyById} from 'screen/MainScreen/FormFields/helpers';

const User = (props: {fieldProperties: any; id: any}) => {
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
  // const options = JSON.parse(
  //   fieldProperties[getIndexOfPropertyById(fieldProperties, '209')].value,
  // );

  const [open, setOpen] = React.useState(false);
  const [selectedSingleItem, setSelectedSingleItem] = React.useState([
    {name: 'Apple', value: 'apple'},
  ]);
  const [items, setItems] = React.useState([
    {name: 'Apple', value: 'apple'},
    {name: 'Banana', value: 'banana'},
  ]);

  const onValueChange = _value => {
    dispatch(
      FormActionUpdateFieldPropertyValue({
        field_id: id,
        property_id: '215',
        value: _value,
      }),
    );
  };

  const onSelectedItemsChange = selectedItem => {
    setSelectedSingleItem(selectedItem);
    onValueChange(selectedItem);
  };

  return (
    <SectionedMultiSelect
      items={items}
      IconRenderer={Icon}
      uniqueKey="value"
      selectText=""
      showDropDowns={true}
      readOnlyHeadings={false}
      onSelectedItemsChange={onSelectedItemsChange}
      selectedItems={selectedSingleItem}
      single={true}
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

export default User;
