import React from 'react'
import {Route, IndexRoute } from 'react-router'
import {App, Main} from './components/layout'
import {Zone} from './components/presentational'
import ZonesIndex from './components/containers/ZonesIndex'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ZonesIndex}/>
    <Route path={"zone/:id"} component={Zone}/>
    

{ /*     <Route path="/posts/new" component={PostsNew}/>
    <Route path='/posts/:id' component={PostsShow}/>*/ }
  </Route>

)


