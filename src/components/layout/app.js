import React, { Component } from 'react'
// import ReactDom from 'react-dom'
import Main from './Main'

export default class App extends Component {
  render(){
    return (
      <div> 
        {this.props.children}
      </div>
    )
  }
}



// ReactDom.render(<App />, document.getElementById('root'))