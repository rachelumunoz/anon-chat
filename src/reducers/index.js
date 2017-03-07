import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form'
import {ACCOUNT_SAVE_SUCCESS} from '../actions';

import ZonesReducer from './ZonesReducer'

const rootReducer = combineReducers({
  zones: ZonesReducer,
  form: formReducer
});

export default rootReducer;
