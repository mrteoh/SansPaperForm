import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight, Platform, RefreshControl } from 'react-native';
import { styles } from './styles';
import { Icon, Card, SearchBar, Button } from 'react-native-elements';

import { showAuthenticationScreen } from 'navigation';
import { Colors } from 'react-native-paper';
import { useActionSheet } from '@expo/react-native-action-sheet';

const Outbox = ({ passData, passDataSort, passDataAscDesc, searchData }) => {

  const [filterby, setFilterby] = React.useState('All');
  const [sortbydate, setSortbydate] = React.useState('submitted');
  const [sortascdes, setSortascdes] = React.useState('asc');
  const [search, setSearch] = React.useState('');

  //action sheet
  const { showActionSheetWithOptions } = useActionSheet();

  const openFilterTypeActionSheet = () => {
    let result = [];

    const options = [
      "Submitted",
      "Draft",
      "All",
      'Cancel'
    ];

    const destructiveButtonIndex = 0;
    const cancelButtonIndex = options.length - 1;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        //destructiveButtonIndex,
      },
      (buttonIndex) => {
        passData(buttonIndex);

        switch (buttonIndex) {
          case 0:
            setFilterby('Submitted')
            return;

          case 1:
            setFilterby('Draft')
            return;

          case 2:
            setFilterby('All')
            return;

          default:
        }

      }
    );

  }

  const openFilterDateActionSheet = () => {
    let result = [];

    const options = [
      "Submitted Date",
      "Updated Date",
      "Cancel"
    ];

    const destructiveButtonIndex = 0;
    const cancelButtonIndex = options.length - 1;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        //destructiveButtonIndex,
      },
      (buttonIndex) => {
        passDataSort(buttonIndex);

        switch (buttonIndex) {
          case 0:
            setSortbydate('submitted')
            return;

          case 1:
            setSortbydate('updated')
            return;

          case 2:
            return;

          default:
        }

      }
    );

  }

  const onCLickAscDesc = () => {
    sortascdes == 'asc' ? setSortascdes('desc') : setSortascdes('asc')

    passDataAscDesc(sortascdes == 'asc' ? 'desc' : 'asc')
  }

  const updateSearch = e => {
    setSearch(e)
    searchData(e.toLowerCase())
  }

  return (
    <>
      <View style={styles.header}>
        <SearchBar
          placeholder="Search outbox"
          containerStyle={styles.searchContainer}
          inputContainerStyle={styles.searchInputContainer}
          inputStyle={styles.searchInput}
          onChangeText={updateSearch}
          value={search}
        />

        <View style={styles.filterView}>
          <View
            style={{
              flexDirection: 'row',
              paddingLeft: 20,
              alignItems: 'center',
            }}>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => openFilterTypeActionSheet()}
            >
              <View style={styles.filter}>
                {Platform.OS === 'android' ? (
                  <Icon type="antdesign" name="filter" color={Colors.white} />
                ) : (
                  <Icon type="ionicon" name="options-outline" color={Colors.white} />
                )}
                <Text style={styles.filterText}>{filterby}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => openFilterDateActionSheet()}
            >
              <View style={styles.filter}>
                <Icon
                  type="font-awesome"
                  name="sort"
                  color={Colors.white}
                  size={20}
                />
                <Text style={styles.filterText}>{sortbydate}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => onCLickAscDesc()}
            >
              <View style={styles.filter}>
                <Icon
                  type="font-awesome"
                  name={`sort-alpha-asc`}
                  size={18}
                  color={Colors.white}
                />
                <Text style={styles.filterText}>{sortascdes}</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>

      </View>
    </>
  );
};

export default Outbox;
