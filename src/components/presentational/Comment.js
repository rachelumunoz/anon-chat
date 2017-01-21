import React, {Component} from 'react'

class Comment extends Component {
  
  render(){
    var {username, body, timestamp} = this.props
    return(
      <div>
        <p> {body} </p>
        <h3> {username} </h3>
        <p> {timestamp} </p>
        <hr/>
      </div>
    )
  }
}

export default Comment