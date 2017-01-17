import React, {Component} from 'react'

class ZoneForm extends Component {
  
  constructor(){
    super()

    this.state = {
      zone: {
        name: '',
        zipCodes: ''
      }
    }
  }

  addZone(){
    let updatedZone = Object.assign({}, this.state.zone)
    updatedZone['name'] = this.refs.zoneName.value
    updatedZone['zipCodes'] = this.refs.zipCodes.value.split(",")

    this.refs.zoneName.value = ''
    this.refs.zipCodes.value = ''

    this.props.handleSubmit(updatedZone)
  }

  render(){
    return (
      <div>
        <input ref="zoneName" className="form-group" type="text" placeholder="name" />
        <input ref="zipCodes" className="form-group" type="text" placeholder="zipcode" /><br/>
        <button onClick={this.addZone.bind(this)} className="btn btn-primary"> Add Zone </button>
      </div>
    )
  }
}

export default ZoneForm