import {FETCH_ZONES} from '../actions/index'

const INITIAL_STATE = {all: [], zone: null}

export default function ZonesReducer(state=INITIAL_STATE, action){
  switch(action.type){
    case FETCH_ZONES:
      console.log(action.payload.data.results)
      return { ...state, all: action.payload.data.results }
    default:
      return state
  }
}