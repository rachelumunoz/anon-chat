import React, {Component}from 'react'
import {GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps'

class Map extends Component {

  render(){
    const mapContainer = <div style={{height: '100%', width: '100%', margin: '0 auto'}}></div>
    
       const markers = this.props.coordinates.map((coord, i)=>{
      return  <Marker key={i} position={coord} /> 
    })

    return (
      <GoogleMapLoader
        containerElement= { mapContainer }
        googleMapElement={
          <GoogleMap 
            defaultZoom={this.props.zoom}
            defaultCenter={this.props.center}>
            {markers}
          </GoogleMap>
      } />
    )
  }
}

export default Map