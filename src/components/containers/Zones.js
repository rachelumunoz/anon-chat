import React, {Component} from 'react'
import Zone from '../presentational/Zone'
import request from 'superagent'

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
    request
      .get('/api/zone')
      .query(null)
      .set('Accept', 'application/json')
      .end((err, res)=>{
        if (err){
          alert('err' + err)
          return
        }
        let results = res.body.results

        this.setState({
          list: results
        })
      })
  }

  addZone(){
    let updatedZone = Object.assign({}, this.state.zone)
    updatedZone['name'] = this.refs.zoneName.value
    updatedZone['zipCodes'] = this.refs.zipCodes.value

    let updatedZones = Object.assign([], this.state.list)
    updatedZones.push(updatedZone)
    
    this.refs.zoneName.value =''
    this.refs.zipCodes.value = ''
    
    this.setState({
      list: updatedZones
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