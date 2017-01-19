import axios from 'axios'

export const FETCH_ZONE = 'FETCH_ZONE'
export const FETCH_ZONES = 'FETCH_ZONES'
export const FETCH_COMMENTS = 'FETCH_COMMENTS'
export const CREATE_COMMENT = 'CREATE_COMMENT'
export const CLEAR_COMMENT_FORM = 'CLEAR_COMMENT_FORM'


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
