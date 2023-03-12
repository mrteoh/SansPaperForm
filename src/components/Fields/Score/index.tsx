import React from 'react';
import {Rating} from 'react-native-elements';
import {styles} from './styles';
import {Colors} from 'styles/colors';
import {useDispatch} from 'react-redux';
import {FormActionUpdateFieldPropertyValue} from 'store/form';
import {getIndexOfPropertyById} from 'screen/MainScreen/FormFields/helpers';
import {FieldPropertyIds} from 'constant/fields';

const Score = (props: {fieldProperties: any; id: any}) => {
  const dispatch = useDispatch();
  const {fieldProperties, id} = props;
  let defaultValue =
    fieldProperties[
      getIndexOfPropertyById(fieldProperties, FieldPropertyIds.ANSWER)
    ].value ||
    fieldProperties[
      getIndexOfPropertyById(fieldProperties, FieldPropertyIds.VALUE)
    ].value;
  const onValueChange = (_value: any) => {
    dispatch(
      FormActionUpdateFieldPropertyValue({
        field_id: id,
        property_id: FieldPropertyIds.ANSWER,
        value: _value,
      }),
    );
  };
  return (
    <Rating
      onFinishRating={onValueChange}
      style={styles.mainContainer}
      imageSize={20}
      startingValue={defaultValue}
      type={'custom'}
      ratingColor={Colors.DarkRed}
    />
  );
};

export default Score;
