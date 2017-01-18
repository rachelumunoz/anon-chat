import React, {Component} from 'react'

import Zones from '../containers/Zones'
import Comments from '../containers/Comments'
import { Nav} from '../presentational'


class Main extends Component {
  render(){
    return (
      <div>
        <div className="one-fourth">
          <Zones />
        </div>

        <div className="three-fourth">
          <Comments />
        </div>
      </div>
    )
  }
}

export default Main