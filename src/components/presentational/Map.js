import React, {Component}from 'react'
import {GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps'

class Map extends Component {
 
  

  render(){
    const mapContainer = <div style={{height: '100%', width: '100%'}}></div>
    
       const markers = this.props.coordinates.map((coord, i)=>{
      const marker = {
        lat: coord.lat,
        lng: coord.lng
      }

      return  <Marker key={i} position={marker} /> 
    })

   
    return (
      <GoogleMapLoader
        containerElement= { mapContainer }
        googleMapElement={
          <GoogleMap 
            defaultZoom={13}
            defaultCenter={this.props.center}>
            {markers}
          </GoogleMap>
      } />
    )
  }
}

export default Map