import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import ContentLoader, {Rect} from 'react-content-loader/native';
import {Colors} from '../../styles/colors';

function MyLoader(props: any) {
  return (
    <View style={styles.loader}>
      <ContentLoader
        width={340}
        height={84}
        viewBox="0 0 340 84"
        backgroundColor={Colors.ExtraLightGray}
        foregroundColor={Colors.LightGray}
        {...props}>
        <Rect x="0" y="0" rx="3" ry="3" width="67" height="11" />
        <Rect x="76" y="0" rx="3" ry="3" width="140" height="11" />
        <Rect x="127" y="48" rx="3" ry="3" width="53" height="11" />
        <Rect x="187" y="48" rx="3" ry="3" width="72" height="11" />
        <Rect x="18" y="48" rx="3" ry="3" width="100" height="11" />
        <Rect x="0" y="71" rx="3" ry="3" width="37" height="11" />
        <Rect x="18" y="23" rx="3" ry="3" width="140" height="11" />
        <Rect x="166" y="23" rx="3" ry="3" width="173" height="11" />
      </ContentLoader>
    </View>
  );
}

function FormLoader() {
  return (
    <ScrollView contentContainerStyle={styles.formLoader}>
      <MyLoader />
      <MyLoader />
      <MyLoader />
      <MyLoader />
      <MyLoader />
      <MyLoader />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  formLoader: {
    marginTop: 30,
    marginHorizontal: 30,
  },
  loader: {
    marginBottom: 30,
  },
});

export default FormLoader;
