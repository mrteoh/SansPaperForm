import React from 'react';
import { useQuery } from '@apollo/client';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';
import {FAMILY} from 'styles/font';
import {useDispatch, useSelector} from 'react-redux';
import { GET_PROJECTS } from 'graphql/queries/form';
import { getIndexOfPropertyById } from 'screen/MainScreen/FormFields/helpers';
import { FieldPropertyIds } from 'constant/fields';
import {
  formSelectorFormData,
  formSelectorDraftFields,
  formSelectorFilledUpFormFields,
} from 'selector/form';
import { FormActionUpdateFieldPropertyValue, FormActionUpdateDraftFieldPropertyValue } from 'store/form';
import { selectUserData, selectGeo } from 'selector/user';

const Project = (props: {fieldProperties: any; id: any}) => {
  const dispatch = useDispatch();
  const {fieldProperties, id} = props;

  const userData = useSelector(selectUserData);
  const formData = useSelector(formSelectorFormData);
  const filledUpFormFields = useSelector(formSelectorFilledUpFormFields);
  
  const theFieldProperties = fieldProperties ? fieldProperties : props.field.fieldProperties;

  const organizationsId = userData?.organizations[0].id;

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

  const [selectedSingleItem, setSelectedSingleItem] = React.useState([]);
  const [items, setItems] = React.useState([]);
  const [value, setValue] = React.useState('');

  const answer = props.answer;
  let answer_array = [];

  if(answer) {
    const theAnswer = JSON.parse(answer);
  
    theAnswer.map((item: any, key: number) => {
      answer_array.push(item)
    });
  
  }
  let items_array = [];

  //get contacts
  const { loading, error, data, refetch } = useQuery(GET_PROJECTS, {
    variables: {
      "first": 10,
      "page": 1,
      "hasOrganization": {
        "OR": [
          {
            "column": "ID",
            "value": organizationsId
          }
        ]
      }
    },
  });

  React.useEffect(() => {

    data?.projects.data.map((item: any, key: number) => {
      items_array.push({
        id: key, 
        uuid: key,
        description: item.name
      });
    });

    setItems(items_array);

    }, [data]);

  const doNothing = () => {}

  const onValueChange = (_value: any) => {
    let selectedItems: any[] = []

    _value?.map((item: any, key: number) => {
      selectedItems.push(item)
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

  const onSelectedItemsChange = (selectedItems: any) => {
    setSelectedSingleItem(selectedItems);
  };

  const renderIcon = () => {
    return Icon;
  };

  return (
    <SectionedMultiSelect
      items={items}
      IconRenderer={Icon}
      selectText=""
      showDropDowns={true}
      readOnlyHeadings={false}
      onSelectedItemsChange={filledUpFormFields && formData.is_draft == 0 ? doNothing : onValueChange}
      selectedItems={answer && !value ? answer_array : value}   //[1, 2]
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

export default Project;
