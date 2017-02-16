import React, {Component} from 'react'
import {Link, IndexLink} from 'react-router'

import '../../../public/stylesheets/style.scss' 



class Nav extends Component {
  render(){
    return (
      <div >
        <nav className="navigation">
          <ul className="navigation__list">
            <li className="navigation__list__item">
              <Link className="navigation__logo" to="/"> Anon Chat </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Nav