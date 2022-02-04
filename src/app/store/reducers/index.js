import { combineReducers } from 'redux';
/* Reducers */
import main from './example.reducer';

const createReducer = (asyncReducers) =>
  combineReducers({
    main,
    ...asyncReducers,
  });

export default createReducer;
