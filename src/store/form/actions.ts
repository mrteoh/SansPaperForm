import {ActionCreator} from 'redux';
import {FormTypeActions} from './types';
import {FORM_ACTION} from './constants';

export const FormActionLoadFormData: ActionCreator<FormTypeActions> = (
  payload,
): FormTypeActions => (
  {
    type: FORM_ACTION.SAGA.LOAD_FORM_DATA,
    payload,
  }
);

export const FormActionUnloadFormData: ActionCreator<FormTypeActions> = (
  payload,
): FormTypeActions => ({
  type: FORM_ACTION.SAGA.UNLOAD_FORM_DATA,
  payload,
});

export const FormActionUpdateFieldPropertyValue: ActionCreator<
  FormTypeActions
> = (payload): FormTypeActions => ({
  type: FORM_ACTION.SAGA.UPDATE_FIELD_PROPERTY_VALUE,
  payload,
});

export const FormActionUpdateDraftFieldPropertyValue: ActionCreator<
  FormTypeActions
> = (payload): FormTypeActions => ({
  type: FORM_ACTION.SAGA.UPDATE_DRAFT_FIELD_PROPERTY_VALUE,
  payload,
});

export const FormActionSubmitFormData: ActionCreator<FormTypeActions> = (
  payload,
): FormTypeActions => ({
  type: FORM_ACTION.SAGA.SUBMIT_FORM_DATA,
  payload,
});

export const FormActionSubmitDraftFormData: ActionCreator<FormTypeActions> = (
  payload,
): FormTypeActions => ({
  type: FORM_ACTION.SAGA.SUBMIT_DRAFT_FORM_DATA,
  payload,
});

export const FormActionUploadFile: ActionCreator<FormTypeActions> = (
  payload,
): FormTypeActions => ({
  type: FORM_ACTION.SAGA.UPLOAD_FILE,
  payload,
});

export const FormActionUploadDraftFile: ActionCreator<FormTypeActions> = (
  payload,
): FormTypeActions => ({
  type: FORM_ACTION.SAGA.UPLOAD_DRAFT_FILE,
  payload,
});

export const FormActionLoadHistoryData: ActionCreator<FormTypeActions> = (
  payload,
): FormTypeActions => ({
  type: FORM_ACTION.SAGA.LOAD_HISTORY_DATA,
  payload,
});

export const UpdateFormFieldValue: ActionCreator<FormTypeActions> = (
  payload,
): FormTypeActions => ({
  type: FORM_ACTION.SAGA.UPDATE_FORM_FIELD_VALUE,
  payload,
});

export const FormActionLoadGeoData: ActionCreator<FormTypeActions> = (
  payload,
): FormTypeActions => ({
  type: FORM_ACTION.SAGA.LOAD_GEO_DATA,
  payload,
});
