import React, {Component} from 'react'
import {Comment, CommentForm} from '../presentational'
import {fetchComments, createComment} from '../../actions'
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
    this.props.fetchComments(this.props.zoneId)
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.comments !== this.props.comments){
      console.log('it changed',nextProps)
    }

  }

  handleSubmit(props){
    let updatedProps = Object.assign({}, props)
    updatedProps['id'] = this.props.id
    
    console.log('in handle subit')
    this.props.createComment(updatedProps)

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

    // console.log(props)
  }

  // renderComments(){
  //   if(!this.props.comments.length){
  //     console.log('nada')
  //   }
    

  // }

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
        <CommentForm submitO={this.handleSubmit} id={this.props.zoneId}/>
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

export default connect(mapStateToProps, { fetchComments, createComment})(Comments)