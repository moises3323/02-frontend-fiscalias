import * as types from '../actions/mainDrawer.action';

const initialState = {
  openDrawer: true,
};

const mainDrawer = function (state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_MAIN_DRAWER: {
      return {
        ...state,
        openDrawer: !state.openDrawer,
      };
    }
    default: {
      return state;
    }
  }
};

export default mainDrawer;
