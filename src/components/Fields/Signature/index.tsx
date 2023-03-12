import React from 'react';
import {Button} from 'react-native-elements';
import {styles} from './styles';
import SignatureCapture, { SaveEventParams } from 'react-native-signature-capture';
import {SafeAreaView, View, Image, Text} from 'react-native';
import {Colors} from 'styles/colors';
import {useDispatch, useSelector} from 'react-redux';
import {REACT_APP_GQL_HOST, REACT_APP_PHOTO_HOST} from '@env';
import {formSelectorFormData} from 'selector/form';
import {useMutation} from '@apollo/client';
import {uploadFileMutation} from 'api/form/graphql';
import {ReactNativeFile} from 'apollo-upload-client';
import {dismissActivityIndicator, showActivityIndicator} from 'navigation';
import { UpdateFormFieldValue } from 'store/form';
import {
  FormActionUpdateFieldPropertyValue,
  FormActionUpdateDraftFieldPropertyValue,
} from 'store/form';
import {FieldPropertyIds} from 'constant/fields';
import Toast from 'react-native-simple-toast';
import { composeP } from 'ramda';
import axios from 'axios';
import {userSelectorAuthenticationToken} from 'selector/user';

export interface ImageType {
  uri: string;
  name: string;
  type: string;
}

const Signature = (props: {fieldProperties: any; id: any}) => {
  const sign = React.useRef<any>();
  const dispatch = useDispatch();
  const formData = useSelector(formSelectorFormData);
  const token = useSelector(userSelectorAuthenticationToken);

  const [mutate] = useMutation(uploadFileMutation);
  const {id} = props;
  const answer = props.answer;
  
  React.useEffect(() => {
    setTheanswer(answer);
  }, [answer]);

  const [signUrl, setSignUrl] = React.useState<null|string>(null);
  const [theanswer, setTheanswer] = React.useState('');
  const [imagepath, setImagepath] = React.useState('');

  const saveSign = () => {
    sign.current.saveImage();
  };

  const resetTheImage = () => {
    setTheanswer('');
  };

  const resetSign = () => {
    setSignUrl(null);

    if (signUrl === null) {
      sign.current.resetImage();
    }
  };

  const UploadServer = async (file: ImageType) => {
    const bodyFormData = new FormData();

    bodyFormData.append(
      'operations',
      JSON.stringify({
        query: `mutation($file: Upload!) { upload(file: $file) }`,
        variables: {file},
      }),
    );
    bodyFormData.append('operationName', '');
    bodyFormData.append('map', JSON.stringify({file: ['variables.file']}));
    bodyFormData.append('file', file);

    return await axios
      .post(`${REACT_APP_GQL_HOST}/graphql`, bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
        onUploadProgress: (progressEvent: any) => {},
      })
  };

  const _onSaveEvent = async (result: SaveEventParams) => {
    setSignUrl(result.encoded);
    
    const myImage = new ReactNativeFile({
      uri: `file://${result.pathName}`,
      type: 'image/png',
      name: 'photo.png',
    });

    UploadServer(myImage).then(res=> {
      const {data} = res;

      if(data?.data.upload && data?.data.upload.length > 0) {

        if(formData.is_draft == 1) {
          dispatch(
            FormActionUpdateDraftFieldPropertyValue({
              field_id: id,
              property_id: FieldPropertyIds.ANSWER,
              value: JSON.stringify(data?.data.upload)
            }),
          );
        } else {
          dispatch(
            FormActionUpdateFieldPropertyValue({
              field_id: id,
              property_id: FieldPropertyIds.ANSWER,
              value: JSON.stringify(data?.data.upload)
            }),
          );
        }

      }

    })
    .catch(err => {
      console.log(err)

      // android cannot upload image
      if(err) {
        UploadServer(myImage).then(res=> {
          const {data} = res;
    
          if(data?.data.upload && data?.data.upload.length > 0) {

            if(formData.is_draft == 1) {
              dispatch(
                FormActionUpdateDraftFieldPropertyValue({
                  field_id: id,
                  property_id: FieldPropertyIds.ANSWER,
                  value: JSON.stringify(data?.data.upload)
                }),
              );
            } else {
              dispatch(
                FormActionUpdateFieldPropertyValue({
                  field_id: id,
                  property_id: FieldPropertyIds.ANSWER,
                  value: JSON.stringify(data?.data.upload)
                }),
              );
            }

          }
          
        })
      }
    });

    showActivityIndicator();

    dismissActivityIndicator();
  };

  const _onDragEvent = () => {
    // This callback will be called when the user enters signature
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.signView}> */}
        {signUrl === null && !theanswer ? (
          <View style={styles.signatureView}>
            <SignatureCapture
            style={styles.signature}
            ref={sign}
            onSaveEvent={_onSaveEvent}
            onDragEvent={_onDragEvent}
            showNativeButtons={false}
            showTitleLabel={false}
            viewMode={'portrait'}
            strokeColor={Colors.Black}
            minStrokeWidth={3}
            maxStrokeWidth={3}
            saveImageFileInExtStorage={true}
          />
          </View>
        ) : (
          <View style={styles.imageView}>
            <Image
              style={styles.signatureImage}
              resizeMode={'cover'}
              source={{
                uri: theanswer
                  ? `${REACT_APP_PHOTO_HOST}/${theanswer && theanswer.replace(/['"]+/g, '')}`
                  : `data:image/jpeg;base64,${signUrl}`,
              }}
            />
          </View>
        )}

        {(!theanswer || formData.is_draft == 1) && (
          <View style={styles.buttonRow}>
            <Button
              onPress={
                formData.is_draft == 1 && !signUrl ? resetTheImage : resetSign
              }
              title="Reset"
              titleStyle={styles.buttonText}
              buttonStyle={styles.button}
            />

            {!signUrl && !theanswer && (
              <Button
                onPress={saveSign}
                title="Save"
                titleStyle={styles.buttonText}
                buttonStyle={styles.button}
              />
            )}
          </View>
        )}
      {/* </View> */}
    </SafeAreaView>
  );
};
export default Signature;
