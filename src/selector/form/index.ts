import { ApplicationState } from 'store';

export const formSelectorFormFields = (state: ApplicationState) =>
  state.FormReducer.formData.fields;

export const formSelectorFilledUpFormFields = (state: ApplicationState) =>
  state.FormReducer.formData.fillup_form_fields;

export const formSelectorDraftFields = (state: ApplicationState) =>
  state.FormReducer.formData.fillup_form_fields;

export const formSelectorFormData = (state: ApplicationState) =>
  state.FormReducer.formData;

export const formSelectorHistoryData = (state: ApplicationState) =>
  state.FormReducer.historyData;
