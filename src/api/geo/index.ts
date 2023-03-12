import axios from 'axios';
import React from 'react';
import { PermissionsAndroid, Platform, Linking, Alert } from 'react-native';
import Geolocation, { PositionError } from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';
import Toast from 'react-native-simple-toast';
import {GOOGLE_API_KEY} from '../../constant/keys';

const hasLocationPermission = async () => {
  let granted;
  let hasPermission;

  try {
    if(Platform.OS === 'ios'){
      hasPermission = await hasLocationPermissionIOS();
      return hasPermission;

    } else {
      granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Can we access your location?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
    }
    
    if (granted === 'granted') {
      // Toast.showWithGravity('You can use Geolocation', Toast.LONG, Toast.TOP);
      return true;
    } else {
      // Toast.showWithGravity('You cannot use Geolocation', Toast.LONG, Toast.TOP);
      return false;
    }
  } catch (err) {
    return false;
  }
};

async function hasLocationPermissionIOS() {
  const openSetting = () => {
    Linking.openSettings().catch(() => {
      Alert.alert('Unable to open settings');
    });
  };

  const status = await Geolocation.requestAuthorization('whenInUse');
 
  if (status === 'granted') {
    // Toast.showWithGravity('You can use Geolocation', Toast.LONG, Toast.TOP);
    return true;
  }

  if (status === 'denied') {
    Alert.alert('Location permission denied');
  }

  if (status === 'disabled') {
    Alert.alert(
      'Turn on Location Services to allow sanspaper to determine your location.',
      '',
      [
        {text: 'Go to Settings', onPress: openSetting},
        {text: "Don't Use Location", onPress: () => {}},
      ],
    );
  }

  return false;
}

const getLocation = async () => {
  const result = hasLocationPermission();
  return result;
};

export const fetchGeo = async () => {
  return getLocation()
};
