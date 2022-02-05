import { getRequest } from '@utils/httpMethods';

export const TOGGLE_FORM_FISCALIA = '[FISCALIA] TOGGLE_FORM_FISCALIA';
export const SET_FORM_FISCALIA = '[FISCALIA] SET_FORM_FISCALIA';
export const GET_FISCALIAS = '[FISCALIA] GET_FISCALIAS';

export function toggleFormFiscalia() {
  return {
    type: TOGGLE_FORM_FISCALIA,
  };
}

export function setFormFiscalia(form) {
  return {
    type: SET_FORM_FISCALIA,
    payload: form,
  };
}

export function getFiscalias(url) {
  return async (dispatch, getState) => {
    console.log(getState());

    const resp = await getRequest(url);

    dispatch({ type: GET_FISCALIAS, payload: resp });
  };
}
