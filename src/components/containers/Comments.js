import React, {Component} from 'react'
import {Comment, CommentForm, Loading} from '../presentational'
import {fetchComments, createZoneComment} from '../../actions'


import {connect} from 'react-redux'
import {reset} from 'redux-form';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class Comments extends Component {

  constructor(){
    super()

    this.state = {
      comments: []
    }
  }

  componentWillMount(){
    this.props.fetchComments(this.props.zoneId)
  }

  // to see when receive props
  componentWillReceiveProps(nextProps){
    if(nextProps.comments !== this.props.comments){
        this.setState({
          comments: nextProps.comments
        })
    }
  }

  handleSubmit(props, dispatch){

    let updatedProps = Object.assign({}, props)
    updatedProps['id'] = this.props.id


    this.props.createZoneComment(this.props.zoneId, props)
  
    dispatch(reset('CommentForm'))
  }

  renderComments(){
    if (this.state.comments.length === 0){
      return (
        <Loading />
      )
    }
      return this.state.comments.map((comment)=>{
        return (
          <ReactCSSTransitionGroup 
            key={comment._id}
            transitionName="fade"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
            >
            <div className="comments__container" >
              <Comment {...comment}/>
            </div>
          </ReactCSSTransitionGroup>
        )
      })
  }

  render(){
    
    return (
       <div> 
        <CommentForm submitComment={this.handleSubmit.bind(this)} id={this.props.zoneId}/>
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

export default connect(mapStateToProps, { fetchComments, createZoneComment})(Comments)