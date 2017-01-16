import React, {Component} from 'react'
import Comment from '../presentational/Comment'
import {APIManager} from '../../utils'

import styles from './styles'


class Comments extends Component {
  constructor(){
    super()

    this.state = {
      comment: {
        username: '',
        body: '',
        timestamp: ''
      },
      zone: 'Zone 1',
      list: []
    }
  }

  componentDidMount(){
    APIManager.get('/api/comment', null, (err, res)=>{
      if (err){
          alert("err" + err.message)
          return
        }
      this.setState({
          list: res.body.results
        })
    })
  }

  submitComment(){
    // console.log(JSON.stringify(this.state.comment))
    let updatedList = Object.assign([], this.state.list)
    updatedList.push(this.state.comment)

    this.refs.username.value = ''
    this.refs.body.value = ''
    
    this.setState({
      list: updatedList
    })
  }

  updateUsername(){
    // console.log(this.refs.username.value)
    
    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment['username'] = this.refs.username.value
    
    this.setState({
      comment: updatedComment
    })
  }

  updateBody(){
    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment['body'] = this.refs.body.value
    this.setState({
      comment: updatedComment
    })
  }
  
  render(){
    const renderComments = this.state.list.map((comment, i)=>{
      return (
          <div  key={i} style={styles.comments.container}>
            <Comment comment={comment}/>
          </div>
        )
    })

    return (
      <div> 
        <h1>{this.state.zone} Comments</h1>
        <div> 
          {renderComments}
        </div>

        <div>
          
            <div className="form-group">
              <input onChange={this.updateUsername.bind(this)} ref="username" type="text" name="username" placeholder="Username"/>
            </div>
            <div className="form-group">
              <input onChange={this.updateBody.bind(this)} ref="body" type="text" name="body" placeholder="Comment" />
            </div>
            <button onClick={this.submitComment.bind(this)} className="btn btn-primary">Create Comment </button>

        </div>
      </div>
    )
  }
}

export default Comments