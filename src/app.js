import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Main from './components/layout/Main'

class App extends Component {
  render(){
    return (
      <div> 
        <Main />
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))