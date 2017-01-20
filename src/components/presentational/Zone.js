import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import CommentForm from './CommentForm'
import {Map} from '../presentational'

import {fetchZone, fetchComments, getCoordinates} from '../../actions'
import {Geocode} from '../../utils'
import styles from './styles'


class Zone extends Component {
    static contextTypes = {
    router: PropTypes.object
  }
  
  constructor(){
    super()
  }

  componentWillMount(){
    this.props.fetchZone(this.props.params.id)
    this.props.fetchComments(this.props.params.id)
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.zone !== this.props.zone){
      this.setState({
        zone: nextProps.zone
      });
    }  

    if (nextProps.coordinates !== this.props.coordinates){
      this.setState({
        coordinates: nextProps.coordinates
      })
    }
  }

  renderMap(){
    if (this.state.zone && !this.state.coordinates){
      this.props.getCoordinates(parseInt(this.state.zone.zipCodes[0]))
    }

    if(this.state.zone && this.state.coordinates){
      return (
        <div style={styles.map}>
          <Map center={this.props.coordinates}/>
        </div>
      )
    }
  }

  renderComments(){
    return this.props.comments.map(comment=>{
      const {username, body, timestamp, _id} = comment
      return (
        <div key={_id}> 
          <p>
            {body}
          </p>
          <div>
            <span>{username} | {timestamp}</span>
          </div>
        </div>
      )
    })
  }

  render(){
    const {zone} = this.props
    if(!zone){
      return <div>Loading...</div>
    }

    return (
      <div>
       <div className="one-fourth">
        <h1>control panel</h1>
       </div>
       <div className="three-fourth">
        <div className="one-half">
          <h1>Cmments componenet</h1>
          <CommentForm id={this.props.params.id}/>
          {this.renderComments()}
        </div>
        <div className="one-half">
          <h1>map componenet</h1>
          <div>{this.renderMap()}</div>
        </div>
       </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
      zone: state.zones.zone,
      comments: state.zones.comments,
      coordinates: state.zones.coordinates
    }
}

export default connect(mapStateToProps, {fetchZone, fetchComments, getCoordinates})(Zone)