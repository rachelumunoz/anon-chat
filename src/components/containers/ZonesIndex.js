import React, {Component} from 'react'
// import Zones from './Zones'
import {Map} from '../presentational'

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
    {/*if(this.state.zones.length === 0){
      return <h1> Loading...from zones index </h1>
    }*/}

    if ( this.state.zones.length === 0){
       return <h1> Loading...from zones index </h1>
    }

    if (this.props.coordinates.length === 0){
      this.state.zones.map(zone=>{
        this.props.getCoordinates(zone.zipCodes[0])
      })
    }

    // if(this.state.coordinates){
      const location = {lat: 32.7269669, lng:-117.1647094}

      return (
        <div>
          <div style={styles.map}>
            <div style={styles.map}>
              <Map center={location} coordinates={this.state.coordinates}/>
            </div>
          </div>
        </div>
      )
    // }


  }

  render(){
    return (
      <div>
        {this.zones()} 
        <h1> hello</h1>

      </div>
    )
  }
}



   // let zipCodes = this.state.zones.reduce((a, b)=>{
   //      this.props.getCoordinates(b.zipCodes[0])
   //      return a.concat(b.zipCodes[0])
   //    }, [])

//prps --zones

function mapStateToProps(state){
    return { 
    zones: state.zones.all,
    coordinates: state.zones.coordinates
  }
}
export default connect(mapStateToProps, {fetchZones, getCoordinates})(ZonesIndex)

