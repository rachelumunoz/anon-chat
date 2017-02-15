import React, {Component} from 'react'

class CollapseControl extends Component {
  constructor(){
    super()
    // this.state = {
    //   collapsed: false
    // }
  }

  render(){
    return (
      <div onClick={this.props.click} className= "arrow-container ">
        <i className="fa fa-backward" aria-hidden="true"></i>
      </div>
    )
  }
}

export default CollapseControl;


// onClick of icon
  // parent container (controlPanel) to collapse