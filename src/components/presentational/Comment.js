import React, {Component} from 'react'
import moment from 'moment'
import styles from './styles'

class Comment extends Component {
  
  render(){
    const {username, body, timestamp} = this.props
    
    const formattedTime = moment(timestamp).calendar()

    return(
      <div style={{margin: 55}}>
        <p style={styles.comments.comment}> {body} </p>
        <span style={styles.comments.comment.details}>  {username} &mdash; {formattedTime}</span>
        <hr/>
      </div>
    )
  }
}

export default Comment