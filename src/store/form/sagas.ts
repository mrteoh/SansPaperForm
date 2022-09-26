import { put, all, takeLatest, select, call } from 'redux-saga/effects';
import * as R from 'ramda';
import { FORM_ACTION } from './constants';
import {
  FormActionUnloadFormData,
  FormActionUpdateFieldPropertyValue,
  FormActionUpdateDraftFieldPropertyValue,
  FormTypeLoadFormData,
  FormTypeSubmitFormData,
  FormTypeUpdateFieldPropertyValue,
  FormTypeUpdateDraftFieldPropertyValue,
  FormTypeUploadFile,
  FormTypeUploadDraftFile,
  SubmitFormData,
} from '.';
import { formSelectorFormData, formSelectorFormFields, formSelectorFilledUpFormFields } from 'selector/form';
import {
  getIndexOfFieldById,
  getIndexOfPropertyById,
} from 'screen/MainScreen/FormFields/helpers';
import { userSelectorAuthenticationToken, selectUserData } from 'selector/user';
import { ApiSubmitFormData, ApiUploadFile } from 'api/form';
import {
  dismissActivityIndicator,
  showActivityIndicator,
  showInitialScreen,
} from 'navigation';
import { Alert } from 'react-native';
import { pushScreenOnResultScreen } from 'navigation/componentNavigation';
import { Screens } from 'constant/ScreenConstants';
import { FieldPropertyIds } from 'constant/fields';

type ReturnYield = any;

function* FormSagaLoadFormData({
  payload,
}: FormTypeLoadFormData): Generator<ReturnYield> {
  try {

    yield put({
      type: FORM_ACTION.REDUCER.SAVE_FORM_DATA,
      payload: payload,
    });
  } catch (error) {
    console.log('FormSagaLoadFormData error', error);
  }
}

function* FormSagaUnloadFormData({
  payload,
}: FormTypeLoadFormData): Generator<ReturnYield> {
  try {
    yield put({
      type: FORM_ACTION.REDUCER.REMOVE_FORM_DATA,
      payload: payload,
    });
  } catch (error) {
    console.log('FormSagaUnloadFormData error', error);
  }
}

function* FormSagaUpdateFieldPropertyValue({
  payload,
}: FormTypeUpdateFieldPropertyValue): Generator<ReturnYield> {
  console.log('--- FormSagaUpdateFieldPropertyValue payload', payload)

  let formFields: any = yield select(formSelectorFormFields);
  let fillupformFields: any = yield select(formSelectorFilledUpFormFields);

  const { field_id, property_id, value } = payload;
  try {

    if (formFields) {
      let fieldIndex = getIndexOfFieldById(formFields, field_id);

      let propertyIndex = getIndexOfPropertyById(
        formFields[fieldIndex].fieldProperties,
        property_id,
      );

      yield put({
        type: FORM_ACTION.REDUCER.UPDATE_FIELD_PROPERTY_VALUE,
        payload: { fieldIndex, propertyIndex, value },
      });

    }

  } catch (error) {
    console.log('FormSagaUpdateFieldPropertyValue error', error);
  }
}


function* FormSagaUpdateDraftFieldPropertyValue({
  payload,
}: FormTypeUpdateDraftFieldPropertyValue): Generator<ReturnYield> {
  console.log('---- FormSagaUpdateDraftFieldPropertyValue payload', payload)

  let formFields: any = yield select(formSelectorFormFields);

  //get filled_up_forms
  let fillupformFields: any = yield select(formSelectorFilledUpFormFields);

  const { field_id, property_id, value } = payload;
  try {

    if (formFields) {
      let fieldIndex = getIndexOfFieldById(formFields, field_id);

      let propertyIndex = getIndexOfPropertyById(
        formFields[fieldIndex].fieldProperties,
        property_id,
      );

      yield put({
        type: FORM_ACTION.REDUCER.UPDATE_DRAFT_FIELD_PROPERTY_VALUE,
        payload: { fieldIndex, propertyIndex, value },
      });

    }

    if (fillupformFields) {
      let fieldIndex = getIndexOfFieldById(fillupformFields, field_id);

      let propertyIndex = getIndexOfPropertyById(
        fillupformFields[fieldIndex].field.fieldProperties,
        property_id,
      );

      //update value
      yield put({
        type: FORM_ACTION.REDUCER.UPDATE_DRAFT_FIELD_PROPERTY_VALUE,
        payload: { fieldIndex, propertyIndex, value },
      });

    }

  } catch (error) {
    console.log('FormSagaUpdateFieldPropertyValue error', error);
  }
}

