import React from 'react'
import { Field, reduxForm } from 'redux-form'
import StickyDiv from 'react-stickydiv'


const required = value => value ? undefined : 'Required'


const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    {/*<label>{label}</label>*/}
    <div>
      <input className="comments__form__input" {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const CommentForm = (props) => {
  const { handleSubmit, pristine, reset, submitting, submitComment } = props

  return (
    <StickyDiv>
      <form className="comments__form" onSubmit={handleSubmit(submitComment.bind(this))}>
        <Field name="username" type="text"
          component={renderField} label="Username"
          validate={required} 
        />
        <Field name="body" type="text"
          component={renderField} label="Comment"
          validate={required}
        />
        <div>
          <button className="comments__form__button" type="submit" disabled={submitting}>Submit</button>
        </div>
      </form>
    </StickyDiv>
  )
}

export default reduxForm({
  form: 'CommentForm' // a unique identifier for this form
})(CommentForm)
