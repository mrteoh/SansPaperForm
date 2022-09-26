import { Action } from 'redux';

//state
export interface FormTypeState {
  formData: any;
  scrollToRequired: number | null;
  historyData: any;     //20220908
}

//saga
export interface FormTypeLoadFormData extends Action {
  type: string;
  payload: { fields: [] };
}

export interface FormTypeUnloadFormData extends Action {
  type: string;
  payload: { fields: [] };
}

export interface FormTypeSubmitFormData extends Action {
  type: string;
  payload: null;
}

export interface FormTypeUploadFile extends Action {
  type: string;
  payload: any;
}

export interface FormTypeUploadDraftFile extends Action {
  type: string;
  payload: any;
}

//reducer
export interface FormTypeSaveFormData extends Action {
  type: string;
  payload: any;
}

export interface FormTypeUpdateFieldPropertyValue extends Action {
  type: string;
  payload: {
    field_id: any;
    fieldIndex: number;
    property_id: any;
    propertyIndex: any;
    value: any;
  };
}

export interface FormTypeUpdateDraftFieldPropertyValue extends Action {
  type: string;
  payload: {
    field_id: any;
    fieldIndex: number;
    property_id: any;
    propertyIndex: any;
    value: any;
  };
}

//gql
export interface SubmitFormData {
  geo: string;
  is_readonly: number;
  status: number;
  is_approved: number;
  is_draft: number;
  admin: { connect: string };
  form: { connect: string };
  user: { connect: string };
  fillup_form_fields: {
    upsert: {
      field: { connect: string };
      // fillup_form: {connect: number};
      answer: string;
    }[];
    create: [];
  };
}

export interface FormTypeLoadHistoryData extends Action {
  type: string;
  payload: { fields: [] };
}

// 20220908
export interface FormTypeSaveHistoryData extends Action {
  type: string;
  payload: any;
}

export type FormTypeActions =
  | FormTypeLoadFormData
  | FormTypeUnloadFormData
  | FormTypeSubmitFormData
  | FormTypeSaveFormData
  | FormTypeUpdateFieldPropertyValue
  | FormTypeUploadFile
  | FormTypeUploadDraftFile
  | FormTypeLoadHistoryData;
