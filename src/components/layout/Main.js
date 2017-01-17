import React, {Component} from 'react'

import Zones from '../containers/Zones'
import Comments from '../containers/Comments'

import {Map} from '../presentational'



class Main extends Component {
  render(){
    const location = {
      lat: 40.7575285,
      lng: -73.9884469
    }


    return (
      <div className="container">
        <div style={{width:300, height: 600, background: 'red'}}>
          <Map center={location}/>
        </div>
        <div className="one-fourth">
          <Zones />
        </div>
        <div className="three-fourth">
          <Comments />
        </div> 
      </div>
    )
  }
}

export default Main