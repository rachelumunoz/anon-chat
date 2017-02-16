import React, {Component} from 'react'
import{ ControlPanel} from '../containers'
import { Nav} from '../presentational'
import '../../../public/stylesheets/style.scss'

export default class App extends Component {

  render(){
    return (
      <div> 
        <Nav />
        <div className="container">
          <div className="container__medium-one-fourth">
            <ControlPanel/>
          </div>
          <div className="container__medium-three-fourth">
            {React.cloneElement(this.props.children, this.props)}
          </div>
        </div>
      </div>
    )
  }
}


