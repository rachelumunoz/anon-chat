import React, {Component}from 'react'
import {GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps'

class Map extends Component {
  render(){
    const mapContainer = <div style={{height: '100%', width: '100%'}}></div>
    
    return (
      <GoogleMapLoader
        containerElement= { mapContainer }
        googleMapElement={
          <GoogleMap 
            defaultZoom={8}
            defaultCenter={this.props.center}>
          </GoogleMap>
      } />



    )
  }
}

export default Map