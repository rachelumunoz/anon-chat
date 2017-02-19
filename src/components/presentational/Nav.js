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
              <Link className="navigation__logo" to="/"> 
                
                <svg className="navigation__logo__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" height="25px" width="25px">
                  <path d="M25 9.586C11.193 9.586 0 19.62 0 32c0 4.562 1.524 8.803 4.135 12.343C3.792 48.433 2.805 54.193 0 57c0 0 8.57-1.203 14.377-4.71C17.602 53.65 21.2 54.415 25 54.415c13.807 0 25-10.035 25-22.414S38.807 9.586 25 9.586z" fill="#3BA58B"/>
                  <path d="M58 23.414C58 11.034 46.807 1 33 1c-9.97 0-18.575 5.234-22.59 12.804 4.108-2.65 9.143-4.218 14.59-4.218C38.807 9.586 50 19.62 50 32c0 4.735-1.642 9.124-4.437 12.743 5.6 2.705 12.437 3.67 12.437 3.67-2.805-2.804-3.792-8.565-4.135-12.656 2.61-3.54 4.135-7.78 4.135-12.343z" fill="#226BAC"/>
                  <circle cx="12" cy="32" r="3" fill="#FFF"/>
                  <circle cx="25" cy="32" r="3" fill="#FFF"/>
                  <circle cx="38" cy="32" r="3" fill="#FFF"/>
                </svg>
                
                <span className="navigation__logo__text"> Anon Chat </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Nav