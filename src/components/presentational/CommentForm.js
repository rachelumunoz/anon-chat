import React from 'react'
import { Field, reduxForm } from 'redux-form'
import styles from './styles'


const required = value => value ? undefined : 'Required'


const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    {/*<label>{label}</label>*/}
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const CommentForm = (props) => {
  const { handleSubmit, pristine, reset, submitting, submitComment } = props

  return (
    <form style={styles.commentForm} onSubmit={handleSubmit(submitComment.bind(this))}>
      <Field name="username" type="text"
        component={renderField} label="Username"
        validate={required} 
      />
      <Field name="body" type="text"
        component={renderField} label="Comment"
        validate={required}
      />
      <div>
        <button type="submit" disabled={submitting}>Submit</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'CommentForm' // a unique identifier for this form
})(CommentForm)
