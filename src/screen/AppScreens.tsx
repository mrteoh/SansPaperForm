import { Screens } from 'constant/ScreenConstants';

import InitialScreen from './InitialScreen';
import AuthenticationScreen from './AuthenticationScreen';
import LoginScreen from './AuthenticationScreen/LoginScreen';
import RegisterScreen from './AuthenticationScreen/RegisterScreen';
import ActivityIndicatorOverlay from './ActivityIndicatorOverlay';
import HeaderScreen from './HeaderScreen';
import MainScreen from './MainScreen';

import FormsScreen from './MainScreen/Forms';
import FormFieldsScreen from './MainScreen/FormFields';
import ResultScreen from './MainScreen/FormFields/result';
import NotificationScreen from './MainScreen/Notifications';
import HomeScreen from './MainScreen/Home';
import HistoryScreen from './MainScreen/History';

import Profile from './Profile';
import FilledUpFormFieldsScreen from './MainScreen/FilledupFormFields';
import DraftFormFieldsScreen from './MainScreen/DraftFormFields';


const appScreens = new Map();

appScreens.set(Screens.INITIAL_SCREEN, InitialScreen);
appScreens.set(Screens.AUTHENTICATION_SCREEN, AuthenticationScreen);
appScreens.set(Screens.LOGIN_SCREEN, LoginScreen);
appScreens.set(Screens.REGISTER_SCREEN, RegisterScreen);

appScreens.set(Screens.HOME_SCREEN, HomeScreen);
appScreens.set(Screens.PROFILE_SCREEN, Profile);
appScreens.set(Screens.FORMS_SCREEN, FormsScreen);
appScreens.set(Screens.FORM_FIELDS_SCREEN, FormFieldsScreen);
appScreens.set(Screens.RESULT_SCREEN, ResultScreen);
appScreens.set(Screens.HISTORY_SCREEN, HistoryScreen);
appScreens.set(Screens.NOTIFICATIONS_SCREEN, NotificationScreen);
appScreens.set(Screens.FILLEDUP_FORM_FIELDS_SCREEN, FilledUpFormFieldsScreen);
appScreens.set(Screens.DRAFT_FORM_FIELDS_SCREEN, DraftFormFieldsScreen);
appScreens.set(Screens.MAIN_SCREEN, MainScreen);
appScreens.set(
  Screens.ACTIVITY_INDICATOR_OVERLAY_SCREEN,
  ActivityIndicatorOverlay,
);
appScreens.set(Screens.HEADER_SCREEN, HeaderScreen);

export default appScreens;
