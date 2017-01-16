import React, {Component} from 'react'
import Zone from '../presentational/Zone'

class Zones extends Component{
  constructor(){
    super()

    this.state = {
      list: [
        { name: "Zone 1", zipCode: "92008", numComments: 10 },
        { name: "Zone 2", zipCode: "92056", numComments: 3 },
        { name: "Zone 3", zipCode: "92101", numComments: 5 },
        { name: "Zone 4", zipCode: "90034", numComments: 1 },
        { name: "Zone 5", zipCode: "90024", numComments: 100 }
      ]
    }
  }

  render(){
    const listItems = this.state.list.map((zone, i)=>{
      return (
        <li><Zone key={i} zone={zone}/> </li>
      )
    })

    return (
      <div>
        <ol>
          {listItems}
        </ol>
      </div>
    )
  }
}

export default Zones