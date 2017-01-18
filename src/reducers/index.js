import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form'

import ZonesReducer from './ZonesReducer'

const rootReducer = combineReducers({
  zones: ZonesReducer,
  form: formReducer
});

export default rootReducer;
