import React from 'react'
import {Route, IndexRoute } from 'react-router'
import App from './components/layout/app'
import Main from './components/layout/Main'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main}/>
    { /*<Route path="/posts/new" component={PostsNew}/>
    <Route path='/posts/:id' component={PostsShow}/>*/ }
  </Route>

)