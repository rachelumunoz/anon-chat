import React, {Component} from 'react'
import{ ControlPanel} from '../containers'
import { Nav} from '../presentational'
import '../../../public/stylesheets/style.scss'
import classNames from 'classnames'

export default class App extends Component {

  constructor(){
    super()

    this.state = {
      collapsed: false,
      arrowClicked: false
    }
  }


  controlPanelToggle(arrowClickedState){
    let currentCollapsedState = this.state.collapsed
    
    this.setState({
      arrowClicked: arrowClickedState,
      collapsed: !currentCollapsedState
    })
  } 

  render(){
    const oneFourthClass = classNames({
      'container__medium-one-fourth': true,
      'slide-out': this.state.collapsed && this.state.arrowClicked,
      'slide-in': !this.state.collapsed && this.state.arrowClicked
    })


    return (
      <div> 
        <Nav />
        <div className="container">
          <div className={oneFourthClass}>
            <ControlPanel controlPanelToggle={this.controlPanelToggle.bind(this)} />
          </div>
          <div className="container__medium-three-fourth--slide">
            {React.cloneElement(this.props.children, this.props)}
          </div>
        </div>
      </div>
    )
  }
}


