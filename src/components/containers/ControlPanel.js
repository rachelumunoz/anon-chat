import React, {Component} from 'react'
import {Zone, ZoneForm, CollapseControl} from '../presentational'
import {connect} from 'react-redux'
import {Link, IndexLink} from 'react-router'

import {fetchZones, fetchZone} from '../../actions'
import styles from './styles'

import classNames from 'classnames'
import axios from 'axios'

import '../../../public/stylesheets/style.scss' 

class ControlPanel extends Component{
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
          className="control-panel__list__item"
          key={zone._id}>
          <Link 
            activeStyle={styles.activeLink}
            key={i}
            to={`/zone/${zone._id}`} >
            <h3 className="control-panel__list__item__title">{zone.title}</h3>
            <p className="control-panel__list__detail">{zone.zipCodes}</p>
            <p className="control-panel__list__detail">comments: {zone.numComments}</p>
          </Link> 
        </li>
      )
    })
  }

  render(){
    
    return (
      <div className="control-panel" >
        <CollapseControl controlPanelToggle={this.props.controlPanelToggle.bind(this)}/>
        <ol className="control-panel__list">
          <h1 className="control-panel__list__title">
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

export default connect(mapStateToProps, {fetchZones, fetchZone})(ControlPanel)