function* FormSagaSubmitFormData({
  payload,
}: FormTypeSubmitFormData): Generator<ReturnYield> {

  showActivityIndicator();
  try {
    console.log('---- FormSagaSubmitFormData payload', payload)
    let showAlert: boolean[] = [];
    let formData: any = yield select(formSelectorFormData);

    let userData: any = yield select(selectUserData);
    let authenticationToken: any = yield select(userSelectorAuthenticationToken);
    let submitFormData: SubmitFormData = {
      // ...(formData.id !== 0 && { id: formData.id }),
      geo: '-',
      is_readonly: 1,
      status: 1,
      is_approved: 0,
      is_draft: payload ? payload.is_draft : '',
      form: { connect: formData.id },
      user: { connect: userData.id },
      admin: { connect: formData.admin_id },
      fillup_form_fields: {
        upsert: [],
        create: []
      }
    }

    formData.fields?.map((item: any, key: number) => {

      let defaultValue = '';

      if (typeof item.fieldProperties[getIndexOfPropertyById(item.fieldProperties, '215')].value === 'string') {
        defaultValue = item.fieldProperties[getIndexOfPropertyById(item.fieldProperties, '215')].value
      } else {
        defaultValue = JSON.stringify((item.fieldProperties[getIndexOfPropertyById(item.fieldProperties, '215')].value))
      }

      let requiredValue = item.fieldProperties[getIndexOfPropertyById(item.fieldProperties, '212')].value;

      if (requiredValue === 'true' && !defaultValue) {
        showAlert.push(true)
        return;
      }

      submitFormData.fillup_form_fields.upsert.push({
        field: { connect: item.id },
        fillup_form: { connect: formData.id },
        answer: defaultValue,
      })
    });

    if (R.includes(true, showAlert)) {
      dismissActivityIndicator()
      Alert.alert('', 'Please fill all the required fields');
      return;
    }

    const result: any = yield call<any>(ApiSubmitFormData, { authenticationToken, submitFormData });
    dismissActivityIndicator()


    if (result.data.errors) {
      Alert.alert('Something went wrong. Unable to submit form.')
    } else {
      yield put(FormActionUnloadFormData())
      pushScreenOnResultScreen({
        componentId: Screens.RESULT_SCREEN,
        passProps: { result },
      })
    }
  } catch (error) {
    console.log('FormSagaSubmitFormData error', error);
  }
}

function* FormSagaSubmitDraftFormData({
  payload,
}: FormTypeSubmitFormData): Generator<ReturnYield> {

  showActivityIndicator();
  try {
    console.log('---- FormSagaSubmitDraftFormData payload', payload)

    let showAlert: boolean[] = [];
    let formData: any = yield select(formSelectorFormData);
    let userData: any = yield select(selectUserData);
    let authenticationToken: any = yield select(userSelectorAuthenticationToken);
    let submitFormData: SubmitFormData = {
      ...(formData.id !== 0 && { id: formData.id }),
      geo: '-',
      is_readonly: 1,
      status: 1,
      is_approved: 0,
      approved_by: null,
      is_draft: payload ? payload.is_draft : '',
      form: { connect: formData.form_id },
      user: { connect: userData.id },
      admin: { connect: formData.admin_id },
      fillup_form_fields: {
        upsert: [],
        create: []
      }
    }

    formData.fillup_form_fields?.map((item: any, key: number) => {
      const answer = item.answer;

      let defaultValue = '';

      if (typeof item.field.fieldProperties[getIndexOfPropertyById(item.field.fieldProperties, '215')].value === 'string') {
        defaultValue = item.field.fieldProperties[getIndexOfPropertyById(item.field.fieldProperties, '215')].value
      } else {
        defaultValue = JSON.stringify((item.field.fieldProperties[getIndexOfPropertyById(item.field.fieldProperties, '215')].value))
      }

      let requiredValue = item.field.fieldProperties[getIndexOfPropertyById(item.field.fieldProperties, '212')].value;

      if (requiredValue === 'true' && !answer) {
        showAlert.push(true)
        return;
      }

      submitFormData.fillup_form_fields.upsert.push(
        {
          id: item.id,
          answer: defaultValue ? defaultValue : answer,
          fillup_form: {
            connect: item.fillup_form_id,
          },
          field: {
            connect: item.field_id,
          }
        }
      )
    });

    console.log('---------- submitFormData', submitFormData)

    if (R.includes(true, showAlert)) {
      dismissActivityIndicator()
      Alert.alert('', 'Please fill all the required fields');
      return;
    }

    const result: any = yield call<any>(ApiSubmitFormData, { authenticationToken, submitFormData });
    dismissActivityIndicator()


    if (result.data.errors) {
      Alert.alert('Something went wrong. Unable to submit form.')
    } else {
      yield put(FormActionUnloadFormData())
      pushScreenOnResultScreen({
        componentId: Screens.RESULT_SCREEN,
        passProps: { result },
      })
    }
  } catch (error) {
    console.log('FormSagaSubmitDraftFormData error', error);
  }
}

