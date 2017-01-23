import React, {Component} from 'react'
import {Zone, ZoneForm} from '../presentational'
import {connect} from 'react-redux'
import {Link} from 'react-router'

import {fetchZones} from '../../actions'
import {APIManager} from '../../utils'


class Zones extends Component{

  componentWillMount(){
    this.props.fetchZones()
  }

  // addZone(zone){
  //   APIManager.post('/api/zone', zone, (err, res)=>{
  //     if(err){
  //       console.log('error', err.mesesage)
  //       return
  //     }
      
  //     let updatedZones = Object.assign([], this.state.list)
  //     updatedZones.push(res.body.result)
      
  //     this.setState({
  //       list: updatedZones
  //     })
  //   })
  // }

  selectZone(index, objectId){
    // this.setState({
    //   selected: index
    // })
    console.log(index, objectId)
    //know index of current zone
    //if when selected in zone component, pass id, can pass to main, which then can pass down to comments, about current selected zone
  }

  renderZones(){
    return this.props.zones.map((zone, i)=>{
      // console.log(zone)

      // let selected = (i === this.state.selected)
      
      return (
        <div key={zone._id} >
          <li>
            <Link to={`/zone/${zone._id}`}>
              {zone.title}
            </Link> 
            <p>{zone.zipCodes}</p>
            <p>comments: {zone.numComments}</p>
          </li>
        </div>
      )
    })
    
  }

  render(){
    return (
      <div>
        
        <h1>Zone search</h1>
        <ol>
          {this.renderZones()}
        </ol>

      </div>
    )
  }
}


function mapStateToProps(state){
  return { zones: state.zones.all}
}

export default connect(mapStateToProps, {fetchZones})(Zones)