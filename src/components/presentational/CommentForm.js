import React, {Component}  from 'react' 
import styles from './styles'

class CommentForm extends Component{
  constructor(){
    super()

    this.state = {
      comment: {
        body: '',
        username: ''
      }
    }
  }

  updateComment(){
    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment['body'] = this.refs.body.value
    updatedComment['username'] = this.refs.username.value

    this.refs.username.value = ''
    this.refs.body.value = ''
    this.props.handleSubmit(updatedComment)
  }

  render(){
    return (
      <div style={styles.comments.commentForm}>
        <div>
          <input ref="username" type="text" name="username" placeholder="Username"/>
        </div>
        <div>
          <input className="comment-box" ref="body" type="text" name="body" placeholder="Comment" />
        </div>
        <button onClick={this.updateComment.bind(this)} className="btn btn-primary">Create Comment </button>
      </div>
    )
  }
}

export default CommentForm