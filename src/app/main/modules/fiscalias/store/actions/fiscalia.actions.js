import { getRequest, postRequest } from '@utils/httpMethods';
import { FiscaliaPostInterface } from '../../models/fiscaliaInterface';

export const TOGGLE_FORM_FISCALIA = '[FISCALIA] TOGGLE_FORM_FISCALIA';
export const SET_FORM_FISCALIA = '[FISCALIA] SET_FORM_FISCALIA';
export const GET_FISCALIAS = '[FISCALIA] GET_FISCALIAS';

export const CREATE_FISCALIA = '[FISCALIA] CREATE_FISCALIA';
export const SET_CREATE_FISCALIA = '[FISCALIA] SET_CREATE_FISCALIA';
//export const CREATE_FISCALIA_ERROR = '[FISCALIA] CREATE_FISCALIA_ERROR';

export const CARGAR_CATALOGOS = '[FISCALIA] CARGAR_CATALOGOS';

const urlBase = 'http://localhost:8080';

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
    dispatch({type: CREATE_FISCALIA})
    console.log("body:", body)
    const resp = await postRequest(
      `${urlBase}/fiscalia`,
      FiscaliaPostInterface(body)
    );
    //

    dispatch({ type: SET_CREATE_FISCALIA, payload: [resp.data] });
  };
}
