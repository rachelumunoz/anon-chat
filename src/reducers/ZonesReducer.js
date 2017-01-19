import {FETCH_ZONES, FETCH_ZONE} from '../actions/index'

const INITIAL_STATE = {all: [], zone: null}

export default function ZonesReducer(state=INITIAL_STATE, action){
  switch(action.type){
    case FETCH_ZONE:
      console.log(action.payload.data)
      return { ...state, zone: action.payload.data.result }
    case FETCH_ZONES:
      return { ...state, all: action.payload.data.results }
    default:
      return state
  }
}