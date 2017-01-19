import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form'
import {CLEAR_COMMENT_FORM} from '../actions';

import ZonesReducer from './ZonesReducer'

const rootReducer = combineReducers({
  zones: ZonesReducer,
  form: formReducer.plugin({
    CommentForm: (state, action) => { // 
      switch(action.type) {
        case CLEAR_COMMENT_FORM:
          return {...state, body:{}, username:{}}
        default:
          return state;
      }
    }
  })
});

export default rootReducer;
