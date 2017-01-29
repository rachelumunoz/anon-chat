import React, {Component} from 'react'
import {Zone, ZoneForm} from '../presentational'
import {connect} from 'react-redux'
import {Link, IndexLink} from 'react-router'

import {fetchZones, fetchZone} from '../../actions'
import styles from './styles'

import axios from 'axios'

/* RENAME to ControlPanel*/
class Zones extends Component{
  
  componentWillMount(){
    this.props.fetchZones()
  }

  componentWillReceiveProps(nextProps){
    if(this.props.zones !== nextProps.zones){
      this.setState({
        zones: nextProps.zones
      })
    }
  }


  renderZones(){
    return this.props.zones.map((zone, i)=>{
      return (
        <li 
          style={styles.li}
          key={zone._id}>
          <Link 
            activeStyle={styles.activeLink}
            key={i}
            to={`/zone/${zone._id}`} >
            <h3 style={styles.h3} >{zone.title}</h3>
            <p>{zone.zipCodes}</p>
            <p>comments: {zone.numComments}</p>
            {/*this.getCoordsOfZones()*/}
          </Link> 
        </li>
      )
    })
  }

  getCoordsOfZones(){
    // let zipCodes = this.state.zones.reduce((a, b)=>{
    //   return a.concat(b.zipCodes[0])
    // }, [])

    /* need async reduce */
    // let coords = zipCodes.reduce((a, zipCode)=>{
      
    //   let geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}`
      
    //   let zips = []
    //   let request = axios.get(geocodeUrl).then(res=>{
        
    //     let lat = parseFloat(res.data.results[0].geometry.bounds.northeast.lat)
    //     let lng = parseFloat(res.data.results[0].geometry.bounds.northeast.lng)
    //     let location = {lat, lng}
        
      
    //   })
      
    // }, [])

  }
  //get multiple coords
  // from zones get first zipcode, add to array
  // loop through array and add getCoords to new container
  //loop through new container as markers

  render(){
    return (
      <div>
        
        <ol>
          <h1 style={styles.title}>
            <IndexLink to="/" activeClassName="active" activeStyle={styles.activeLink}> Current Zones</IndexLink> </h1>
          {this.renderZones()}
        </ol>

      </div>
    )
  }
}

function mapStateToProps(state){
  return { 
    zones: state.zones.all,
    zone: state.zones.zone
  }
}

export default connect(mapStateToProps, {fetchZones, fetchZone})(Zones)