import {FieldPropertyIds} from 'constant/fields';
import {useActionSheet} from '@expo/react-native-action-sheet';
import React from 'react';
import {View, TouchableOpacity, Image, Platform, Alert, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getIndexOfPropertyById} from 'screen/MainScreen/FormFields/helpers';
import {
  FormActionUpdateFieldPropertyValue,
  FormActionUpdateDraftFieldPropertyValue,
} from 'store/form';
import {styles} from './styles';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';

import {REACT_APP_GQL_HOST, REACT_APP_PHOTO_HOST} from '@env';
import {userSelectorAuthenticationToken} from 'selector/user';
import {
  formSelectorFormData,
  formSelectorDraftFields,
  formSelectorFilledUpFormFields,
} from 'selector/form';
import {IMAGES} from 'constant/Images';
import {
  Camera,
  useCameraDevices,
  useFrameProcessor,
} from 'react-native-vision-camera';
import {scanBarcodes, BarcodeFormat, Barcode} from 'vision-camera-code-scanner';
// import {runOnJS} from 'react-native-reanimated';

export interface ImageType {
  uri: string;
  name: string;
  type: string;
}

const imgWidth = Platform.OS === 'android' ? 500 : 300;
const imgHeight = Platform.OS === 'android' ? 600 : 400;
const imgQuality = Platform.OS === 'android' ? 0.9 : 0.75;

const Photo = (props: {fieldProperties: any; id: any}) => {
  const [imageruri, setImageruri] = React.useState<any>('');
  const [photoanswer, setPhotoanswer] = React.useState('');
  const [hasPermission, setHasPermission] = React.useState(false);
  const [barcodes, setBarcodes] = React.useState<Barcode[]>([]);
  const [isScanned, setIsScanned] = React.useState(false);
  const [scanqr, setScanqr] = React.useState(false);
  
  const devices = useCameraDevices();
  const device = devices.back;

  // Alternatively you can use the underlying function:
  // const frameProcessor = useFrameProcessor(frame => {
  //   'worklet';
  //   const detectedBarcodes = scanBarcodes(frame, [BarcodeFormat.QR_CODE]);
  //   runOnJS(setBarcodes)(detectedBarcodes);
  // }, []);

  // const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
  //   checkInverted: true,
  // });

  const dispatch = useDispatch();
  const token = useSelector(userSelectorAuthenticationToken);

  const formData = useSelector(formSelectorFormData);
  const draftFields = useSelector(formSelectorDraftFields);
  const filledUpFormFields = useSelector(formSelectorFilledUpFormFields);
  const {showActionSheetWithOptions} = useActionSheet();

  const {fieldProperties, id} = props;
  const answer = props.answer;
  
  React.useEffect(() => {
    (async (): Promise<void> => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
    })();
  }, []);

  React.useEffect(() => {
    toggleActiveState();
    return () => {
      barcodes;
    };
  }, [barcodes]);

  React.useEffect(() => {
    if(photoanswer) {
      if (answer || formData.is_draft == 1) {
        dispatch(
          FormActionUpdateDraftFieldPropertyValue({
            field_id: id,
            property_id: FieldPropertyIds.ANSWER,
            value: JSON.stringify(photoanswer),
          }),
        );
      } else {
        dispatch(
          FormActionUpdateFieldPropertyValue({
            field_id: id,
            property_id: FieldPropertyIds.ANSWER,
            value: JSON.stringify(photoanswer),
          }),
        );
      }
    }

  }, [photoanswer]);

  const toggleActiveState = async () => {
    if (barcodes && barcodes.length > 0 && isScanned === false) {
      setIsScanned(true);
      // setBarcode('');
      barcodes.forEach(async (scannedBarcode: any) => {
        if (scannedBarcode.rawValue !== '') {
          setBarcode(scannedBarcode.rawValue);
          Alert.alert(barcode);
        }
      });
    }
  };

  const theFieldProperties = fieldProperties
    ? fieldProperties
    : props.field.fieldProperties;

  const defaultValue =
    theFieldProperties[
      getIndexOfPropertyById(theFieldProperties, FieldPropertyIds.ANSWER)
    ].value;

  const DoNothing = () => {};

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

  const ImageUpload = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      compressImageMaxWidth: imgWidth,
      compressImageMaxHeight: imgHeight,
      compressImageQuality: imgQuality,
      includeBase64: true,
      cropping: true,
    }).then(image => {
      setImageruri(image.sourceURL ? image.sourceURL : image.path);

      //get filename
      var filename = image.path.replace(/^.*[\\\/]/, '');

      let myImage = {
        uri: image.path,
        name: filename,
        type: image.mime,
      };

      try {
        UploadServer(myImage).then(res=> {
          setPhotoanswer(res.data.data.upload)
        })
        .catch(err => {
          console.log(err)

          //android cannot upload image
          if(err) {
            UploadServer(myImage).then(res=> {
              setPhotoanswer(res.data.data.upload)
            })
          }
        });

      } catch (err) {
        Toast.showWithGravity('Image upload failed. Please retry.', Toast.LONG, Toast.TOP);
      }

    });
  };

  const showScanner = () => {
    setScanqr(true)
  }

  const takeNewPhoto = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      compressImageMaxWidth: imgWidth,
      compressImageMaxHeight: imgHeight,
      compressImageQuality: imgQuality,
      includeBase64: true,
      cropping: true,
    }).then(image => {
      setImageruri(image.sourceURL ? image.sourceURL : image.path);

      //get filename
      var filename = image.path.replace(/^.*[\\\/]/, '');

      let myImage = {
        uri: image.path,
        name: filename,
        type: image.mime,
      };

      UploadServer(myImage).then(res=> {
        setPhotoanswer(res.data.data.upload)
      })
      .catch(err => {
        console.log(err)

        //android cannot upload image
        if(err) {
          UploadServer(myImage).then(res=> {
            setPhotoanswer(res.data.data.upload)
          })
        }
      });

    });
  };

  const handleOnPress = () => {
    if (filledUpFormFields && formData.is_draft === 0) {
      return;
    }

    const options = ['Take from library', 'Take new picture', 'cancel'];
    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex: 3,
      },
      buttonIndex => {
        switch (buttonIndex) {
          case 0:
            ImageUpload();
            return;

          case 1:
            takeNewPhoto();
            return;

          case 2:
            showScanner();

          default:
        }
      },
    );
  };

  return (
    <View style={styles.photoContainer}>
      
      <TouchableOpacity style={{marginTop: 80}} onPress={handleOnPress}>
        <Image
          style={
            imageruri || answer
              ? styles.photoImage
              : styles.photoImagePlaceHolder
          }
          resizeMode="cover"
          source={
            answer && !photoanswer
              ? {
                  uri: `${REACT_APP_PHOTO_HOST}/${answer && answer.replace(/['"]+/g, '')}`
                }
              : imageruri
              ? {
                  uri: imageruri,
                }
              : IMAGES.PHOTO_PLACEHOLDER
          }
        />
      </TouchableOpacity>
    </View>
  );
};

export default Photo;
