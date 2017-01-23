import React, {Component} from 'react'
import Zones from './Zones'
import {Map} from '../presentational'

import styles from './styles'
import  shuffle  from 'lodash.shuffle'


const defaultLocations = [
  {
      name: 'New York',
      lat: 40.7575285,
      lng: -73.9884469
    },
    {
      name: 'Los Angeles',
      lat: 34.0522,
      lng: 118.2437
    },
    {
      name: 'Austin',
      lat: 30.2672,
      lng: 97.7431
    },
    {
      name: 'Boston',
      lat: 42.3601,
      lng: 71.0589
    },{
      name: 'Columbus',
      lat: 39.9612,
      lng: 82.9988
    }
 ]

const randomDefault = shuffle(defaultLocations)
// console.log(randomDefault[0])
    
const ZonesIndex = () => {
  return (
    <div>
      <div className="one-fourth"> 
        <Zones />
      </div>
      <div className="three-fourth">
        <div style={styles.map}>
          <Map center={randomDefault[0]}/>
        </div>
      </div>
    </div>
  )
}

export default ZonesIndex