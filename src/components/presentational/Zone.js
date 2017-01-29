import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import Zones from '../containers/Zones'

import {Map, CommentForm} from '../presentational'
import {Comments} from '../containers'
import {fetchZone, getCoordinates} from '../../actions'
import styles from './styles'
import StickyDiv from 'react-stickydiv'

class Zone extends Component{
  constructor(){
    super()

    this.state = {
      zone: {}
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
      console.log('changed zone')
    }  
  }


  // BUG -- update component based on route change
  componentWillReceiveProps(nextProps){
    if(nextProps.params.id !== this.props.params.id){
      this.props.fetchZone(nextProps.params.id)
    }

    if (nextProps.zone !== this.props.zone){
      this.setState({ zone: nextProps.zone})
    }
    if (nextProps.coordinates !== this.props.coordinates){
      this.setState({
        coordinates: nextProps.coordinates
      })

    }
  }


  renderMap(){
    if (this.props.zone && !this.props.coordinates){
      let zipCode = this.props.zone.zipCodes[0]
      this.props.getCoordinates(zipCode)
    }




    if(this.state.zone && this.state.coordinates){
      return (
        <StickyDiv>
          <div style={styles.map}>
            <Map 
              center={this.state.coordinates}
            />
          </div>
        </StickyDiv> 
      )
    }

  }


  getZone(){
    this.props.fetchZone(this.props.params.id)
  }

  render(){
    const {zone} = this.props
    
    if(!zone){
      return <div>Loading. from zone show..</div>
    }

    return (
      <div>
        <div className="one-half">
          <Comments zoneId={this.props.params.id} />
        </div>
        <div className="one-half">
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



