import React, {Component} from 'react'

class ZoneForm extends Component {
  
  constructor(){
    super()

    this.state = {
      zone: {
        title: '',
        zipCodes: ''
      }
    }
  }

  addZone(){
    let updatedZone = Object.assign({}, this.state.zone)
   
   updatedZone['title'] = this.refs.zoneName.value
    updatedZone['zipCodes'] = this.refs.zipCodes.value.split(",")

    this.refs.zoneName.value = ''
    this.refs.zipCodes.value = ''

    this.props.handleSubmit(updatedZone)
  }

  render(){
    return (
      <div>
        <input ref="zoneName" type="text" placeholder="title" />
        <input ref="zipCodes" type="text" placeholder="zipcode" /><br/>
        <button onClick={this.addZone.bind(this)}> Add Zone </button>
      </div>
    )
  }
}

export default ZoneForm