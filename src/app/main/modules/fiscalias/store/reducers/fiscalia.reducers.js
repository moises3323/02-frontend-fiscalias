import { FiscaliaInterface } from '../../models/fiscaliaInterface';
import * as types from '../actions/fiscalia.actions';

const initialState = {
  open: false,
  form: FiscaliaInterface(),
  fiscaliasList: [],
  municipios: [],
  departamentos: [],
  processing: false,
};

const fiscaliaReducer = function (state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_FORM_FISCALIA: {
      return {
        ...state,
        open: !state.open,
      };
    }
    case types.SET_FORM_FISCALIA: {
      return {
        ...state,
        form: { ...action.payload },
      };
    }
    case types.CREATE_FISCALIA: {
      return {
        ...state,
        processing: true,
      };
    }
    case types.SET_CREATE_FISCALIA: {
      let fiscaliasListCopy = [...state.fiscaliasList];
      let indexFiscalia = fiscaliasListCopy.findIndex(
        (fiscalia) => fiscalia.id === action.payload.data.id
      );

      if (action.payload.isEdit) {
        fiscaliasListCopy[indexFiscalia] = FiscaliaInterface({
          ...action.payload.data,
        });
      } else {
        fiscaliasListCopy = [
          ...fiscaliasListCopy,
          FiscaliaInterface({
            ...action.payload.data,
          }),
        ];
      }

      return {
        ...state,
        fiscaliasList: [...fiscaliasListCopy],
        processing: false,
        open: false,
        form: FiscaliaInterface(),
      };
    }
    case types.GET_FISCALIAS: {
      return {
        ...state,
        fiscaliasList: [
          ...action.payload.map((fiscalia) => FiscaliaInterface(fiscalia)),
        ],
      };
    }
    case types.CARGAR_CATALOGOS: {
      return {
        ...state,
        municipios: [
          ...action.payload.mpios.map((mpio) => ({
            value: mpio.id,
            label: mpio.descripcion,
            departamento_id: mpio.departamento.id,
          })),
        ],
        departamentos: [
          ...action.payload.deptos.map((depto) => ({
            value: depto.id,
            label: depto.descripcion,
          })),
        ],
      };
    }
    case types.DELETE_FISCALIA: {
      return {
        ...state,
        fiscaliasList: state.fiscaliasList.filter(
          (fiscalia) => fiscalia.id !== action.payload
        ),
        open: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default fiscaliaReducer;