function* FormSagaUploadFile({
  payload,
}: FormTypeUploadFile): Generator<ReturnYield> {
  console.log('--- FormSagaUploadFile payload', payload)

  showActivityIndicator()
  let file = payload
  let formData = new FormData();
  let authenticationToken: any = yield select(userSelectorAuthenticationToken);

  formData.append(
    'operations',
    JSON.stringify({
      query: `mutation($file: Upload!) { upload(file: $file) }`,
      variables: { file: file },
    }),
  );
  formData.append('operationName', '');
  formData.append('map', JSON.stringify({ file: ['variables.file'] }));
  formData.append('file', file);

  const result: any = yield call<any>(ApiUploadFile, { authenticationToken, formData });


  if (result.data.errors) {
    Alert.alert('Something went wrong. Unable to upload')
  } else {
    yield put(FormActionUpdateFieldPropertyValue({
      field_id: file.id,
      property_id: FieldPropertyIds.ANSWER,
      value: result.data.data.upload,
    }))

  }
  dismissActivityIndicator()
}

function* FormSagaUploadDraftFile({
  payload,
}: FormTypeUploadDraftFile): Generator<ReturnYield> {
  console.log('--- FormSagaUploadDraftFile payload', payload)

  showActivityIndicator()
  let file = payload
  let formData = new FormData();
  let authenticationToken: any = yield select(userSelectorAuthenticationToken);

  formData.append(
    'operations',
    JSON.stringify({
      query: `mutation($file: Upload!) { upload(file: $file) }`,
      variables: { file: file },
    }),
  );
  formData.append('operationName', '');
  formData.append('map', JSON.stringify({ file: ['variables.file'] }));
  formData.append('file', file);

  const result: any = yield call<any>(ApiUploadFile, { authenticationToken, formData });


  if (result.data.errors) {
    Alert.alert('Something went wrong. Unable to upload')
  } else {
    yield put(FormActionUpdateDraftFieldPropertyValue({
      field_id: file.id,
      property_id: FieldPropertyIds.ANSWER,
      value: result.data.data.upload,
    }))

  }
  dismissActivityIndicator()
}

export default all([
  takeLatest(FORM_ACTION.SAGA.LOAD_FORM_DATA, FormSagaLoadFormData),
  takeLatest(FORM_ACTION.SAGA.UNLOAD_FORM_DATA, FormSagaUnloadFormData),

  takeLatest(
    FORM_ACTION.SAGA.UPDATE_FIELD_PROPERTY_VALUE,
    FormSagaUpdateFieldPropertyValue,
  ),
  takeLatest(
    FORM_ACTION.SAGA.UPDATE_DRAFT_FIELD_PROPERTY_VALUE,
    FormSagaUpdateDraftFieldPropertyValue,
  ),
  takeLatest(FORM_ACTION.SAGA.SUBMIT_FORM_DATA, FormSagaSubmitFormData),
  takeLatest(FORM_ACTION.SAGA.SUBMIT_DRAFT_FORM_DATA, FormSagaSubmitDraftFormData),
  takeLatest(FORM_ACTION.SAGA.UPLOAD_FILE, FormSagaUploadFile),
  takeLatest(FORM_ACTION.SAGA.UPLOAD_DRAFT_FILE, FormSagaUploadDraftFile),

  takeLatest(FORM_ACTION.SAGA.LOAD_HISTORY_DATA, FormSagaLoadHistoryData),
]);

//20220908
function* FormSagaLoadHistoryData({
  payload,
}: FormTypeLoadFormData): Generator<ReturnYield> {
  console.log('--- FormSagaLoadHistoryData payload', payload)

  try {

    yield put({
      type: FORM_ACTION.REDUCER.SAVE_HISTORY_DATA,
      payload: payload,
    });
  } catch (error) {
    console.log('FormSagaLoadFormData error', error);
  }
}