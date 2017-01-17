import React, {Component} from 'react'
import {Comment, CommentForm, SimpleMap} from '../presentational'
import {APIManager} from '../../utils'

import styles from './styles'


class Comments extends Component {
  constructor(){
    super()

    this.state = {
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

  submitComment(comment){
    APIManager.post('/api/comment', comment, (err, res)=>{
      if (err){
        console.log('error', err.message)
        return
      }

      let updatedList = Object.assign([], this.state.list)
      updatedList.push(res.body.result)

      this.setState({
        list: updatedList
      })
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
          <CommentForm handleSubmit={this.submitComment.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default Comments