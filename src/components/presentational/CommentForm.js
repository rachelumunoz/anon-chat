import React, {Component}  from 'react' 
import {connect} from 'react-redux'
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

  // handleSubmit(props){
  //   let updatedProps = Object.assign({}, props)
  //   updatedProps['id'] = this.props.id
    
  //   console.log('in handle subit')
  //   this.props.createComment(updatedProps)
  // }

  render(){

    const { fields: {username, body}, handleSubmit, reset} = this.props

    return (
      <form onSubmit={handleSubmit(this.props.submitO.bind(this))}>
        <div>
          <label htmlFor="username">username</label>
          <Field name="username" component="input" type="text"/>
          <div></div>
        </div>
        <div>
          <label htmlFor="body">body</label>
          <Field name="body" component="input" type="text"/>
          <div></div>

        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

// function validate(values){
//   const errors = {}

//   if(!values.username){
//     errors.username = 'Enter a username'
//   }

//   if(!values.body){
//     errors.body = 'Enter a comment'
//   }

//   return errors
// }


CommentForm = reduxForm({
  form: 'CommentForm',
  fields: ['username', 'body']
})(CommentForm);

export default CommentForm = connect(null, {createComment})(CommentForm);