import React, {Component}  from 'react' 

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
      <div>
        <div className="form-group">
          <input ref="username" type="text" name="username" placeholder="Username"/>
        </div>
        <div className="form-group">
          <input ref="body" type="text" name="body" placeholder="Comment" />
        </div>
        <button onClick={this.updateComment.bind(this)} className="btn btn-primary">Create Comment </button>
      </div>
    )
  }
}

export default CommentForm