import {FETCH_ZONES, FETCH_ZONE, FETCH_COMMENTS} from '../actions/index'

const INITIAL_STATE = {all: [], zone: null, comments: []}

export default function ZonesReducer(state=INITIAL_STATE, action){
  switch(action.type){
    case FETCH_ZONE:
     
      return { ...state, zone: action.payload.data.result }
    case FETCH_ZONES:
      return { ...state, all: action.payload.data.results }
    case FETCH_COMMENTS:
      console.log('==========FETCH_COMMENTS acion=============')
      console.log(action.payload.data)
      return {...state, comments: action.payload.data.results.comments}
    default:
      return state
  }
}