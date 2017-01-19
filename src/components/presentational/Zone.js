import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import CommentForm from './CommentForm'

import {fetchZone} from '../../actions'
import styles from './styles'


class Zone extends Component {
    static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount(){
    console.log('zone will mount')
    this.props.fetchZone(this.props.params.id)
  }
  
  onSelectTitle(e){
    e.preventDefault()
    console.log(e.target)
    // this.props.select(this.props.index, e.target)
  }

  render(){
    {/*const {title, zipCodes, numComments, _id, isSelected } = this.props.zone

    return (
     <div>
        <div className="one-fourth"> 
          Zones Component
        </div>
        <div className="three-fourth">
          <div>
           sdfsdfds
          </div>
        </div>
      </div>
    )*/}
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
        </div>
        <div className="one-half">
          <h1>map componenet</h1>
        </div>
       </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {zone: state.zones.zone}
}

export default connect(mapStateToProps, {fetchZone})(Zone)