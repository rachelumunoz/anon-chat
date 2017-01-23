import React, {Component} from 'react'
import moment from 'moment'


class Comment extends Component {
  
  render(){
    const {username, body, timestamp} = this.props
    
    const formattedTime = moment(timestamp).calendar()

    return(
      <div style={{margin: 55}}>
        <p> {body} </p>
        <h3> {username} </h3>
        <p> {formattedTime} </p>
        <hr/>
      </div>
    )
  }
}

export default Comment