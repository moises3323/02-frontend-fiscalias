import * as types from '../actions/example.action';

const initialState = {
  state: false,
  drawer_component: {
    children: '',
  },
  drawerClosing: false,
};

const drawer = function (state = initialState, action) {
  switch (action.type) {
    case types.OPEN_DRAWER: {
      return {
        ...state,
        state: true,
      };
    }
    case types.CLOSE_DRAWER: {
      return {
        ...state,
        state: false,
        drawerClosing: !state.drawerClosing,
      };
    }

    case types.SET_CONTENT_DRAWER: {
      return {
        ...state,
        content: action.options,
      };
    }
    default: {
      return state;
    }
  }
};

export default drawer;
