import React, {Component} from 'react'
import {Zone, ZoneForm, CollapseControl} from '../presentational'
import {connect} from 'react-redux'
import {Link, IndexLink} from 'react-router'

import {fetchZones, fetchZone} from '../../actions'
import styles from './styles'

import axios from 'axios'

import './containers.css' //need css loader defined

/* RENAME to ControlPanel*/
class Zones extends Component{
  constructor(){
    super()

    this.state = {
      collapsed: false
    }
  }
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

  collapseSelf(){
      
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
          </Link> 
        </li>
      )
    })
  }

  render(){
    return (
      <div className="control-panel collapsed" style={styles.controlPanel}> 
        <CollapseControl click={this.collapseSelf.bind(this)} />
        <ol>
          <h1 id="fish" style={styles.title}>
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