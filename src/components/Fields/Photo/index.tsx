import { FieldPropertyIds } from 'constant/fields';
import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getIndexOfPropertyById } from 'screen/MainScreen/FormFields/helpers';
import { FormActionUpdateFieldPropertyValue, FormActionUpdateDraftFieldPropertyValue } from 'store/form';
import { styles } from './styles';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import { REACT_APP_GQL_HOST, REACT_APP_PHOTO_HOST } from '@env';
import { userSelectorAuthenticationToken } from 'selector/user';
import { formSelectorFormData, formSelectorDraftFields, formSelectorFilledUpFormFields } from 'selector/form';
import { IMAGES } from 'constant/Images';

const Photo = (props: { fieldProperties: any; id: any }) => {

  const [imageruri, setImageruri] = React.useState<any>('');

  const [photoanswer, setPhotoanswer] = React.useState('');

  const dispatch = useDispatch();
  const token = useSelector(userSelectorAuthenticationToken);

  const formData = useSelector(formSelectorFormData);
  const draftFields = useSelector(formSelectorDraftFields);
  const filledUpFormFields = useSelector(formSelectorFilledUpFormFields);

  const { fieldProperties, id } = props;

  const answer = props.answer;

  React.useEffect(() => {
    if (answer) {
      dispatch(
        FormActionUpdateDraftFieldPropertyValue({
          field_id: id,
          property_id: FieldPropertyIds.ANSWER,
          value: answer
        }),
      );
    } else {
      dispatch(
        FormActionUpdateFieldPropertyValue({
          field_id: id,
          property_id: FieldPropertyIds.ANSWER,
          value: answer
        }),
      );
    }
  }, [answer]);

  React.useEffect(() => {

    if (photoanswer) {
      if (answer) {
        dispatch(
          FormActionUpdateDraftFieldPropertyValue({
            field_id: id,
            property_id: FieldPropertyIds.ANSWER,
            value: REACT_APP_PHOTO_HOST + photoanswer,
          }),
        );
      } else {
        dispatch(
          FormActionUpdateFieldPropertyValue({
            field_id: id,
            property_id: FieldPropertyIds.ANSWER,
            value: REACT_APP_PHOTO_HOST + photoanswer,
          }),
        );
      }

    }

  }, [photoanswer]);

  const theFieldProperties = fieldProperties ? fieldProperties : props.field.fieldProperties;

  const defaultValue =
    theFieldProperties[
      getIndexOfPropertyById(theFieldProperties, FieldPropertyIds.ANSWER)
    ].value;

  const DoNothing = () => {

  }

  const ImageUpload = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true

    }).then(image => {
      setImageruri(image.sourceURL ? image.sourceURL : image.path);

      //get filename
      var filename = image.path.replace(/^.*[\\\/]/, '')

      let myImage = {
        uri: image.path,
        name: filename,
        type: image.mime,
      };

      UploadServer(myImage);

    });

    const UploadServer = file => {
      const bodyFormData = new FormData();
      bodyFormData.append(
        'operations',
        JSON.stringify({
          query: `mutation($file: Upload!) { upload(file: $file) }`,
          variables: { file },
        }),
      );
      bodyFormData.append('operationName', '');
      bodyFormData.append('map', JSON.stringify({ file: ['variables.file'] }));
      bodyFormData.append('file', file);

      axios.post(`${REACT_APP_GQL_HOST}/graphql`, bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
        onUploadProgress: (progressEvent: any) => {
        },
      })
        .then((res) => {
          setPhotoanswer(res.data.data.upload);
        })
        .catch((err) => {
        });

    }

  }

  return (
    <View style={styles.photoContainer}>
      <TouchableOpacity style={{ marginTop: 80 }} onPress={() => filledUpFormFields && formData.is_draft == 0 ? DoNothing() : ImageUpload()}>
        <Image
          style={styles.photoImage}
          resizeMode='cover'
          source={
            (answer && !photoanswer) ?
              {
                uri: answer
              } :

              imageruri ?
                {
                  uri: imageruri
                } :
                IMAGES.PHOTO_PLACEHOLDER

          }
        />
      </TouchableOpacity>

    </View>
  );
};

export default Photo;
