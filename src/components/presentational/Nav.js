import React, {Component} from 'react'
import {Link, IndexLink} from 'react-router'
import styles from './styles'



class Nav extends Component {
  render(){
    return (
      <div >
        <nav style={styles.nav}>
          <ul style={styles.nav.ul}>
            <li style={styles.nav.li}>
              <Link style={styles.nav.logo} to="/"> Anon Chat </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Nav