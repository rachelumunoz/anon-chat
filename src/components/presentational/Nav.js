import React, {Component} from 'react'
import {Link, IndexLink} from 'react-router'


class Nav extends Component {
  render(){
    return (
      <div>
        <nav>
          <ul>
            <li>
               <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Home </IndexLink>
            </li>
            
          </ul>
        </nav>

      </div>
    )
  }
}

export default Nav