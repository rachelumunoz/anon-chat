import React, {Component} from 'react'
import styles from './styles'


class Zone extends Component {
  

  
  onSelectTitle(e){
      e.preventDefault()
    this.props.select(this.props.index)
  }

  render(){
    const {name, zipCodes, numComments} = this.props.zone
    const title = this.props.isSelected ? <a style={styles.zone.selected} href="#"> {name} </a>: <a  href="#"> {name} </a>
    return(
      <div style={styles.zone.container}>
        <h2 onClick={this.onSelectTitle.bind(this)}> {title} </h2>
        <p> zipcodes: {zipCodes} </p>
        <p> {numComments} comments</p>
      </div>
    )
  }
}



export default Zone