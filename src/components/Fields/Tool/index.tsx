import {Icons} from 'constant/icons';
import React from 'react';
import {Text} from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tool = () => {
  const items = [
    // this is the parent or 'item'
    {
      name: 'Fruits',
      id: 0,
      // these are the children or 'sub items'
      children: [
        {
          name: 'Apple',
          id: 10,
        },
        {
          name: 'Strawberry',
          id: 17,
        },
        {
          name: 'Pineapple',
          id: 13,
        },
        {
          name: 'Banana',
          id: 14,
        },
        {
          name: 'Watermelon',
          id: 15,
        },
        {
          name: 'Kiwi fruit',
          id: 16,
        },
      ],
    },
  ];

  const onSelectedItemsChange = () => {};
  return (
    <SectionedMultiSelect
      IconRenderer={Icon}
      items={items}
      uniqueKey={'id'}
      onSelectedItemsChange={onSelectedItemsChange}
    />
  );
};

export default Tool;
