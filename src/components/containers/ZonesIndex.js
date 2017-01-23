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
      name: 'New York',
      lat: 40.7575285,
      lng: -73.9884469
    },
    {
      name: 'New York',
      lat: 40.7575285,
      lng: -73.9884469
    },
    {
      name: 'New York',
      lat: 40.7575285,
      lng: -73.9884469
    },
    {
      name: 'New York',
      lat: 40.7575285,
      lng: -73.9884469
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