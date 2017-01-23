import React, {Component} from 'react'
import {Link, IndexLink} from 'react-router'
import styles from './styles'



class Nav extends Component {
  render(){
    return (
      <div >
        <nav style={styles.nav}>
          <ul>
            <li>
               <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Anon Chat </IndexLink>
            </li>
            
          </ul>
        </nav>

      </div>
    )
  }
}

export default Nav