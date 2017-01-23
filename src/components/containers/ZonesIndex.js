import React, {Component} from 'react'
import Zones from './Zones'
import {Map} from '../presentational'

import {Geocode} from '../../utils'
import styles from './styles'
// require('./styles.css')

class ZonesIndex extends Component{
  constructor(){
    super()
  }

  render(){
    
    const location = {
      lat: 40.7575285,
      lng: -73.9884469
    }

    return (
      <div>
        <div className="one-fourth"> 
          <Zones />
        </div>
        <div className="three-fourth">
          <div style={styles.map}>
            <Map center={location}/>
          </div>
        </div>
      </div>

    )
  }
}

export default ZonesIndex