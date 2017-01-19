import React, {Component, PropTypes}  from 'react' 
import { Field, reduxForm } from 'redux-form';
import {createComment} from '../../actions'

import styles from './styles'

class CommentForm extends Component{


  constructor(){
    super()

    this.state = {
      body: '',
      username: ''
    }
  }

  // updateComment(){
  //   let updatedComment = Object.assign({}, this.state.comment)
  //   updatedComment['body'] = this.refs.body.value
  //   updatedComment['username'] = this.refs.username.value

  //   this.refs.username.value = ''
  //   this.refs.body.value = ''
  //   this.props.handleSubmit(updatedComment)
  // }


  submitComment(props){
    // const { createComment, reset } = this.props;
    // return createComment(props).then(() => {
    //   reset();
    // // do other success stuff
    // });
    console.log(props)
  }


  //   this.props.createPost(props)
  //     .then(()=>{
  //       //return of promise blog post has been created, navigate to the index
  //       // this.context.router.push('/')

  //     })
  // }
  render(){

    const { fields: {username, body}, handleSubmit} = this.props
    return (
      <form onSubmit={handleSubmit(this.submitComment.bind(this))}>
        <div>
          <label htmlFor="username">username</label>
          <Field name="username" {...username} component="input" type="text"/>
          <div></div>
        </div>
        <div>
          <label htmlFor="body">body</label>
          <Field name="body" {...body} component="input" type="text"/>
          <div></div>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

function validate(values){
  const errors = {}

  if(!values.username){
    errors.username = 'Enter a username'
  }

  if(!values.body){
    errors.body = 'Enter a comment'
  }

  return errors
}

// export default CommentForm
export default reduxForm({
  form: 'CommentForm',
  fields: ['username', 'body'],
  validate
 
}, null, {createComment})(CommentForm)