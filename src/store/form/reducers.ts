import produce from 'immer';
import { Alert } from 'react-native';
import {
  FormTypeActions,
  FormTypeSaveFormData,
  FormTypeState,
  FormTypeUpdateFieldPropertyValue,
  FormTypeUpdateDraftFieldPropertyValue,
  FormTypeSaveHistoryData,
} from '.';
import { FORM_ACTION } from './constants';

const INIT_STATE: FormTypeState = {
  formData: {
    fields: [],
  },
  scrollToRequired: null,
  historyData: {
    fields: [],
  },
};

export default (state = INIT_STATE, action: FormTypeActions) => {
  console.debug('action.type', action.type)

  switch (action.type) {
    case FORM_ACTION.REDUCER.SAVE_FORM_DATA: {
      return produce(state, draftState => {
        const typeAction = action as FormTypeSaveFormData;
        draftState.formData = typeAction.payload;
      });
    }

    case FORM_ACTION.REDUCER.REMOVE_FORM_DATA: {
      return produce(state, draftState => {
        draftState.formData = {
          formData: {
            fields: [],
          },
        };
      });
    }

    case FORM_ACTION.REDUCER.UPDATE_FIELD_PROPERTY_VALUE: {

      const typeAction = action as FormTypeUpdateFieldPropertyValue;
      const { fieldIndex, propertyIndex, value } = typeAction.payload;

      return produce(state, (draftState: any) => {
        draftState.formData.fields[fieldIndex].fieldProperties[
          propertyIndex
        ].value = value;
      });

    }

    case FORM_ACTION.REDUCER.UPDATE_DRAFT_FIELD_PROPERTY_VALUE: {
      const typeAction = action as FormTypeUpdateDraftFieldPropertyValue;
      const { fieldIndex, propertyIndex, value } = typeAction.payload;

      return produce(state, (draftState: any) => {
        draftState.formData.fillup_form_fields[fieldIndex].field.fieldProperties[
          propertyIndex
        ].value = value;

      });

    }

    case FORM_ACTION.REDUCER.UPDATE_SCROLL_TO_REQUIRED: {
      return produce(state, draftState => {
        draftState.scrollToRequired = action.payload;
      });
    }

    // 20220908
    case FORM_ACTION.REDUCER.SAVE_HISTORY_DATA: {
      return produce(state, draftState => {
        const typeAction = action as FormTypeSaveHistoryData;
        draftState.historyData = typeAction.payload;
      });
    }

    default:
      return state;
  }
};
