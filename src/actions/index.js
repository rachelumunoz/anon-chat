import axios from 'axios'

export const FETCH_ZONE = 'FETCH_ZONE'
export const FETCH_ZONES = 'FETCH_ZONES'
export const FETCH_COMMENTS = 'FETCH_COMMENTS'
export const GET_COORDINATES = 'GET_COORDINATES'
export const CREATE_COMMENT = 'CREATE_COMMENT'
export const CLEAR_COMMENT_FORM = 'CLEAR_COMMENT_FORM'
export const CREATE_ZONE_COMMENT = 'CREATE_ZONE_COMMENT'
// export const ACCOUNT_SAVE_SUCCESS = 'ACCOUNT_SAVE_SUCCESS'

const ROOT_URL = 'http://localhost:3000/api'


export function fetchZones(){
  const request = axios.get(`${ROOT_URL}/zone`)
  
  return {
    type: FETCH_ZONES,
    payload: request
  }
}

export function fetchZone(id){
  const request = axios.get(`${ROOT_URL}/zone/${id}`)

  return {
    type: FETCH_ZONE,
    payload: request
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

  return {
    type: FETCH_COMMENTS,
    payload: request
  }
}

export function getCoordinates(encodedZip){
  const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedZip}`

  const request = axios.get(geocodeUrl)

  return {
    type: GET_COORDINATES,
    payload: request
  }
}

export function createZoneComment(zoneId, props){
  const request = axios.post(`${ROOT_URL}/zone/${zoneId}/comments`, props)

  return {
    type: CREATE_ZONE_COMMENT,
    payload: request
  }
}



