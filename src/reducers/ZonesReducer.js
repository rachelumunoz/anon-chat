import {FETCH_ZONES, FETCH_ZONE, FETCH_COMMENTS, GET_COORDINATES, CREATE_COMMENT} from '../actions/index'

const INITIAL_STATE = {all: [], zone: null, comments: [], location: {} }

export default function ZonesReducer(state=INITIAL_STATE, action){
  switch(action.type){
    case CREATE_COMMENT:
      let newComment = action.payload.data.result 
      let originalState = Object.assign({}, state)
      let updatedComments = originalState.comments.concat(newComment)
      return {...state, comments: updatedComments }
    case FETCH_ZONE:
      return { ...state, zone: action.payload.data.result }
    case FETCH_ZONES:
      return { ...state, all: action.payload.data.results }
    case FETCH_COMMENTS:
      return {...state, comments: action.payload.data.results.comments}
    case GET_COORDINATES:
      // console.log(action.payload)
      let lat = parseFloat(action.payload.data.results[0].geometry.bounds.northeast.lat)
      let lng = parseFloat(action.payload.data.results[0].geometry.bounds.northeast.lng)
      return {...state, coordinates: {lat, lng}}


    default:
      return state
  }
}