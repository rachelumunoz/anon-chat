import React, {Component} from 'react'
import Comment from '../presentational/Comment'
import styles from '../styles'


class Comments extends Component {
  constructor(){
    super()

    this.state = {
      zone: 'Zone 1',
      list: [
        {username: 'geo',
         timestamp: '123',
         body: 'yo yo yo'},
         {username: 'ash',
         timestamp: '123',
         body: 'what\'s going on'}
      ]
    }
  }

  render(){
    const renderComments = this.state.list.map((comment, i)=>{
      return (
          <div style={styles.comments.container}>
            <Comment comment={comment} key={i}/>
          </div>
        )
    })

    return (
      <div> 
        <h1>{this.state.zone} Comments</h1>
        <div> 
          {renderComments}
        </div>
      </div>
    )
  }
}

export default Comments