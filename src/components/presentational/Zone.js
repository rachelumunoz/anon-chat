import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import ControlPanel from '../containers/ControlPanel'

import {Map, CommentForm, Loading} from '../presentational'
import {Comments} from '../containers'
import {fetchZone, getCoordinates} from '../../actions'
import styles from './styles'
import StickyDiv from 'react-stickydiv'

class Zone extends Component{
  constructor(){
    super()

    this.state = {
      zone: {},
      coordinates: []
    }
  }

  componentDidMount(){
    this.props.fetchZone(this.props.params.id)
  }

  componentDidUpdate(prevProps){
    if (prevProps.zone !== this.props.zone){
      this.setState({
        zone: this.props.zone
      })
    }  
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      zone: nextProps.zone,
      coordinates: nextProps.coordinates
    })
  }

  renderMap(){
    if (this.props.zone && this.props.coordinates.length === 0){
      let zipCode = this.props.zone.zipCodes[0]
      this.props.getCoordinates(zipCode)
    }

    if(this.state.zone && this.state.coordinates.length > 0){
      return (
        <StickyDiv>
          <div className="map map--medium" >
            <Map 
              zoom={17}
              center={this.state.coordinates[0]}
              coordinates={this.state.coordinates}
            />
          </div>
        </StickyDiv> 
      )
    }

  }

  render(){
    const {zone} = this.props
    
    if(!zone){
      return <Loading />
    }

    return (
      <div>
        <div className="container__medium-one-half">
          <Comments zoneId={this.props.params.id} />
        </div>
        <div className="container__medium-one-half container__medium-one-half--padding-top-left">
          <div>{this.renderMap()}</div>
        </div>
      </div>
    )
  }
}

Zone.propTypes = {
  zone: React.PropTypes.object
};


function mapStateToProps(state){
  return {
      zone: state.zones.zone,
      coordinates: state.zones.coordinates
    }
}


export default connect(mapStateToProps, {fetchZone, getCoordinates})(Zone)
