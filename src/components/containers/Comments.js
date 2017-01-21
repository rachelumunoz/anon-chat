import React, {Component} from 'react'
import {Comment, CommentForm} from '../presentational'
// import {APIManager} from '../../utils'
import {fetchComments} from '../../actions'
import {connect} from 'react-redux'

import styles from './styles'

class Comments extends Component {
  constructor(){
    super()

    this.state = {
      zone: 'Zone 1',
      list: []
    }
  }

  componentWillMount(){
    this.props.fetchComments(this.props.id)
  }

  submitComment(comment){
    // APIManager.post('/api/comment', comment, (err, res)=>{
    //   if (err){
    //     console.log('error', err.message)
    //     return
    //   }

    //   let updatedList = Object.assign([], this.state.list)
    //   updatedList.push(res.body.result)

    //   this.setState({
    //     list: updatedList
    //   })
    // })

    console.log(comment)
  }

  render(){
    const renderComments = this.props.comments.map((comment)=>{
      return (
        <div key={comment._id}>
          <Comment {...comment}/>
        </div>
      )
    })


    return (
       <div> 
        <CommentForm />
        {renderComments}
      </div>  
    )
  }
}

function mapStateToProps(state){
  return {
      comments: state.zones.comments,
    }
}

export default connect(mapStateToProps, { fetchComments})(Comments)