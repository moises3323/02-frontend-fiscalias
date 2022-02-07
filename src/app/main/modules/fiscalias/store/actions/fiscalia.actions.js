import { getRequest, postRequest, deleteRequest } from '@utils/httpMethods';
import {
  FiscaliaInterface,
  FiscaliaPostInterface,
} from '../../models/fiscaliaInterface';
export const TOGGLE_FORM_FISCALIA = '[FISCALIA] TOGGLE_FORM_FISCALIA';
export const SET_FORM_FISCALIA = '[FISCALIA] SET_FORM_FISCALIA';
export const GET_FISCALIAS = '[FISCALIA] GET_FISCALIAS';
export const CREATE_FISCALIA = '[FISCALIA] CREATE_FISCALIA';
export const SET_CREATE_FISCALIA = '[FISCALIA] SET_CREATE_FISCALIA';
export const DELETE_FISCALIA = '[FISCALIA] DELETE_FISCALIA';
export const CARGAR_CATALOGOS = '[FISCALIA] CARGAR_CATALOGOS';
export const RESET_FORM = '[FISCALIA] RESET_FORM';

//const urlBase = 'http://localhost:8080';
const urlBase = 'https://ultimo-142313.uc.r.appspot.com';

export function toggleFormFiscalia() {
  return {
    type: TOGGLE_FORM_FISCALIA,
  };
}

export function resetForm() {
  return {
    type: SET_FORM_FISCALIA,
    payload: FiscaliaInterface(),
  };
}

export function setFormFiscalia(form) {
  return {
    type: SET_FORM_FISCALIA,
    payload: form,
  };
}

export function getFiscalias() {
  return async (dispatch) => {
    const resp = await getRequest(`${urlBase}/fiscalia`);
    dispatch({ type: GET_FISCALIAS, payload: resp.data });
    dispatch(cargarCatalogos());
  };
}

export function cargarCatalogos() {
  return async (dispatch) => {
    const respDeptos = await getRequest(`${urlBase}/departamento`);
    const respMpios = await getRequest(`${urlBase}/municipio`);
    dispatch({
      type: CARGAR_CATALOGOS,
      payload: { deptos: respDeptos.data, mpios: respMpios.data },
    });
  };
}

export function createFiscalia(body) {
  return async (dispatch) => {
    dispatch({ type: CREATE_FISCALIA });
    const resp = await postRequest(
      `${urlBase}/fiscalia`,
      FiscaliaPostInterface(body)
    );
    dispatch({
      type: SET_CREATE_FISCALIA,
      payload: { data: { ...resp.data }, isCreate: !Boolean(body.id) },
    });
  };
}

export function deleteFiscalia(id) {
  return async (dispatch) => {
    await deleteRequest(`${urlBase}/fiscalia/${id}`);
    dispatch({ type: DELETE_FISCALIA, payload: id });
  };
}
