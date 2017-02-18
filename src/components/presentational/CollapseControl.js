import React, {Component} from 'react'
import classNames from 'classnames'

class CollapseControl extends Component {
  constructor(){
    super()
    
    this.state = {
      arrowClicked: false
    }
  }

  handleClick(){
    let arrowClickedStatus = this.state.arrowClicked ? false : true

    this.setState({arrowClicked: arrowClickedStatus})
    
    this.props.controlPanelToggle(true)
  }

  render(){
   const arrowClass = classNames({
      "fa": true,
      "fa-backward": true,
      "control-panel__arrow-container__icon": true,
      "backwards": this.state.arrowClicked
    })

    return (
      <div onClick={this.handleClick.bind(this)} className="control-panel__arrow-container">
        <i className={arrowClass} aria-hidden="true"></i>
      </div>
    )
  }
}

export default CollapseControl;

