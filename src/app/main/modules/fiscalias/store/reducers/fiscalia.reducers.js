import { FiscaliaInterface } from '../../models/fiscaliaInterface';
import * as types from '../actions/fiscalia.actions';

const initialState = {
  open: false,
  form: FiscaliaInterface(),
  fiscaliasList: [],
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
    case types.GET_FISCALIAS: {
      return {
        ...state,
        fiscaliasList: { ...action.payload },
      };
    }
    default: {
      return state;
    }
  }
};

export default fiscaliaReducer;
