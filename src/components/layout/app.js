import React, {Component} from 'react'

import Zones from '../containers/Zones'
import Comments from '../containers/Comments'
import { Nav} from '../presentational'

export default class App extends Component {
  render(){
    return (
      <div> 
        <Nav/>
        {this.props.children}
      </div>
    )
  }
}



// ReactDom.render(<App />, document.getElementById('root'))