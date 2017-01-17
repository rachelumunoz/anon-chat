import React, {Component} from 'react'
import {Zone, ZoneForm} from '../presentational'
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

  addZone(zone){
    APIManager.post('/api/zone', zone, (err, res)=>{
      if(err){
        console.log('error', err.mesesage)
        return
      }
      
      let updatedZones = Object.assign([], this.state.list)
      updatedZones.push(res.body.result)
      
      this.setState({
        list: updatedZones
      })
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
        
        <ZoneForm handleSubmit={this.addZone.bind(this)} />
        
        <ol>
          {listItems}
        </ol>

      </div>
    )
  }
}

export default Zones