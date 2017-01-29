import axios from 'axios'

export const FETCH_ZONE = 'FETCH_ZONE'
export const FETCH_ZONES = 'FETCH_ZONES'
export const FETCH_COMMENTS = 'FETCH_COMMENTS'
export const GET_COORDINATES = 'GET_COORDINATES'
export const CREATE_COMMENT = 'CREATE_COMMENT'
export const CLEAR_COMMENT_FORM = 'CLEAR_COMMENT_FORM'
export const CREATE_ZONE_COMMENT = 'CREATE_ZONE_COMMENT'


const ROOT_URL = 'http://localhost:3000/api'


export function fetchZones(){
  const request = axios.get(`${ROOT_URL}/zone`)
  
  return (dispatch) => {
    request.then(request => {
      dispatch({type: FETCH_ZONES, payload: request})
    })
  }
}

export function fetchZone(id){
  const request = axios.get(`${ROOT_URL}/zone/${id}`)


  return (dispatch)=>{
    request.then((request)=>{
      dispatch({type: FETCH_ZONE, payload: request})
    })
  }
}

export function createComment(props){
  const request = axios.post(`${ROOT_URL}/comment`, props)
  return {
    type: CREATE_COMMENT,
    payload: request
  }
}

export function fetchComments(id){
  const request = axios.get(`${ROOT_URL}/zone/${id}/comments`)

  return (dispatch)=>{
    request.then((request)=>{
      dispatch({type: FETCH_COMMENTS, payload: request})
    })
  }
}

export function getCoordinates(zipCode){
  const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=postal_code=${zipCode}`

  const request = axios.get(geocodeUrl)

  return (dispatch) => {
    request.then((result)=>{
      dispatch({type: GET_COORDINATES, payload: request})
    })
  }
}

export function createZoneComment(zoneId, props){
  const request = axios.post(`${ROOT_URL}/zone/${zoneId}/comments`, props)

  return {
    type: CREATE_ZONE_COMMENT,
    payload: request
  }
}



