export const TOGGLE_FORM_FISCALIA = '[FISCALIA] TOGGLE_FORM_FISCALIA';
export const SET_FORM_FISCALIA = '[FISCALIA] SET_FORM_FISCALIA';

export function toggleFormFiscalia() {
  return {
    type: TOGGLE_FORM_FISCALIA,
  };
}

export function setFormFiscalia(form) {
  return {
    type: SET_FORM_FISCALIA,
    payload: form
  };
}