import React, {Component} from 'react'
import Zone from '../presentational/Zone'
import {APIManager} from '../../utils'

class Zones extends Component{
  constructor(){
    super()

    this.state = {
      zone: {
        name: '',
        zipCodes: '',
        numComments: 0
      },
      list: []
    }
  }

  componentDidMount(){
    APIManager.get('/api/zone', null, (err, res)=>{
      if(err){
        console.log('error', err.message)
        return
      }

      this.setState({
        list: res.body.results
      })
    })
  }

  addZone(){
    let updatedZone = Object.assign({}, this.state.zone)
    updatedZone['name'] = this.refs.zoneName.value
    updatedZone['zipCodes'] = this.refs.zipCodes.value.split(",")

    APIManager.post('/api/zone', updatedZone, (err, res)=>{
      if(err){
        console.log('error', err.mesesage)
        return
      }
      
      let updatedZones = Object.assign([], this.state.list)
      updatedZones.push(res.body.result)
      
      this.setState({
        list: updatedZones
      })
      this.refs.zoneName.value = ''
      this.refs.zipCodes.value = ''
    })
  }

  render(){
    

    const listItems = this.state.list.map((zone, i)=>{
      return (
        <div key={i} >
          <li><Zone zone={zone}/> </li>
        </div>
      )
    })

    return (
      <div>
        
        <input  ref="zoneName" className="form-group" type="text" placeholder="name" />
        <input  ref="zipCodes" className="form-group" type="text" placeholder="zipcode" /><br/>
        <button onClick={this.addZone.bind(this)} className="btn btn-primary"> Add Zone </button>
        
        <ol>
          {listItems}
        </ol>

      </div>
    )
  }
}

export default Zones