import React, {Component} from 'react'
import{ Zones} from '../containers'
import { Nav} from '../presentational'

export default class App extends Component {

  render(){
    return (
      <div> 
        <Nav />
        <div className="one-fourth">
          <Zones/>
        </div>
        <div className="three-fourth">
          {React.cloneElement(this.props.children, this.props)}
        </div>
      </div>
    )
  }
}


