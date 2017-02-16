import React, {Component} from 'react'

class CollapseControl extends Component {
  constructor(){
    super()
    
    this.state = {
      arrowClicked: false
    }
  }


  handleClick(){
    this.setState({arrowClicked: true})
    
    this.props.controlPanelToggle(true)
  }

  render(){
    return (
      <div onClick={this.handleClick.bind(this)} className="control-panel__arrow">
        <i className="fa fa-backward" aria-hidden="true"></i>
      </div>
    )
  }
}

export default CollapseControl;

