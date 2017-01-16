import React, {Component} from 'react'
import styles from '../styles'


class Zone extends Component {
  
  render(){
    var {name , zipCode, numComments, key} = this.props.zone
    return(
      <div style={styles.zone.container}>
        <h2> <a style={styles.zone.a}href="#"> {name} </a></h2>
        <p> zipcode: {zipCode} </p>
        <p> {numComments} comments</p>
      </div>
    )
  }
}



export default Zone