import React, {Component} from 'react'
import{ ControlPanel} from '../containers'
import { Nav} from '../presentational'
import '../../../public/stylesheets/style.scss'
import classNames from 'classnames'

import {connect} from 'react-redux'
import {fetchZone} from '../../actions'


class App extends Component {

  constructor(){
    super()

    this.state = {
      collapsed: false,
      arrowClicked: false,
      zone: []
    }
  }

  componentWillReceiveProps(nextProps){
    if(this.props.zone !== nextProps.zone){
      this.setState({
        zone: nextProps.zone
      })
    }
  }

  controlPanelToggle(arrowClickedState){
    let currentCollapsedState = this.state.collapsed
    
    this.setState({
      arrowClicked: arrowClickedState,
      collapsed: !currentCollapsedState
    })
  } 

  handleZoneClick(zoneID){
    this.props.fetchZone(zoneId)
  }

  render(){
    const oneFourthClass = classNames({
      'container__one-fourth': true,
      'container__medium-one-fourth': true,
      'slide-out': this.state.collapsed && this.state.arrowClicked,
      'slide-in': !this.state.collapsed && this.state.arrowClicked
    })

    const threeFourthClass = classNames({
      'container__three-fourth': true,
      'container__medium-three-fourth': true,
      'slide-over-left': this.state.collapsed && this.state.arrowClicked,
      'slide-over-right': !this.state.collapsed && this.state.arrowClicked,
      'expand-zone-map': this.state.collapsed
    })

    return (
      <div> 
        <Nav />
        <div className="container">
          <div className={oneFourthClass}>
            <ControlPanel 
              controlPanelToggle={
                this.controlPanelToggle.bind(this)
              } 
              handleZoneClick={
                this.handleZoneClick.bind(this)
              }
            />
          </div>
          <div className={threeFourthClass}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    zone: state.zones.zone
  }
}

export default connect(mapStateToProps, {fetchZone})(App)