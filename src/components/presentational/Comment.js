import React, {Component} from 'react'
import moment from 'moment'
import styles from './styles'

import '../../../public/stylesheets/style.scss' 

class Comment extends Component {
  
  render(){
    const {username, body, timestamp} = this.props
    
    const formattedTime = moment(timestamp).calendar()

    return(
      <div className="comments__container-2">
        <p className="comments__comment__text"> {body} </p>
        <span className="comments__comment__details">  {username} &mdash; {formattedTime}</span>
        <hr/>
      </div>
    )
  }
}

export default Comment