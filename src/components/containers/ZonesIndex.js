import React, {Component} from 'react'
// import Zones from './Zones'
import {Map, Loading} from '../presentational'

import styles from './styles'
import {connect} from 'react-redux'
import {getCoordinates, fetchZones} from '../../actions'


class ZonesIndex extends Component{
  constructor(){
    super()
    
    this.state = {
      zones: [],
      coordinates: []
    }
  }

  componentWillMount(){
    this.props.fetchZones()
  }

  componentDidUpdate(prevProps, prevState){
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      zones: nextProps.zones,
      coordinates: nextProps.coordinates
    })
  }

  zones(){
    if ( this.state.zones.length === 0){
       return <Loading />
    }

    if (this.props.coordinates.length === 0){
      this.state.zones.map(zone=>{
        this.props.getCoordinates(zone.zipCodes[0])
      })
    }

    const location = {lat: 34.0925084
, lng: -118.4289687}

    return (
      <div>
        <div style={styles.map}>
          <div style={styles.map}>
            <Map zoom={13} center={location} coordinates={this.state.coordinates}/>
          </div>
        </div>
      </div>
    )
  }

  render(){
    return (
      <div>
        {this.zones()} 
      </div>
    )
  }
}

function mapStateToProps(state){
    return { 
    zones: state.zones.all,
    coordinates: state.zones.coordinates
  }
}
export default connect(mapStateToProps, {fetchZones, getCoordinates})(ZonesIndex)

