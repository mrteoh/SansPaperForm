import React, { createRef } from 'react';
import { Button, Input } from 'react-native-elements';
import { styles } from './styles';
import SignatureCapture from 'react-native-signature-capture';
import axios from 'axios';
import RNFetchBlob from 'rn-fetch-blob';
import RNFS from 'react-native-fs';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
  Platform,
} from 'react-native';
import { Colors } from 'styles/colors';
import { userSelectorAuthenticationToken } from 'selector/user';
import { useDispatch, useSelector } from 'react-redux';
import { REACT_APP_GQL_HOST, REACT_APP_PHOTO_HOST } from '@env';
import { FormActionUploadFile, FormActionUploadDraftFile } from 'store/form';
import { formSelectorFormData, formSelectorDraftFields, formSelectorFilledUpFormFields } from 'selector/form';
import { FormActionUpdateFieldPropertyValue, FormActionUpdateDraftFieldPropertyValue } from 'store/form';
import { FieldPropertyIds } from 'constant/fields';

const Signature = (props: { fieldProperties: any; id: any }) => {

  const sign = React.useRef<any>();
  const dispatch = useDispatch();
  const token = useSelector(userSelectorAuthenticationToken);

  const formData = useSelector(formSelectorFormData);
  const draftFields = useSelector(formSelectorDraftFields);
  const filledUpFormFields = useSelector(formSelectorFilledUpFormFields);

  const { fieldProperties, id } = props;

  const answer = props.answer;

  React.useEffect(() => {
    setTheanswer(answer)
  }, [answer]);

  const [signUrl, setSignUrl] = React.useState(null);

  const [theanswer, setTheanswer] = React.useState('');

  const saveSign = () => {
    sign.current.saveImage();
  };

  const resetTheImage = () => {
    setTheanswer('')
  }

  const resetSign = () => {
    setSignUrl(null);

    if (signUrl === null) {
      sign.current.resetImage();
    }

  };

  const _onSaveEvent = async result => {

    setSignUrl(result.encoded);

    var fileData = {
      uri: result.pathName,
      type: 'image/png',
      name: 'photo.png',
      id: id,
    };

    if (answer) {
      dispatch(FormActionUploadDraftFile(fileData));
    } else {
      dispatch(FormActionUploadFile(fileData));
    }

    return;
  };

  const _onDragEvent = () => {
    // This callback will be called when the user enters signature
    console.log('dragged');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.signView}>
        {(signUrl === null && !theanswer) ? (
          <SignatureCapture
            style={styles.signature}
            ref={sign}
            onSaveEvent={_onSaveEvent}
            onDragEvent={_onDragEvent}
            showNativeButtons={false}
            showTitleLabel={false}
            viewMode={'portrait'}
            strokeColor={Colors.DarkRed}
            minStrokeWidth={3}
            maxStrokeWidth={3}
            saveImageFileInExtStorage={true}
          />

        ) : (
          <View style={styles.signatureContainer}>
            <Image
              style={styles.signatureImage}
              resizeMode={'cover'}
              source={{ uri: theanswer ? `${REACT_APP_PHOTO_HOST}/${theanswer}` : `data:image/jpeg;base64,${signUrl}` }}
            />
          </View>
        )}

        {
          (!theanswer || formData.is_draft == 1) &&
          <View style={styles.buttonRow}>
            <Button
              onPress={(formData.is_draft == 1 && !signUrl) ? resetTheImage : resetSign}
              title="Reset"
              titleStyle={styles.buttonText}
              buttonStyle={styles.button}
            />

            {
              !signUrl && (!theanswer) && (
                <Button
                  onPress={saveSign}
                  title="Save"
                  titleStyle={styles.buttonText}
                  buttonStyle={styles.button}
                />
              )
            }
          </View>

        }
      </View>
    </SafeAreaView>
  );
};
export default Signature;
