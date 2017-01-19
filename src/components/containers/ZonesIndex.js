import React, {Component} from 'react'
import Zones from './Zones'
import {Map} from '../presentational'
import styles from './styles'


class ZonesIndex extends Component{
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