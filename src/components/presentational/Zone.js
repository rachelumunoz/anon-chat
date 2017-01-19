import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import CommentForm from './CommentForm'

import {fetchZone, fetchComments} from '../../actions'
import styles from './styles'


class Zone extends Component {
    static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount(){
    this.props.fetchZone(this.props.params.id)
    // console.log('past fetch zone')
    // console.log("==============================")
    this.props.fetchComments(this.props.params.id)
    // console.log('past fetch comment', this.props.comments)

  }

  componentDidMount(){
    console.log("==========did mount==========")
    console.log(this.props)
  }
  
  onSelectTitle(e){
    e.preventDefault()
    console.log(e.target)
    // this.props.select(this.props.index, e.target)
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
          {this.renderComments()}
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
  // console.log('=======state========')
  // console.log(state)
  return {
      zone: state.zones.zone,
      comments: state.zones.comments
    }
}

export default connect(mapStateToProps, {fetchZone, fetchComments})(Zone)