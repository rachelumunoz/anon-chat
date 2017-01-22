import React, {Component} from 'react'
import {Comment, CommentForm} from '../presentational'
import {fetchComments, createComment} from '../../actions'
import {connect} from 'react-redux'

import styles from './styles'

class Comments extends Component {

  constructor(){
    super()

    this.state = {
      comments: []
    }
  }


  componentWillMount(){
    console.log("wil mount")
    this.props.fetchComments(this.props.zoneId)
    console.log('current comments tate', this.state.comments)
  }

  // to see when receive props
  componentWillReceiveProps(nextProps){
    if(nextProps.comments !== this.props.comments){
      console.log("=-=-=-=-=-=-=-=-=-=-=-=-")
      console.log('it changed', nextProps)
        this.setState({
          comments: nextProps.comments
        })
      // console.log('current comments tate receive prosp', this.state)
    }

  }

  //default props to set comments


  //from commentform submit see if comments state updated

  handleSubmit(props){
    let updatedProps = Object.assign({}, props)
    updatedProps['id'] = this.props.id
    
    this.props.createComment(updatedProps)
    console.log("comment sent out to reducer")
  }


  //comments as id's not objects

  renderComments(){
    if (this.state.comments.length === 0){
      return (
        <div> <h1> Fetching comments</h1></div>
      )
    }
      return this.state.comments.map((comment)=>{
        return (
          <div key={comment._id}>
            <Comment {...comment}/>
          </div>
        )
      })
  }

  render(){
    
    return (
       <div> 
        <CommentForm submitComment={this.handleSubmit} id={this.props.zoneId}/>
        {this.renderComments()}
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