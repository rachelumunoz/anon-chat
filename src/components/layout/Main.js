import React, {Component} from 'react'

import Zones from '../containers/Zones'
import Comments from '../containers/Comments'


class Main extends Component {
  render(){
    return (
       <div className="container ">
        <div className="row">
          <div className="col-md-4">
            <Zones />
          </div>
          <div className="col-md-8 text-center">
            <Comments />
          </div>
        </div>
       </div>
    )
  }
}

export default Main