import React, {Component} from 'react'
import {Zone, ZoneForm} from '../presentational'
import {APIManager} from '../../utils'

class Zones extends Component{
  constructor(){
    super()

    this.state = {
      selected: 0,
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

  selectZone(index){
    this.setState({
      selected: index
    })
    //know index of current zone
    //if when selected in zone component, pass id, can pass to main, which then can pass down to comments, about current selected zone
  }

  render(){

    const listItems = this.state.list.map((zone, i)=>{
      console.log(zone)

      let selected = (i === this.state.selected)
      return (
        <div key={i} >
          <li><Zone index={i} select={this.selectZone.bind(this)} isSelected={selected} zone={zone}/> </li>
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