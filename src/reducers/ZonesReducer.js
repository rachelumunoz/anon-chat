import {FETCH_ZONES, FETCH_ZONE, FETCH_COMMENTS, GET_COORDINATES, CREATE_COMMENT, CREATE_ZONE_COMMENT, ACCOUNT_SAVE_SUCCESS} from '../actions/index'

const INITIAL_STATE = {all: [], zone: null, comments: [], coordinates: [] }

export default function ZonesReducer(state=INITIAL_STATE, action){
  switch(action.type){
    case CREATE_ZONE_COMMENT:
      return {...state, comments: action.payload.data.result.comments}
    case FETCH_ZONE:
      return { ...state, zone: action.payload.data.result}
    case FETCH_ZONES:
      return { ...state, all: action.payload.data.results }
    case FETCH_COMMENTS:
      return {...state, comments: action.payload.data.results.comments}
    case GET_COORDINATES:
      let lat = parseFloat(action.payload.data.results[0].geometry.location.lat)
      let lng = parseFloat(action.payload.data.results[0].geometry.location.lng)
      
 
      console.log('state',state)
      
      let coords = Object.assign([], state.coordinates)

      // check if coord in state already


      // coords.forEach(coord=>{
      //   if(coord[lat] !== lat && coord.lng !== lng){
          coords.push({lat, lng})
      //   }
      // })


      // console.log('coords', coords)
      // console.log('state coords',state.coordinates)

      return {...state, coordinates: coords}
    default:
      return state
  }
}