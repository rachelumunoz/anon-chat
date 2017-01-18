import axios from 'axios'

export const FETCH_ZONES = 'FETCH_ZONES'

const ROOT_URL = 'http://localhost:3000/api'

export function fetchZones(){
  const request = axios.get(`${ROOT_URL}/zone`)
  
  return {
    type: FETCH_ZONES,
    payload: request
  }
}
